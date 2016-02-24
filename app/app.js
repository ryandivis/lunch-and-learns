/**
 * Created by admin on 2/10/16.
 */
define([
    'core',
    'estimation',
    'uiRouter',
    'ngMaterial',
    'text'
], function (core) {

    var app = angular.module('lnl',
        [
            'lnl.core',
            'lnl.estimation',
            'ui.router',
            'ngMaterial'
        ]
    );

    return app;

});