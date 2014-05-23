define([
    'angular.route',
    'angular.resource',
    'angular.animate',
    'App'
], function(angular) {
    'use strict';

    require([
        'domready!'
    ], function(document) {
        angular.bootstrap(document, ['MyApp']);
    });
});
