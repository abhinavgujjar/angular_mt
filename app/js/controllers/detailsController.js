angular.module('hotelmgr').controller('detailsController', 
	function($scope, hotelsProvider) {

	$scope.hotel = hotelsProvider.getSelectedHotel();

});
