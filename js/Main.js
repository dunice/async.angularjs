require.config({
    appDir : '',
    baseUrl : './js/src',
    paths : {
        // AngularJS
        'angular'            : '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min',
        'angular.route'      : '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-route.min',
        'angular.resource'   : '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-resource.min',
        'angular.animate'    : '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-animate.min',
        'domready'           : '//cdnjs.cloudflare.com/ajax/libs/require-domReady/2.0.1/domReady.min',
        'async'              : '//cdnjs.cloudflare.com/ajax/libs/requirejs-async/0.1.1/async',
        'DependencyResolver' : '../lib/DependencyResolver',
    },

    shim : {
        'angular' : {
            exports : 'angular'
        },
        'angular.route' : {
            deps : ['angular']
        },
        'angular.resource' : {
            deps : ['angular']
        },
        'angular.animate' : {
            deps : ['angular']
        },
        'App' : {
            deps : ['angular', 'angular.route']
        }
    },
    deps: ['Bootstrap']
});
