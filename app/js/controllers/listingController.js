angular.module('hotelmgr').controller('listingController', 
	function($scope, config, hotelsProvider, votingService, $location) {

	$scope.descLimit = config.descLimit;

	$scope.upVote = function(hotel) {

		votingService.upVote(hotel);
	}

	$scope.showDetails = function(hotel){
		hotelsProvider.setSelectedHotel ( hotel);

		$location.url('/details');
	}

	$scope.downVote = function(hotel) {
		votingService.downVote(hotel);
	}

	 hotelsProvider.getHotels().then(function(hotels){
	 	$scope.hotels = hotels;
	 });

	$scope.gotoCreate = function(){
		$location.url('/create');
	}
});
