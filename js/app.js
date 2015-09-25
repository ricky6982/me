var app = angular.module('app', ['ui.router']);

app.config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'template/home.html',
            })
            .state('languages', {
                url: '/languages',
                templateUrl: 'template/languages.html'
            })
            .state('frameworks', {
                url: '/frameworks',
                templateUrl: 'template/frameworks.html'
            })
            .state('library', {
                url: '/library',
                templateUrl: 'template/library.html'
            })
            .state('tools', {
                url: '/tools',
                templateUrl: 'template/tools.html'
            })
            .state('enviroment', {
                url: '/enviroment',
                templateUrl: 'template/enviroment.html'
            })
            .state('projects', {
                url: '/projects',
                templateUrl: 'template/projects.html'
            })
        ;
    }
]);

app.controller('mainCtrl',[
    '$scope', '$state', '$timeout',
    function($scope, $state, $timeout){
        $scope.irA = function(destino){
            // $('#vista').toggleClass('animated fadeOutUp');
            // $timeout(function(){
            //     $state.go(destino);
            // }, 1000);

        };
    }
]);