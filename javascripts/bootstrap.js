/**
 * Created by admin on 2/10/16.
 */
define([
    '../app/app',
    'angular'
],function(app){

    $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function () {
        try {
            angular.bootstrap(document, ['lnl']);
        } catch (e) {
            console.error(e.stack || e.message || e);
        }
    });

});