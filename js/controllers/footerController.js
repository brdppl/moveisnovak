(function() {
    'use strict'

    const app = angular.module('myApp')

    app.controller('footerCtrl', function ($scope) {
        const vm = this

        // Voltar ao topo
        vm.goTop = function() {
            $('html, body').animate({scrollTop: 0}, 1250, 'easeInOutExpo')
        }
    })
})()