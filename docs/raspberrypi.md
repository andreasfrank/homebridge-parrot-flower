# Installation on Raspberry Pi

This project was primarily made to run on one or more small Raspberry Pis that
are distributed to achieve good signal strength closely located to the Bluetooth
accessories you might have.

## Compatible Hardware

This project was tested with a Raspberry Pi Zero W, which has an integrated WiFi
and Bluetooth chipset. Other combinations may work or not. If you find a combination
that works, please contribute your knowledge.

## Install Raspbian Buster

I've good experiences running this on a fresh Raspbian Buster. As always: Other versions may
work and your mileage may vary.

Follow the [official guidelines to install Raspbian](https://www.raspberrypi.org/documentation/installation/).

Once you've configured Raspbian including all networking stuff, you'll need Node.js.

## Remove default node.js

The Raspbian distribution may still include the old Node 4.8.3 distribution. Uninstall this before you continue with the following steps:

```bash
sudo apt-get remove nodejs
```

This will prompt you to remove nodejs, node-legacy, nodered and potentially some other packages that depend upon it.

## Install node.js

> _These instructions ask you to install node.js 12.16.3 LTS, but a newer version may work too._

### Installation using a PPA
To get a more recent version of Node.js, you can add the PPA (personal package archive) maintained by NodeSource. This will allow you to find more recent versions of Node.js than the official Raspbian repositories.

First, install the PPA in order to access its contents. In your home directory, use `curl` to retrieve the installation script of your desired version, making sure to replace 12.x (latest LTS) with the string of your desired version (if different) :

```bash
cd ~
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
```

You can inspect the content of this script with `nano` (or your favorite text editor) :

```bash
nano nodesource_setup.sh
```

Run the script under `sudo` :

```bash
sudo bash nodesource_setup.sh
```

The PPA will be added to your configuration and the local cache of your package will be automatically updated. After running the Nodesource installation script, you can install the Node.js package :

```bash
sudo apt install nodejs
```

To check which version of Node.js you have installed after these first steps, type : 

```bash
node -v
```

The `nodejs` package contains the `nodejs` binary as well as `npm`, so you don't need to install `npm` separately.

`npm` uses a configuration file in your home directory to track updates. It will be created the first time you use `npm`. Run this command to verify that `npm` is installed and to create the configuration file :

```bash
npm -v
```

For some `npm` packages to work (for example, those that require source code compilation), you will need to install the `build-essential` package:

```bash
sudo apt install build-essential
```

You now have the necessary tools to work with npm packages that require compiling source code.

> _These instructions have been freely adapted from [DigitalOcean's tutorial for installing Node.js on Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04)_

## Install homebridge

This plugin needs version **0.4.36** of homebridge. Earlier versions will not work. Later should work.

To install Hombridge please refer to the [Hombridge project on GitHub](https://github.com/homebridge/homebridge).

If you want to have a graphical interface for Homebridge follow this (official) tutorial instead: [oznu/homebridge-config-ui-x](https://github.com/oznu/homebridge-config-ui-x)

## Bluetooth issues

Please be aware of the following problems in noble, which affect the bluetooth
connections to your accessories:

- [Noble #465](https://github.com/noble/noble/issues/465)
- [Noble #480](https://github.com/noble/noble/issues/480)
- [Noble #474](https://github.com/noble/noble/issues/474)

It also does not seem to be the fault of noble. Using a USB Bluetooth Dongle with 
a Cambridge Silicon Radio CSR8510A10 chip has worked well for me. Unfortunately
that means that the Broadcom Bluetooth chip in recent Raspberry Pi 3/Zero W
models does not work well with the Parrot devices.

On the other hand, having tested it, the Bluetooth module of the Raspberry Pi 4 works correctly with this plugin.

## Install noble dependencies

Install the noble dependencies for Raspbian by executing the commands:

```bash
sudo apt-get install bluetooth bluez libbluetooth-dev libudev-dev
```

## Install this plugin

And finally install homebridge-flower-sensor with:

```bash
sudo npm install -g homebridge-parrot-flower --unsafe-perm
```

## Noble installation issues on latest Raspbian:

The Noble package uses an abandoned dependency (bluetooth-hci-socket), i.e. it is no longer updated and its installation fails on Raspberry. 

That's why I propose the following method to make the plugin work on Raspberry:

Move to the plugin directory (normally: `/usr/lib/node_modules/homebridge-parrot-flower/`):

```bash
cd /usr/lib/node_modules/homebridge-parrot-flower/
```

Install the version of [bluetooth-hci-socket managed by the collective @abandonware](https://www.npmjs.com/package/@abandonware/bluetooth-hci-socket) : 

```bash
npm i @abandonware/bluetooth-hci-socket
```

Move the bluetooth-hci-socket folder to the correct location : 

```bash
cd node_modules
cd @abandonware
mv bluetooth-hci-socket ../
```

There you go! The plugin should now work on your Raspberry.

## Give node bluetooth privileges

If you're launching homebridge as a non-root user (you should!) you need to give the node executable permissions to start and stop bluetooth advertising:

```bash
sudo apt-get install libcap2-bin
sudo setcap cap_net_raw+eip /opt/node/bin/node
```

Continue by [adding your Flower Power device](configure.md).
