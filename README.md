# homebridge-parrot-flower

[Français](README_FR.md) 👈

Warning: this project is a fork of [@grover's homebridge-flower-sensor project](https://github.com/grover/homebridge-flower-sensor).

Integrate [Parrot Flower Power](https://www.parrot.com/us/connected-garden/parrot-pot#parrot-pot), the [Parrot Pot](https://www.parrot.com/us/connected-garden/parrot-pot#parrot-pot) or the never released [Parrot H2O](http://blog.parrot.com/2015/01/05/ces-2015-flower-power-h2o/) into HomeKit using [homebridge](https://github.com/nfarina/homebridge). This plugin does not depend upon the now discontinued [Parrot Cloud](https://community.smartthings.com/t/parrot-flower-power-discontinued/78929) by talking directly to the sensors using a Bluetooth Low Energy connection.

## Status

[![HitCount](http://hits.dwyl.com/antoineraulin/homebridge-parrot-flower.svg)](http://hits.dwyl.com/antoineraulin/homebridge-parrot-flower)
[![Node version](https://img.shields.io/node/v/homebridge-flower-sensor.svg?style=flat)](http://nodejs.org/download/)
[![npm version](https://badge.fury.io/js/homebridge-parrot-flower.svg)](https://badge.fury.io/js/homebridge-parrot-flower)
![Licence](https://img.shields.io/github/license/antoineraulin/homebridge-parrot-flower)

## Capabilities

This plugin exposes the following capabilities of the Flower Power sensor to HomeKit:

* Soil Temperature
* Soil Moisture
* Ambient Light Level
* Identifying the sensor flashes the built-in LED
* Monitor the battery status of the Flower Power sensor
* Provides date/time the sensor data was last retrieved
* Provides the date/time the batteries were last changed
* 24h average low light level sensor trigger for plant recommendations
* 24h average low humidity level sensor trigger to remind you to water your plants

These capabilities are specific to the Parrot Pot:

* Start watering
* In Elgato Eve, see the type of program (manual or automatic) for watering. (Accessory type Irrigation system)

There're more capabilities planned for the future. And see the [CHANGELOG](CHANGELOG.md) for release information.

## Using this plugin

To use this plugin I recommend a [Raspberry Pi Zero W](https://www.raspberrypi.org/products/raspberry-pi-zero-w/). You can monitor multiple Flower Power devices in one homebridge on one Raspberry Pi Zero W.

* [Install on a Raspberry Pi](docs/raspberrypi.md)
* [Install on a Mac](docs/macos.md)
* [Add Flower Power sensors to HomeKit](docs/configure.md)

Please be aware of the [limitations and coexistance](docs/limitations.md) with other plugins using Bluetooth:

## Supported clients

This platform and the switches it creates have been verified to work with the following apps on iOS 11 (tested on iOS 13.4.1):

* Home
* Elgato Eve

See [HomeKit Apps](docs/apps.md) for a comparison table of supported features.

## Credits

See [CREDITS](CREDITS.md) for acknowledgements to the individuals that contributed directly or indirectly to this plugin.

## Some asks for friendly gestures

If you use this and like it - please leave a note by staring this package here or on GitHub.

If you use it and have a problem, file an issue at [GitHub](https://github.com/antoineraulin/homebridge-parrot-flower/issues) - I'll try to help.

If you tried this, but don't like it: tell me about it in an issue too. I'll try my best
to address these in my spare time.

If you fork this, go ahead - I'll accept pull requests for enhancements.

## License

MIT License

Copyright (c) 2017 Michael Fröhlich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

The updates brought to the project since the fork are under the copyright of Antoine Raulin under the MIT license.

Update copyright (c) 2020 Antoine Raulin