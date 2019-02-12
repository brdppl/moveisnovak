(function() {
    'use strict'

    const app = angular.module('myApp')

    app.directive("parallax", function($document) {
        var parallaxLink = function(scope, el, attrs) {
            var p = el.find(".parallax")
            p.css("background-image", "url(" + scope.backgroundUrl + ")")
            $document.on("scroll", function() {
                var scrollTop = $document.scrollTop()
                var top = p.position().top
                var height = p.height()
                if (top < scrollTop && top + height > scrollTop) {
                    p.css({"background-position-y":  0.5 * (scrollTop - top) + "px"})
                    console.log("Background position:", p.css("background-position-y"))
                }
                console.log("Top:", top)
                console.log("Height", height)
                console.log("ScrollTop:", scrollTop)
            })
        }
        
        return {
            restrict: "AE",
            scope: {
            backgroundUrl: "="
        },
            transclude: true,
            template: "<div class='parallax'><div class='parallax-content'><ng-transclude></ng-transclude></div></div>",
            link: parallaxLink
        }
    })
})()