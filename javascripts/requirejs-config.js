/**
 * Created by admin on 2/10/16.
 */
requirejs.config({
    paths: {
        jQuery: '../bower_components/jquery/dist/jquery.min',
        angular: '../bower_components/angular/angular.min',
        uiRouter: '../bower_components/angular-ui-router/release/angular-ui-router.min',
        ngAnimate: '../bower_components/angular-animate/angular-animate.min',
        ngAria: '../bower_components/angular-aria/angular-aria.min',
        ngMaterial: '../bower_components/angular-material/angular-material.min',
        lodash: '../bower_components/lodash/lodash.min',
        text: '../bower_components/text/text'
    },
    shim: {
        angular: ['jQuery'],
        uiRouter: ['angular'],
        ngAnimate: ['angular'],
        ngAria: ['angular'],
        ngMaterial: ['ngAnimate', 'ngAria']
    },
    packages: [
        {
            name: 'core',
            location: '../app/core',
            main: 'core'
        },
        {
            name: 'estimation',
            location: '../app/estimation',
            main: 'estimation'
        }
    ]
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['bootstrap']);