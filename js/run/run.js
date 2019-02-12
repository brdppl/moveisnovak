(function() {
    'use strict'

    const app = angular.module('myApp')

    app.run(function($rootScope, $transitions, $state, $http) {
        $transitions.onEnter({}, function () { //mantém sempre no topo (obrigatório no uso do ui-router)
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            $('body').addClass('animated fadeIn')
        })
        $transitions.onExit({}, function () {
            $('body').removeClass('animated fadeIn')
        })
    
        new WOW().init()
    
        $rootScope.$state = $state

        $http.get('json/contatos.json')
        .then(function(response) {
            $rootScope.contatos = response.data
        })
    })
})()