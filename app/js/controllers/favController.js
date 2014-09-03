angular.module('hotelmgr').controller('favController', 
	function($scope, favProvider) {

		$scope.favorites = favProvider.getFavorites();

		$scope.removeFav = function(fav){
			favProvider.removeFav(fav);
		}

});
