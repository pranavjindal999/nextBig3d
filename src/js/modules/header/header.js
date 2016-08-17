(function(angular) {
    app.controller('headerController', ['$rootScope', function($rootScope) {
    		$rootScope.toggleSidenav = function(){
    			if(!$rootScope.sideBar){
    				$rootScope.ham = 'side-bar-ham';
    				$rootScope.sideBar = 'side-bar-display';
    			}
    			else{
    				$rootScope.ham = null;
    				$rootScope.sideBar = null;
    			}
    		}            
        }
    ]);
})(window.angular);
