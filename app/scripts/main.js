/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({
    paths: {
        'angular': '../bower_components/angular/angular',
        'domReady': '../bower_components/requirejs-domready/domReady',
        jquery: '../bower_components/jquery/dist/jquery.min',
        bootstrap:'../bower_components/bootstrap/dist/js/bootstrap.min',
        ngResource: '../bower_components/angular-resource/angular-resource',
        ngCookies: '../bower_components/angular-cookies/angular-cookies',
        ngAnimate: '../bower_components/angular-animate/angular-animate',
        ngTouch: '../bower_components/angular-touch/angular-touch.min',
        uiRouter: '../bower_components/angular-ui-router/release/angular-ui-router',
        'angular-i18n': '../bower_components/angular-i18n/angular-locale_zh-cn',
        'mgcrea.ngStrap': '../bower_components/angular-strap/dist/angular-strap.min',
        'ngSanitize': '../bower_components/angular-sanitize/angular-sanitize'
    },
    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        angular: {
            deps: [ 'jquery'],
            exports: 'angular'
        },
        bootstrap: {
            deps: ['jquery']
        },
        'uiRouter':{
            deps: ['angular']
        },
        ngCookies: {
            deps :['angular']
        },
        ngSanitize: {
          deps: ['angular']
        },
        ngResource:{
            deps:['angular']
        },
        ngAnimate:{
            deps:['angular']
        },
        ngTouch:{
            deps:['angular']
        },
        'mgcrea.ngStrap': {
            deps: ['angular','bootstrap']
        }
    },
    deps: [
        './boots'
    ]
});
