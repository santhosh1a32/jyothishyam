// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.lists', {
        url: '/lists',
        views: {
            'menuContent': {
                templateUrl: 'templates/lists.html',
                controller: 'ListsCtrl'
            }
        }
    })

    .state('app.ink', {
        url: '/ink',
        views: {
            'menuContent': {
                templateUrl: 'templates/ink.html',
                controller: 'InkCtrl'
            }
        }
    })

    .state('app.motion', {
        url: '/motion',
        views: {
            'menuContent': {
                templateUrl: 'templates/motion.html',
                controller: 'MotionCtrl'
            }
        }
    })

    .state('app.components', {
        url: '/components',
        views: {
            'menuContent': {
                templateUrl: 'templates/components.html',
                controller: 'ComponentsCtrl'
            }
        }
    })

    .state('app.extensions', {
        url: '/extensions',
        views: {
            'menuContent': {
                templateUrl: 'templates/extensions.html',
                controller: 'ExtensionsCtrl'
            }
        }
    })

    .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html',
                controller:'HomeCtrl'
            }
        }
    })

    .state('app.horoscope', {
        url: '/horoscope',
        views: {
            'menuContent': {
                templateUrl: 'templates/horoscope.html',
                controller:'HoroscopeCtrl'
            }
        }
    })

     .state('app.splash', {
        url: '/splash',
        views: {
            'menuContent': {
                templateUrl: 'templates/splash.html',
                controller:'splashCtrl'
            }
        }
    })

     .state('app.create-user', {
        url: '/create-user',
        views: {
            'menuContent': {
                templateUrl: 'templates/create-user.html',
                controller:'create-userCtrl'
            }
        }
    })

     .state('app.view-list', {
        url: '/view-list',
        views: {
            'menuContent': {
                templateUrl: 'templates/view-list.html',
                controller:'view-listCtrl'
            }
        }
    })

     .state('app.manage', {
        url: '/manage',
        views: {
            'menuContent': {
                templateUrl: 'templates/manage.html',
                controller:'manageCtrl'
            }
        }
    })

     .state('app.settings', {
        url: '/settings',
        views: {
            'menuContent': {
                templateUrl: 'templates/settings.html',
                controller:'SettingsCtrl'
            }
        }
    })
     
     .state('app.customer', {
        url: '/customer',
        views: {
            'menuContent': {
                templateUrl: 'templates/customer.html',
                controller:'customerCtrl'
            }
        }
    })
     .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller:'loginCtrl'
            }
        }
    })
     .state('app.register', {
        url: '/register',
        views: {
            'menuContent': {
                templateUrl: 'templates/register.html',
                controller:'registerCtrl'
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});
