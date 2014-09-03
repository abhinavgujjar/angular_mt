angular.module('hotelmgr').controller('navController', 
	function($scope) {

		$scope.$on('TITLE_CHANGED', function(event, args){
			$scope.title = args;
		})

});
