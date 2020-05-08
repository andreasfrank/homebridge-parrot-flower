# Installation sur Raspberry Pi

Ce projet a été principalement conçu pour fonctionner sur un ou plusieurs petits Raspberry Pi qui
sont placés pour obtenir une bonne puissance de signal, proche de celle des accessoires bluetooth que vous pourriez avoir.

## Matériel compatible

Ce projet a été testé avec une Raspberry Pi Zero W et un Raspberry Pi 4, qui disposent d'un WiFi intégré
et de la puce Bluetooth. D'autres combinaisons peuvent fonctionner ou non. Si vous trouvez une combinaison qui fonctionne, merci de me le faire savoir.

## Installer Raspbian Buster

J'ai testé que c'était fonctionnel sur Raspbian Buster. Comme toujours : Les autres versions peuvent fonctionner également.

Suivez les [directives officielles pour l'installation de Raspbian](https://www.raspberrypi.org/documentation/installation/).

Une fois que vous avez configuré Raspbian, y compris tous les éléments de réseau, vous aurez besoin de Node.js.

## Supprimer le fichier node.js par défaut

La distribution Raspbian peut toujours inclure l'ancienne distribution Node 4.8.3. Désinstallez-la avant de poursuivre les étapes suivantes :

```bash
sudo apt-get remove nodejs
```

Cela vous incitera à supprimer les nodejs, les node-legacy, les nodered et éventuellement d'autres paquets qui en dépendent.

## Installer node.js

> _Ces instructions vous demandent d'installer node.js 12.16.3 LTS, mais une version plus récente peut aussi fonctionner._

### Installation à l'aide d'un PPA
Pour obtenir une version plus récente de Node.js, vous pouvez ajouter le PPA (personal package archive) maintenu par NodeSource. Celui-ci vous permettra de trouver des versions plus récentes de Node.js que les référentiels officiels Raspbian.

Tout d'abord, installez la PPA afin d'accéder à son contenu. Dans votre répertoire personnel, utilisez `curl` pour récupérer le script d'installation de la version souhaitée.

```bash
cd ~
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
```

Vous pouvez inspecter le contenu de ce script avec `nano` (ou votre éditeur de texte préféré) :

```bash
nano nodesource_setup.sh
```

Exécutez le script sous `sudo` :

```bash
sudo bash nodesource_setup.sh
```

Le PPA sera ajouté à votre configuration et le cache local de votre package sera automatiquement mis à jour. Après avoir exécuté le script d'installation de Nodesource, vous pouvez installer le package Node.js :

```bash
sudo apt install nodejs
```

Pour vérifier quelle version de Node.js vous avez installée après ces premières étapes, tapez :

```bash
node -v
```

Le package `nodejs` contient le binaire `nodejs` ainsi que `npm`, vous n'avez donc pas besoin d'installer `npm` séparément.

`npm` utilise un fichier de configuration dans votre répertoire de base pour suivre les mises à jour. Il sera créé la première fois que vous utiliserez `npm`. Exécutez cette commande pour vérifier que `npm` est installé et pour créer le fichier de configuration :

```bash
npm -v
```

Pour que certains packages `npm` fonctionnent (par exemple, ceux qui nécessitent la compilation du code source), vous devrez installer le package `build-essential` :

```bash
sudo apt install build-essential
```

Vous disposez maintenant des outils nécessaires pour travailler avec les packages `npm` qui nécessitent de compiler du code source.

> _Ces instructions ont été librement adaptées du [tutoriel de DigitalOcean pour l'installation de Node.js sur Ubuntu 18.04](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04-fr)_

## Installer homebridge

Ce plugin nécessite la version **0.4.36** de homebridge. Les versions antérieures ne fonctionneront pas. Les versions ultérieures devraient fonctionner.

Pour installer Hombridge, veuillez consulter le [projet Hombridge sur GitHub](https://github.com/homebridge/homebridge).

Si vous souhaitez avoir une interface graphique pour Homebridge, suivez plutôt ce tutoriel (officiel) : [oznu/homebridge-config-ui-x](https://github.com/oznu/homebridge-config-ui-x)

## Problèmes de Bluetooth

Veuillez prendre note des problèmes suivants avec Noble, qui affectent les connexions bluetooth avec vos accessoires :

- [Noble #465](https://github.com/noble/noble/issues/465)
- [Noble #480](https://github.com/noble/noble/issues/480)
- [Noble #474](https://github.com/noble/noble/issues/474)

Il ne semble pas non plus que ce soit la faute de noble. L'utilisation d'un dongle Bluetooth USB avec une puce CSR8510A10 de Cambridge Silicon Radio a bien fonctionné pour moi. Malheureusement cela signifie que la puce Bluetooth Broadcom du récent Raspberry Pi 3/Zero W
ne fonctionne pas bien avec les appareils Parrot.

En revanche, après l'avoir testé, le module Bluetooth du Raspberry Pi 4 fonctionne correctement avec ce plugin.

## Installer les dépendances noble

Installer les dépendances noble pour Raspbian en exécutant les commandes suivantes :

```bash
sudo apt-get install bluetooth bluez libbluetooth-dev libudev-dev
```

## Installez ce plugin

Et enfin, installer homebridge-parrot-flower avec :

```bash
sudo npm install -g homebridge-parrot-flower --unsafe-perm
```

## Problèmes d'installation de Noble sur le dernier Raspbian :

Le paquet Noble utilise une dépendance abandonnée (bluetooth-hci-socket), c'est-à-dire qu'elle n'est plus mise à jour et que son installation échoue sur Raspberry. 

C'est pourquoi je propose la méthode suivante pour faire fonctionner le plugin sur Raspberry :

Déplacez-vous dans le répertoire du plugin (normalement : `/usr/lib/node_modules/homebridge-parrot-flower/`) :

```bash
cd /usr/lib/node_modules/homebridge-parrot-flower/
```

Installez la version de [bluetooth-hci-socket gérée par le collectif @abandonware](https://www.npmjs.com/package/@abandonware/bluetooth-hci-socket) : 

```bash
npm i @abandonware/bluetooth-hci-socket
```

Déplacez le dossier bluetooth-hci-socket au bon endroit : 

```bash
cd node_modules
cd @abandonware
mv bluetooth-hci-socket ../
```

Et voilà ! Le plugin devrait maintenant fonctionner sur votre Raspberry.

## Donner des privilèges bluetooth à Node.js

Si vous lancez homebridge en tant qu'utilisateur non root (vous devriez !), vous devez donner à Node des autorisations exécutables pour démarrer et arrêter le bluetooth advertising :

```bash
sudo apt-get install libcap2-bin
sudo setcap cap_net_raw+eip /opt/node/bin/node
```

Continuez en [ajoutant votre appareil Flower Power ou Parrot Pot](configure_fr.md).