// public/js/appRoutes.js

angular.module('appRoutes', [])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // users page
        .when('/users', {
            templateUrl: 'views/user.html',
            controller: 'UserController'
        })

        // user's profile page
        .when('/users/profile', {
            templateUrl: 'views/user_profile.html',
            controller: 'UserProfileController'
        })

        // pictures page
        .when('/pictures', {
            templateUrl: '/views/picture.html',
            controller: 'PictureController'
        })

        // mail-box page
        .when('/inbox', {
            templateUrl: '/views/inbox.html',
            controller: 'InboxController'
        })

        // login page
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })

        // signup page
        .when('/sign-up', {
            templateUrl: 'views/sign_up.html',
            controller: 'SignUpController'
        })

        //settings page
        .when('/settings', {
            templateUrl: '/views/settings.html',
            controller: 'SettingsController'
        });

    $locationProvider.html5Mode(true);

}]);