var carApp = angular.module('carApp', []);
// les services sont appelé avec $
carApp.controller('carCtrl', function ($http, $scope) {
        // On récupếre le fichier voiture.json
        $http.get('voiture.json').then(function (reponse) {
                    $scope.marques = reponse.data;
                });
});
