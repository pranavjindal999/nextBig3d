(function(angular) {
    app.controller('gridController', ['$scope', 'service', function($scope, service) {

        service.getGridData().then(function(response) {
            $scope.theads = response.theads;
            $scope.tableData = response.data;
        });


        $scope.showDetails = function(details){
        	$scope.detailsView = true;
        	$scope.row = details;
        }

        $scope.closeDetails = function(){
        	$scope.detailsView = false;
        }

    }]);
})(window.angular);
