# Installation sur macOS

Ce plugin a été développé sur un Mac et peut également fonctionner avec Homebridge sur un Mac. Mais je n'ai pas essayé de le faire fonctionner sur un Mac pendant une longue période.

## Installer node.js

Installez node.js 9.3.0 depuis [nodejs.org](https://nodejs.org/en/download/current/).

## Installer homebridge

Ce plugin nécessite la version **0.4.36** de homebridge. Les versions antérieures ne fonctionneront pas. Les versions ultérieures devraient fonctionner.

Dans le terminal :

```bash
npm install -g homebridge --unsafe-perm
```

## Installer des dépendances de Noble

Veuillez suivre les instructions d'installation des conditions préalables de [Noble](https://www.npmjs.com/package/noble), mais il n'est pas nécessaire d'installer noble lui-même.

## Installer ce plugin

Dans le terminal :

```bash
npm install -g homebridge-flower-sensor --unsafe-perm
```

### Sur macOS High Sierra

L'étape de post-installation de "homebridge-parrot-flower" installera automatiquement une version patchée de
Noble pour [macOS High Sierra](https://github.com/grover/noble/tree/macos_highsierra). Cette version
n'est pas nécessaire à ma connaissance sur les versions antérieures de macOS et d'autres plates-formes.

Malheureusement, des modifications ont été apportées au Stack Bluetooth sur High-Sierra, ce qui fait que c'estnécessaire.

## Créer la configuration du fichier config de Homebridge

Créez un fichier de texte brut dans `~/.homebridge/config.json\  - créez le dossier si nécessaire :

```json
{
  "pont" : {
    "nom" : "pont de maison",
    "nom d'utilisateur" : "CC:22:3D:E3:CE:30",
    "port" : 51826,
    "pin" : "031-45-154"
  },
  "plates-formes" : [
    {
      "plate-forme" : "FlowerSensors",
      "capteurs" : [
      ]
    }
  ]
}
```

## Lancer Homebridge

Ce qui précède suppose que vous utiliserez homebridge sur votre compte d'utilisateur actuel. Vous pouvez lancer homebridge maintenant, en exécutant ce qui suit dans Terminal :

```bash
DEBUG=homebridge,flower:* homebridge
```

Vous devriez maintenant voir les journaux d'exécution de homebridge, qui comprend un scan de votre entourage Bluetooth LE. Si le démarrage a réussi, vous pouvez continuer en [ajoutant votre périphérique Flower Power](configure_fr.md).
