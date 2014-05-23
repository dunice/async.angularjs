define([
    'App'
], function(app) {
    app.controller('HomeController', [
        '$scope',
        '$location',
        '$routeParams'
        function($scope, $location, $routeParams) {
            console.log('Ok');
        }
    ]);
});
