angular.module('hotelmgr', []);


angular.module('hotelmgr').filter('toFeet', function() {
	return function(input) {
		return input * 10.7639
	}
})

angular.module('hotelmgr').value('config', {
	descLimit: 300
});

