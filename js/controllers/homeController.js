(function() {
    'use strict'

    const app = angular.module('myApp')

    app.controller("homeCtrl", function($scope, $http, toaster, $timeout) {
        const vm = this
        const base = 'json/'
        const mobileScreen = $(window).width() < 768;

        vm.collapsed = {
            map: true,
            details: true
        }

        // Banners
        vm.loadBanner = false
        $http.get(base+'banners.json', {'acao': 'listar'})
        .then(function(response) {
            vm.banners = response.data.lista
            vm.loadBanner = true
        })

        // Conteúdos
        vm.loadSobreImgs = false
        $http.get(base+'conteudo.json', {'acao': 'listar'})
        .then(function(response) {
            vm.conteudo = response.data.lista
            vm.loadSobreImgs = true
        })

        // Categorias
        $http.get(base+'categorias.json', {'acao': 'listar'})
        .then(function(response) {
            vm.categorias = response.data.lista
        })

        // Trabalhos
        $http.get(base+'trabalhos.json', {'acao': 'listar'})
        .then(function(response) {
            vm.trabalhos = response.data.lista
        })

        // Marcas
        $http.get(base+'marcas.json', {'acao': 'listar'})
        .then(function(response) {
            vm.marcas = response.data.lista
        })

        // Ir para orçamento
        vm.goToBudget = function() {
            $('html, body').animate({scrollTop: $('.contato').offset().top - 60 }, 1250, 'easeInOutExpo')
        }

        // Enviar email
        const head = {
            "assunto": "Contato via site" ,
            "destino": "bernardo@kiweb.com.br",
            "site": "Novak Imóveis"
        }
        
        vm.contato = {}
        vm.enviar = function(d) {
            var objData = {
                "acao": "formMail",
                "dados": d,
                "head": head
            }
            $http.get(base+'status.json', objData)
            .then(function(response) {
                if(response.data.status) {
                    toaster.success("Sucesso!", response.data.msg)
                    vm.contato = {}
                } else {
                    toaster.error({title: "Erro", body: response.data.msg})
                }
            })
        }

        // Filtrar categorias
        vm.idCat = ''
        vm.filtrarCategoria = function(id) {
            vm.idCat = id
        }

        // Pegar detalhes
        vm.loadDetalhesImgs = false
        vm.getDetails = function(val) {
            if(!vm.collapsed.details) {
                vm.collapsed.details = true
                if(mobileScreen) {
                    $('html, body').animate({scrollTop: $('.nosso-trabalho').offset().top + 125 }, 800, 'easeInOutExpo')
                } else {
                    $('html, body').animate({scrollTop: $('.nosso-trabalho').offset().top + 100 }, 800, 'easeInOutExpo')
                }
                $timeout(function() {
                    vm.collapsed.details = false
                }, 1000)
            } else {
                vm.collapsed.details = false
                if(mobileScreen) {
                    $('html, body').animate({scrollTop: $('.nosso-trabalho').offset().top + 125 }, 1250, 'easeInOutExpo')
                } else {
                    $('html, body').animate({scrollTop: $('.nosso-trabalho').offset().top + 100 }, 1250, 'easeInOutExpo')
                }
            }
            vm.detalhes = val
            vm.loadDetalhesImgs = false
            $timeout(function() {
                vm.loadDetalhesImgs = true
            }, 300)
        }

        // Slick config
        vm.slickConfig = [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true
                }
            }
        ]
    })
})()