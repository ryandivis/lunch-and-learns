/**
 * Created by admin on 2/10/16.
 */
define([
    'text!./templates/layout.html',
    './controllers/base-controller',
    'angular',
    'uiRouter',
    'ngMaterial'
], function (template, controller) {

    var app = angular.module('lnl.core',
        [
            'ui.router',
            'ngMaterial'
        ]
    );

    app.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('base', {
                url: '/',
                template: template,
                controller: controller
            });

        $urlRouterProvider.otherwise('/');
    });

    return app;

});