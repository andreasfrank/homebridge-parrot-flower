# Changelog

## Version 0.4.1

* Display the water level in the tank
* Leak detector activated when the water level in the tank is too low (< 15%).

## Version 0.4

First update since the fork.

* This update brings the appearance of an "Irrigation system" accessory to view the watering status and the watering programming mode for a Parrot Pot (manual or automatic).

* The accessory responsible for switching on the watering of the Parrot Pot that was previously a switch is now a Water Valve, so it appears as a sprinkler in HomeKit and takes care of the waiting time between pressing in Homekit and the actual start of watering on the pot with the display of a "Loading" message in Homekit.

* A typing error in the humidity threshold management has been corrected. 

* Raspberry Pi installation documentation has been updated to support the latest version of Node.js and deal with the problems associated with Noble dependency.

## Version 0.3

* Parrot Pot support
  * Display remaining water tank level
  * Display configured watering mode
  * Display watering status
  * Trigger manual watering
  * Contact sensor to trigger on watering errors
* Sped up bluetooth control
* Improved operation with multiple Parrot Pot and Flower Power devices

## Version 0.2

* Add last updated status as in homebridge-hue
* Add uptime support
* Enable recommended settings setup (e.g. from Parrot App.)
* Enable sensors to trigger rules if recommended settings are too low

## Version 0.1

* Refresh battery status once per day
* Refresh sensor values automatically (in 10min intervals)
* Retrieve FlowerPower device type and Color
