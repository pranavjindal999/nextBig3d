var app = angular.module('app', ['chart.js', 'ui.router']);

app.config(['$stateProvider', '$urlMatcherFactoryProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider, $locationProvider) {
    $urlMatcherFactoryProvider.caseInsensitive(true);
    $urlRouterProvider.otherwise("/");   
    $stateProvider
        .state('home', {
            url: "/",
            views: {
                "header": {
                    templateUrl : "src/js/modules/header/header.html",
                    controller: 'headerController'
                },
                "menu": {
                    templateUrl: "src/js/modules/menu/menu.html",
                    controller: 'menuController'
                }
            }
        })
        .state('home.barChart', {
            url: "bar",
            views: {
                'main@': {
                    templateUrl: 'src/js/modules/barChart/barChart.html',
                    controller: 'barChartController'
                }
            }
        })
        .state('home.lineChart', {
            url: "line",
            views: {
                'main@': {
                    templateUrl: 'src/js/modules/lineChart/lineChart.html',
                    controller: 'lineChartController'
                }
            }
        })
        .state('home.grid', {
            url: "grid",
            views: {
                'main@': {
                    templateUrl: 'src/js/modules/grid/grid.html',
                    controller: 'gridController'
                }
            }
        });

    $locationProvider.html5Mode(true);   
}]);