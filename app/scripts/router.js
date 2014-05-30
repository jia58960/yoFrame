define(['./app'], function(app) {
    'use strict';
    return app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider' , '$httpProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
            $urlRouterProvider
                .otherwise('/');
            // Public routes
            $stateProvider
                .state('public', {
                    abstract: true,
                    templateUrl: "views/router.html"
                })
                .state('public.404', {
                    url: '/404/',
                    views:{
                        "body": {
                            templateUrl: 'views/404.html'
                        },
                        "footer":{
                            templateUrl: 'views/footer.html'
                        }
                    }
                }).state('public.denied', {
                    url: '/denied/',
                    views:{
                        "body": {
                            templateUrl: 'views/denied.html'
                        },
                        "footer":{
                            templateUrl: 'views/footer.html'
                        }
                    }
                });
            //login and register
            $stateProvider
                .state('anon', {
                    abstract: true,
                    templateUrl: "views/public.html"
                })
                .state('anon.login', {
                    url: '/login/',
                    views:{
                        "body": {
                            templateUrl: 'views/login.html'
                            //controller: 'loginCtrl'
                        }
                    }
                });

            // Main routes
            $stateProvider
                .state('site', {
                    abstract: true,
                    templateUrl: "views/router.html"
                    //controller: 'headerCtrl'
                })
                .state('site.index', {
                    url: '/',
                    views: {
                        "header": {
                            templateUrl: 'views/partials/header.html'
                        },
                        "nav":{
                            templateUrl: 'views/partials/nav.html'
                            //controller: 'bodyCtrl'
                        },
                        "body": {
                            templateUrl: 'views/dashboard.html'
                            //controller: 'bodyCtrl'
                        }
                    }
                });
            $urlRouterProvider.otherwise('404/');

            // FIX for trailing slashes. Gracefully "borrowed" from https://github.com/angular-ui/ui-router/issues/50
            $urlRouterProvider.rule(function($injector, $location) {
                if($location.protocol() === 'file')
                    return;

                var path = $location.path()
                // Note: misnomer. This returns a query object, not a search string
                    , search = $location.search()
                    , params
                    ;

                // check to see if the path already ends in '/'
                if (path[path.length - 1] === '/') {
                    return;
                }

                // If there was no search string / query params, return with a `/`
                if (Object.keys(search).length === 0) {
                    return path + '/';
                }

                // Otherwise build the search string and return a `/?` prefix
                params = [];
                angular.forEach(search, function(v, k){
                    params.push(k + '=' + v);
                });
                return path + '/?' + params.join('&');
            });

            //$locationProvider.html5Mode(true);

            $httpProvider.interceptors.push(function($q, $location) {
                return {
                    'responseError': function(response) {
                        if(response.status === 401) {
                            $location.path('/login');
                        } else if( response.status === 403){
                            $location.path('/');

                        }
                        return $q.reject(response);
                    }
                };
            });

        }]).run(['$rootScope','$state', function($rootScope, $state){

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

            /*$rootScope.toState = toState;
             $rootScope.toStateParams = toParams;*/
            /*if (!authService.isInAnyRole(toState.data.roles)) {

             toaster.pop('error','你丫没权限进来！');

             event.preventDefault();

             if(fromState.url === '^') {

             if(Auth.isLoggedIn()) {
             console.log('jinrulalal');
             $state.go('user.home');
             } else {
             $rootScope.error = null;
             $state.go('anon.login');
             }
             }
             }*/

        });
    }])
});