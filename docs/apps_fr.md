# HomeKit Apps

Ce plugin utilise autant que possible les fonctionnalités standard de HomeKit, mais l'expérience sera différente
entre les différentes applications HomeKit. Je vérifie principalement le plugin par rapport à deux applications :

* Apple Home
* Elgato Eve

D'autres applications fonctionneront probablement, mais là encore, elles offrent une expérience différente.

Le tableau suivant résume le comportement à attendre entre les différentes applications :

| Fonctionnalité | Apple Home | Elgato Eve |
|---------|------------|------------|
| Température du sol | :white_check_mark: | :white_check_mark: |
| Humidité du sol | :white_check_mark: | :white_check_mark: |
| Niveau de lumière ambiante | :white_check_mark: | :white_check_mark: |
| Identifier le capteur | :x: | :white_check_mark: |
| Surveillance du niveau de la batterie | :white_check_mark: | :white_check_mark: |
| Dernière heure/date de mise à jour du capteur visible | :x: | :white_check_mark: |
| Dernier changement de pile heure/date visible | :x: | :white_check_mark: |
| Seuil de luminosité configuré visible | :x: | :white_check_mark: |
| Niveau de lumière moyen visible sur 24h | :x: | :white_check_mark: |
| Capteur de contact de faible luminosité | :white_check_mark: | :white_check_mark: |
| Seuil d'humidité configuré visible | :x: | :white_check_mark: |
| Humidité moyenne visible sur 24h | :x: | :white_check_mark: |
| Capteur de contact de faible taux d'humidité | :white_check_mark: | :white_check_mark: |

:white_check_mark: indique que la fonction est disponible et prise en charge. :x : indique que la fonction n'est pas disponible.