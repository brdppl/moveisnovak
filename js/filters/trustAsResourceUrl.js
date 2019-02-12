(function() {
    'use strict'

    const app = angular.module('myApp')

    app.filter('trustAsResourceUrl', function($sce) {
        return function(val) {
            return $sce.trustAsResourceUrl(val)
        }
    })
})()