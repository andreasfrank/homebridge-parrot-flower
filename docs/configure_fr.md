# Ajoutez votre appareil Flower Power ou Parrot Pot

Une fois que vous avez installé le plugin, vous pouvez ajouter vos capteurs de la centrale Flower Power/Pot à HomeKit.

## Configuration des capteurs

Chaque capteur est configuré selon la structure suivante :

```json
{
  "nom":"nom de la plante tel que vu dans HomeKit",
  "id":"Nom du dispositif FlowerPower"
}
```

Les capteurs sont localisés en utilisant leur nom local annoncé. Le nom local peut soit être vu
dans l'application Parrot Flower Power :

![Aperçu](ParrotFlowerPowerApp.png "Identifier le dispositif Flower Power")

Ou vous pouvez utiliser une application (dans ce cas [LightBlue Explorer](https://itunes.apple.com/us/app/lightblue-explorer/id557428110?mt=8) par [PunchThrough](https://punchthrough.com)) sur votre appareil iOS pour trouver le nom de l'appareil Flower Power.

![Aperçu](LightBlueExplorer.png "Identifier le dispositif Flower Power")

## Exemple de configuration à l'aide des captures d'écran ci-dessus

```json
{
  "nom":"Ma plante",
  "id":"flower power 7CF3"
}
```

Une fois que vous avez ajouté votre capteur à votre `config.json`, il devrait ressembler à ce qui suit :

```json
{
  "bridge":{
    "nom":"Homebridge",
    "username":"xx:xx:xx:xx:xx:xx:xx",
    "port":52118,
    "pin":"135-79-864"
  },
  "platforms":[
    {
      "platform":"FlowerSensors",
      "sensors":[
        {
          "name":"nom de la plante/capteur",
          "id":"flower power 7CF3"
        }
      ]
    }
  ]
}
```

## Démarrer homebridge

Vous êtes maintenant prêt à lancer homebridge pour surveiller vos capteurs Flower Power, créer
des règles pour les surveiller et les intégrer dans votre foyer.

## Capteurs multiples

Plusieurs capteurs sont pris en charge, il suffit d'ajouter chacun d'entre eux à la section des capteurs :

```json
{
  "bridge": {
    "name": "Homebridge",
    "username": "xx:xx:xx:xx:xx:xx",
    "port": 52118,
    "pin": "135-79-864"
  },
  "platforms": [
    {
      "platform": "FlowerSensors",
      "sensors": [
        {
          "name": "Plant/Sensor name",
          "id": "Flower power 7CF3"
        },
        {
          "name": "Plant/Sensor name 2",
          "id": "Parrot pot 3AD8"
        }
      ]
    }
  ]
}
```

## Configurer les recommandations

Ce plugin est capable de créer des capteurs qui se déclenchent si les niveaux de lumière ou d'humidité
sont inférieures aux valeurs recommandées pour votre plante. Pour permettre des recommandations, étendez le
configuration de l'installation avec les valeurs suivantes :

```json
{
  "name": "Plant/Sensor name",
  "id": "Flower power 7CF3",
  "recommendations": true,
  "thresholdLightLevel": 1200,
  "thresholdHumidity": 26
}
```

Les trois valeurs ajoutées sont décrites ci-dessous :

|Valeur|Type|Description|
|-------|------|-------------|
|recommandations|booléen|Détermine si les recommandations et les capteurs correspondants sont activés. Si c'est le cas, le plugin surveille les données des capteurs et déclenche les capteurs de contact si les seuils ne sont pas atteints.|
|thresholdLightLevel|float|Le seuil de niveau de lumière en lux (lumens par mètre carré.) Le plugin fait la moyenne de tous les niveaux de lumière non nuls sur une période de 24 heures pour déterminer si le seuil a été atteint.|
|seuilHumidité|flotteur|Le seuil d'humidité en pourcentage. La moyenne des taux d'humidité est calculée sur une période de 24 heures avant la comparaison avec le seuil.|
