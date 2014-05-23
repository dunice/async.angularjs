define([
    'jQuery'
], function($) {
    'use scrict';

    return {
        defaultRoutePath: '/',
        routes: {
            '/' : {
                templateUrl: 'templates/home.html',
                dependencies: [
                    'Home/Controller/HomeController'
                ]
            },
        }
    };
});
