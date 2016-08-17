(function(angular) {
    app.controller('barChartController', ['$scope', 'service', function($scope, service) {

      service.getBarChartData().then(function(response){
        $scope.labels = response.labels;
        $scope.series = response.series;
        $scope.data = response.data;
      });
        
    }]);
})(window.angular);
