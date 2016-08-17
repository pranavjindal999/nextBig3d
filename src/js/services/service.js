app.factory('service', ['$q', function($q) {
    var service = {};

    service.getBarChartData = function() {
        var def = $q.defer();
        responseData = {
            labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
            series: ['Series A', 'Series B'],
            data: [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90]
            ]
        };
        setTimeout(function() { def.resolve(responseData) }, 10);
        return def.promise;
    }

    service.getlineChartData = function() {
        var def = $q.defer();
        responseData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            series: ['Series A', 'Series B'],
            data: [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90]
            ]
        };
        setTimeout(function() { def.resolve(responseData) }, 10);
        return def.promise;
    }

     service.getGridData = function() {
        var def = $q.defer();
        responseData = {
            theads: ["Column1", "Column2", "Column3", "Column4", "Column5"],
            data: [
                [65, 59, 80, 81, 56],
                [28, 48, 40, 19, 86],
                [65, 59, 80, 81, 56],
                [28, 48, 40, 19, 86],
                [65, 59, 80, 81, 56],
                [28, 48, 40, 19, 86],
                [65, 59, 80, 81, 56],
                [28, 48, 40, 19, 86]
            ]
        };
        setTimeout(function() { def.resolve(responseData) }, 10);
        return def.promise;
    }

    return service;
}]);
