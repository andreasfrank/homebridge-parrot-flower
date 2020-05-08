# homebridge-parrot-flower

Attention : ce projet est un fork du projet homebridge-flower-sensor de @grover.

Intégre [Parrot Flower Power](https://www.parrot.com/us/connected-garden/parrot-pot#parrot-pot), le [Parrot Pot](https://www.parrot.com/us/connected-garden/parrot-pot#parrot-pot) ou le [Parrot H2O](http://blog.parrot.com/2015/01/05/ces-2015-flower-power-h2o/), qui n'a jamais été publié, dans HomeKit en utilisant [homebridge](https://github.com/nfarina/homebridge). Ce plugin ne dépend pas du [Parrot Cloud](https://community.smartthings.com/t/parrot-flower-power-discontinued/78929), désormais abandonné, en parlant directement aux capteurs grâce à une connexion Bluetooth basse énergie.

## Statut

[![HitCount](http://hits.dwyl.com/antoineraulin/homebridge-parrot-flower.svg)](http://hits.dwyl.com/antoineraulin/homebridge-parrot-flower)
[![Version du nœud](https://img.shields.io/node/v/homebridge-flower-sensor.svg?style=flat)](http://nodejs.org/download/)
[![Version NPM](https://badge.fury.io/js/homebridge-flower-sensor.svg?style=flat)](https://npmjs.org/package/homebridge-flower-sensor)

## Capacités

Ce plugin expose les capacités suivantes du capteur Flower Power à HomeKit :

* Température du sol
* Humidité du sol
* Niveau de lumière ambiante
* Identification du capteur fait clignoter la LED intégrée
* Surveiller l'état de la batterie du capteur Flower Power
* Fournit la date/heure de la dernière extraction des données du capteur
* Fournit la date/heure du dernier changement de piles
* Déclenchement d'un capteur de niveau de lumière moyen trop faible par rapport aux recommandations pour les plantes
* Déclenchement d'un capteur de niveau d'humidité du sol moyen trop faible par rapport aux recommandations pour les plantes pour vous rappeler d'arroser vos plantes

Ces capacités sont spécifiques au Parrot Pot :

* Démarrer l'arrosage
* Dans Elgato Eve, voir le type de programme (manuel ou automatique) pour l'arrosage. (Accessoire de type Système d'irrigation)

D'autres capacités sont prévues à l'avenir. Voir le [CHANGELOG](CHANGELOG_FR.md) pour les informations liées aux mises-à-jour.

## Utilisation de ce plugin

Pour utiliser ce plugin, je recommande un [Raspberry Pi Zero W](https://www.raspberrypi.org/products/raspberry-pi-zero-w/). Vous pouvez surveiller plusieurs appareils Flower Power dans un homebridge sur un Raspberry Pi Zero W.

* [Installer sur un Raspberry Pi](docs/raspberrypi_fr.md)
* [Installer sur un Mac](docs/macos_fr.md)
* [Ajouter les capteurs Flower Power au HomeKit](docs/configure_fr.md)

Veuillez prendre connaissance des [limitations et coexistence](docs/limitations_fr.md) avec les autres plugins utilisant le Bluetooth :

## Clients supportés

Cette plateforme et les commutateurs qu'elle crée ont été vérifiés pour fonctionner avec les applications suivantes sur iOS 11 (testé sous iOS 13.4.1) :

* Accueil
* Elgato Eve

Voir [HomeKit Apps](docs/apps.md) pour un tableau comparatif des fonctionnalités supportées.

## Crédits

Voir [CREDITS](CREDITS_FR.md) pour les remerciements aux personnes qui ont contribué directement ou indirectement à ce plugin.

## Autres

Si vous l'utilisez et l'appréciez, merci de laisser une note en mettant un étoile sur ce projet.

Si vous l'utilisez et que vous rencontrez un problème, envoyez un message à [GitHub](https://github.com/antoineraulin/homebridge-parrot-flower/issues) - je vais essayer de vous aider.

Si vous l'avez essayé, mais que vous n'aimez pas ce plugin, parlez-en moi aussi dans un ticket. J'essaierai de faire de mon mieux
pour les aborder pendant mon temps libre.

Si vous le faites, allez-y - j'accepterai les demandes d'amélioration.

## Licence

Licence MIT

Copyright (c) 2017 Michael Fröhlich

L'autorisation est accordée, sans frais, à toute personne qui obtient une copie
de ce logiciel et des fichiers de documentation associés (le "logiciel"), pour traiter
dans le logiciel sans restriction, y compris, sans limitation, les droits
d'utiliser, de copier, de modifier, de fusionner, de publier, de distribuer, d'accorder des sous-licences et/ou de vendre
des copies du logiciel, et de permettre aux personnes à qui le logiciel est
fourni pour ce faire, sous réserve des conditions suivantes :

L'avis de droit d'auteur ci-dessus et le présent avis d'autorisation doivent être inclus dans tous les
des copies ou des parties substantielles du logiciel.

LE LOGICIEL EST FOURNI "TEL QUEL", SANS GARANTIE D'AUCUNE SORTE, EXPRESSE OU
IMPLICITES, Y COMPRIS, MAIS SANS S'Y LIMITER, LES GARANTIES DE QUALITÉ MARCHANDE,
L'APTITUDE À UN USAGE PARTICULIER ET LA NON-CONTREFAÇON. EN AUCUN CAS, LE
LES AUTEURS OU LES DÉTENTEURS DE DROITS D'AUTEUR SOIENT RESPONSABLES DE TOUTE RÉCLAMATION, DOMMAGE OU AUTRE
LA RESPONSABILITÉ, QU'ELLE SOIT CONTRACTUELLE, DÉLICTUELLE OU AUTRE, DÉCOULANT DE,
EN DEHORS OU EN RELATION AVEC LE LOGICIEL OU L'UTILISATION OU D'AUTRES TRANSACTIONS DANS LE
LOGICIELS.

Les mises à jour apportées au projet depuis le fork sont sous le copyright d'Antoine Raulin selon la licence du MIT.

Mise à jour copyright (c) 2020 Antoine Raulin