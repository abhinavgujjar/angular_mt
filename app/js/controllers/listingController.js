angular.module('hotelmgr').controller('listingController', 
	function($scope, config, hotelsProvider, votingService, 
		$location, $rootScope, favProvider) {

	$scope.descLimit = config.descLimit;

	$scope.upVote = function(hotel) {

		votingService.upVote(hotel);
	}

	$scope.addFav = function(hotel){
		favProvider.addFav(hotel);
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

	 	var title = '(' + hotels.length + ') hotels';

	 	$scope.$emit('TITLE_CHANGED', title);
	 });

	$scope.gotoCreate = function(){
		$location.url('/create');
	}
});
