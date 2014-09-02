angular.module('hotelmgr').controller('listingController', function($scope, config, hotelsProvider, votingService) {

	$scope.descLimit = config.descLimit;

	$scope.upVote = function(hotel) {

		votingService.upVote(hotel);
	}

	$scope.downVote = function(hotel) {
		votingService.downVote(hotel);
	}

	$scope.hotels = hotelsProvider.getHotels();
});
