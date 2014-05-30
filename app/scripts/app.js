define([
    'angular',
    'ngAnimate',
    'ngResource',
    'ngCookies',
    'uiRouter',
    'ngSanitize',
    'ngTouch',
    'mgcrea.ngStrap'
    /*'controllers/index',
    'services/index',
    'directives/index',
    'filters/index'*/
], function (ng) {
    'use strict';
    return ng.module('YoFrame', [
        'ngAnimate',
        'ngResource',
        'ngCookies',
        'ui.router',
        'ngSanitize',
        'ngTouch',
        'mgcrea.ngStrap'
        /*'krFrame.controllers',
        'krFrame.services',
        'krFrame.directives',
        'krFrame.filters'*/
    ]);
});