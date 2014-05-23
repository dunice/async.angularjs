define([
    'angular',
    'Routes',
    'DependencyResolver',
    'ngDialog'
], function(angular, Routes, DependencyResolver) {
    'use strict';

    var app = angular.module('MyApp', [
        'ngRoute',
        'ngResource',
        'ngAnimate'
    ]);

    app.config([
        '$routeProvider',
        '$locationProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',
        '$httpProvider',
        function($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $httpProvider) {
            app.controller = $controllerProvider.register;
            app.directive  = $compileProvider.directive;
            app.filter     = $filterProvider.register;
            app.factory    = $provide.factory;
            app.service    = $provide.service;

            $locationProvider.html5Mode(true);

            if(Routes.routes) {
                angular.forEach(Routes.routes, function(route, path) {
                    if(
                        route.dependencies !== undefined
                        && route.dependencies.length
                    ) {
                        $routeProvider.when(path, {
                            templateUrl : route.templateUrl,
                            resolve : DependencyResolver(route.dependencies),
                            reloadOnSearch : ((route.reloadOnSearch === false) ? false : true)
                        });
                    } else {
                        $routeProvider.when(path, route);
                    }
                });
            }

            if(Routes.defaultRoutePaths) {
                $routeProvider.otherwise({
                    redirectTo : Routes.defaultRoutePaths
                });
            }
        }
    ]);

    app.run([
        '$q',
        '$rootScope',
        'GeoService',
        function($q, $rootScope, GeoService) {
            // RouteChange Listener
            $rootScope.$on('$routeChangeSuccess', function(event, previous, current) {
            });
        }
    ]);

    return app;
});
