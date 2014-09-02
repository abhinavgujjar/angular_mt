angular.module('hotelmgr').controller('listingController', 
	function($scope, config, hotelsProvider, votingService, $location) {

	$scope.descLimit = config.descLimit;

	$scope.upVote = function(hotel) {

		votingService.upVote(hotel);
	}

	$scope.downVote = function(hotel) {
		votingService.downVote(hotel);
	}

	$scope.hotels = hotelsProvider.getHotels();

	$scope.gotoCreate = function(){
		$location.url('/create');
	}
});
