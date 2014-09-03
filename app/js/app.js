angular.module('hotelmgr', ['ngRoute', 'ngSanitize', 'ui.bootstrap.tpls', 'ui.bootstrap.tooltip']);

angular.module('hotelmgr').config(function($routeProvider) {
	$routeProvider.when('/listing', {
		templateUrl: 'partials/listing.html'
	});

	$routeProvider.when('/create', {
		templateUrl: 'partials/create.html'
	});

	$routeProvider.when('/details/:hotelId', {
		templateUrl: 'partials/details.html'
	});

	$routeProvider.otherwise({
		redirectTo: '/listing'
	});

})

angular.module('hotelmgr').filter('toFeet', function() {
	return function(input) {
		return input * 10.7639
	}
})

angular.module('hotelmgr').value('config', {
	descLimit: 50
});

angular.module('hotelmgr').value('defaultHotel', {
	name: 'config default',
	price: 10000,
	description: 'Some sort of description'
});


angular.module('hotelmgr').directive('preview', function() {

	//directive definition object

	return {
		restrict: 'EA',
		templateUrl: 'partials/preview.html',
		scope: {
			input : '=text'
		}
	}

});