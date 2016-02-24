/**
 * Created by admin on 2/10/16.
 */
define([
    'text!./templates/layout.html',
    'text!./templates/start.html',
    './controllers/simple-controller',
    'text!./templates/scope.html',
    'text!./templates/assumptions.html',
    'text!./templates/size-software.html',
    'text!./templates/risk-assessment.html',
    'text!./templates/deliver.html',
    'angular',
    'uiRouter',
    'ngMaterial'
], function (template, startTemplate, simpleController, scopeTemplate, assumptionsTemplate, sizeTemplate, riskTemplate, deliverTemplate) {

    var app = angular.module('lnl.estimation',
        [
            'ui.router',
            'ngMaterial'
        ]
    );

    app.config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('estimation', {
                url: '/estimation',
                template: template,
                abstract: true
            })
            .state('estimation.start', {
                url: '/start',
                template: startTemplate,
                controller: simpleController
            })
            .state('estimation.scope', {
                url: '/scope',
                template: scopeTemplate,
                controller: simpleController
            })
            .state('estimation.assumptions', {
                url: '/assumptions',
                template: assumptionsTemplate,
                controller: simpleController
            })
            .state('estimation.size', {
                url: '/size',
                template: sizeTemplate,
                controller: simpleController
            })
            .state('estimation.risk', {
                url: '/risk',
                template: riskTemplate,
                controller: simpleController
            })
            .state('estimation.deliver', {
                url: '/deliver',
                template: deliverTemplate,
                controller: simpleController
            });

        $urlRouterProvider.otherwise('/');
    });

    return app;

});