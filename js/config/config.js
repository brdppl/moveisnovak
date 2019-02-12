const app = angular.module('myApp')

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("inicio", {
            url: "/",
            templateUrl: "views/home.html",
            controller: "homeCtrl",
            controllerAs: "vm"
        });

    $locationProvider.html5Mode(true);
})