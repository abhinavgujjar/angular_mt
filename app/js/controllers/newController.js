angular.module('hotelmgr').controller('newController', 
	function($scope, hotelsProvider, $location) {

	$scope.addHotel = function(hotel) {

		hotelsProvider.addHotel(hotel);

		$location.url('/listing');
	}


});
