'use strict';

const WaterPlantTask = require('../parrot/WaterPlantTask');

let ContactSensorState, On, WaterLevel, WateringMode, WateringStatus, Active, InUse, ProgramMode, ValveType;

class WateringService {

  constructor(log, api, name, device) {
    this.log = log;
    this.name = name;
    this._device = device;

    ContactSensorState = api.hap.Characteristic.ContactSensorState;
    On = api.hap.Characteristic.On;
    Active = api.hap.Characteristic.Active;
    InUse = api.hap.Characteristic.InUse;
    WaterLevel = api.hap.Characteristic.WaterLevel;
    WateringMode = api.hap.Characteristic.WateringMode;
    ProgramMode = api.hap.Characteristic.ProgramMode;
    ValveType = api.hap.Characteristic.ValveType;
    WateringStatus = api.hap.Characteristic.WateringStatus;

    this._createService(api.hap);

    device
      .on('deviceStatusChanged', this._onDeviceStatusChanged.bind(this))
      .on('wateringStatus', this._onWateringData.bind(this));
  }

  _createService(hap) {
    this._wateringService = new hap.Service.IrrigationSystem(this.name);

    this._waterPlantSwitch = new hap.Service.Valve(`${this.name} Watering`);
    this._waterPlantSwitch.getCharacteristic(ValveType).updateValue(1);
    this._waterPlantSwitch.getCharacteristic(Active)
      .on('set', this._waterPlant.bind(this))
      .updateValue(false)
      .displayName = 'Water Plant';

    this._wateringError = new hap.Service.ContactSensor(`${this.name} Watering Error`, 'watering-error');
  }

  getServices() {
    return [this._wateringService, this._waterPlantSwitch, this._wateringError];
  }

  _onDeviceStatusChanged(deviceStatus) {
    if (deviceStatus.lowWater === true) {
      this._device.requestWateringStatus();
    }
  }

  _onWateringData(wateringStatus) {

    if(wateringStatus.wateringMode == "Manual"){
      this._wateringService.getCharacteristic(ProgramMode).updateValue(0);
    }else{
      this._wateringService.getCharacteristic(ProgramMode).updateValue(1);
    }

    if(wateringStatus.wateringStatus == "Watering"){
      this._wateringService.getCharacteristic(Active).updateValue(true);
      this._wateringService.getCharacteristic(InUse).updateValue(true);
    }else{
      this._wateringService.getCharacteristic(Active).updateValue(false);
      this._wateringService.getCharacteristic(InUse).updateValue(false);
    }

    this._updateSensor(this._wateringError, wateringStatus.hasWateringError);
  }

  _updateSensor(sensor, state) {
    const value = state
      ? ContactSensorState.CONTACT_NOT_DETECTED
      : ContactSensorState.CONTACT_DETECTED;

    sensor.getCharacteristic(ContactSensorState)
      .updateValue(value);
  }

  async _waterPlant(value, callback) {
    if (!value) {
      callback();
    }

    try {
      this._waterPlantSwitch.getCharacteristic(InUse)
      .updateValue(true);
      this._wateringService.getCharacteristic(Active).updateValue(true);
      this._wateringService.getCharacteristic(InUse).updateValue(true);
      await this._device.execute(new WaterPlantTask());

      setTimeout(this._resetWaterPlantSwitch.bind(this), 10000);
      callback();
    }
    catch (e) {
      callback(e);
    }
  }

  _resetWaterPlantSwitch() {
    this._waterPlantSwitch.getCharacteristic(Active)
      .updateValue(false);
    this._waterPlantSwitch.getCharacteristic(InUse)
      .updateValue(false);
      this._wateringService.getCharacteristic(Active).updateValue(false);
      this._wateringService.getCharacteristic(InUse).updateValue(false);
  }
}

module.exports = WateringService;
