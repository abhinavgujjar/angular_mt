angular.module('hotelmgr', ['ngRoute']);

angular.module('hotelmgr').config(function($routeProvider){
	$routeProvider.when('/listing', {
		templateUrl : 'partials/listing.html'
	});

	$routeProvider.when('/create', {
		template : '<h1>CREATE</h1>'
	});

	$routeProvider.otherwise( {
		redirectTo : '/listing'
	});

})

angular.module('hotelmgr').filter('toFeet', function() {
	return function(input) {
		return input * 10.7639
	}
})

angular.module('hotelmgr').value('config', {
	descLimit: 300
});

