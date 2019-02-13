(function() {
    'use strict'

    const app = angular.module('myApp')

    app.controller('headerCtrl', function($scope, $http) {
        const vm = this
        const mobileScreen = $(window).width() < 768;

        vm.status = {
            isCollapsed: true
        }

        // Navbar fixed
        $(document).on("scroll",function(){
            if($(document).scrollTop()>120){
                $('.header').addClass('solid')
            } else {
                $('.header').removeClass('solid')
            }
        })

        // Ir para seções do site
        vm.goToSection = function(id) {
            $('html, body').animate({scrollTop: $(id).offset().top - 60 }, 1250, 'easeInOutExpo');
            vm.status = {
                isCollapsed: true
            }
        }
    })
})()