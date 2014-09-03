angular.module('hotelmgr').controller('newController', 
	function($scope, hotelsProvider, $location, defaultHotel) {

	$scope.hotel = angular.copy(defaultHotel);

	$scope.reset = function(){
		$scope.hotel = angular.copy(defaultHotel);		
	}

	$scope.addHotel = function(hotel) {


		hotelsProvider.addHotel(hotel);

		$location.url('/listing');
	}



});
