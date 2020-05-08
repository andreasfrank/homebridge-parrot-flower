# Changelog

## Version 0.4

Première mise à jour depuis le fork.

* Cette mise à jour apporte l'apparition d'un accessoire "Système d'irrigation" permettant de visualiser l'état d'arrosage et le mode de programmation de l'arrosage pour un Parrot Pot (manuel ou automatique).

* L'accessoire responsable de la mise en route de l'arrosage du Parrot Pot qui était auparavant un interrupteur est maintenant une valve, il apparaît donc comme un arroseur/sprinkler dans HomeKit et prend en charge le temps d'attente entre l'appui dans Homekit et le début effectif de l'arrosage du pot avec l'affichage d'un message "Chargement" dans Homekit.

* Une erreur de frappe dans la gestion du seuil d'humidité a été corrigée. 

* La documentation pour l'installation sur Raspberry Pi à été mise-à-jour pour supporter la dernière version de Node.js et gérer les problèmes liés à la dépendance Noble.

## Version 0.3

* Support du Parrot Pot
  * Afficher le niveau du réservoir d'eau restant
  * Affichage du mode d'arrosage configuré
  * Afficher l'état d'arrosage
  * Déclencher l'arrosage manuel
  * Capteur de contact est déclenché en cas d'erreur d'arrosage
* Accélération du bluetooth
* Amélioration du fonctionnement avec plusieurs appareils de type Parrot Pot and Flower Power

## Version 0.2

* Ajoute le dernier statut mis à jour comme dans homebridge-hue
* Ajout du support de la disponibilité (uptime)
* Active la configuration des paramètres recommandés (par exemple à partir de l'application Parrot)
* Active les capteurs pour déclencher des règles si les paramètres recommandés sont trop bas

## Version 0.1

* Rafraîchir l'état de la batterie une fois par jour
* Rafraîchissement automatique des valeurs des capteurs (par intervalles de 10 minutes)
* Récupérer le type et la couleur du dispositif FlowerPower
