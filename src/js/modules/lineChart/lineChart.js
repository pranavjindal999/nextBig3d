(function(angular) {
    app.controller('lineChartController', ['$scope','service' ,function($scope,service) {
        service.getlineChartData().then(function(response) {
            $scope.labels = response.labels;
            $scope.series = response.series;
            $scope.data = response.data;
        });
    }]);
})(window.angular);
