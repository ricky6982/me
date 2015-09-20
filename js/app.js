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
                templateUrl: 'template/_frameworks.html'
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