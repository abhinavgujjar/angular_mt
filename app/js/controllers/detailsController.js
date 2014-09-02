angular.module('hotelmgr').controller('detailsController', 
	function($scope, hotelsProvider, $routeParams) {

	var hotelId = $routeParams.hotelId;

	//console.log(hotelId);

	$scope.hotel = hotelsProvider.getHotel(hotelId);

});
