define(['app'], function(app) {
    return app.run(['$rootScope', function ($rootScope) {

        /*$rootScope.$state = $state;
         $rootScope.$stateParams = $stateParams;*/
        /**
         * $rootScope.doingResolve is a flag useful to display a spinner on changing states.
         * Some states may require remote data so it will take awhile to load.
         */
        var resolveDone = function () {
            $rootScope.doingResolve = false;
        };

        $rootScope.doingResolve = false;

        $rootScope.$on('$stateChangeStart', function () {
            $rootScope.doingResolve = true;
        });

        $rootScope.$on('$stateChangeSuccess', resolveDone);
        $rootScope.$on('$stateChangeError', resolveDone);
        $rootScope.$on('$statePermissionError', resolveDone);

    }])
        .constant('version', 'v0.1.0')
});