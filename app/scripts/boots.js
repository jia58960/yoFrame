define([
    'require',
    'angular',
    'app',
    'initConf',
    'router'
], function (require, ng) {
    'use strict';
    require(['domReady!'], function (document) {
        try {
            // Wrap this call to try/catch
            ng.bootstrap(document, ['YoFrame']);
        }
        catch (e) {
            console.error(e.stack || e.message || e);
        }

    });
});