angular.module('hotelmgr').controller('detailsController', 
	function($scope, hotelsProvider, $routeParams) {

	var hotelId = $routeParams.hotelId;

	//console.log(hotelId);

	hotelsProvider.getHotel(hotelId).then(function(hotel){
		$scope.hotel = hotel;
	});

});
