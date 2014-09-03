angular.module('hotelmgr').factory('hotelsProvider', function($http, $q, parseHeaders) {

	var selectedHotel;

	var hotels = [];

	var hp = {
		getHotels: function() {
			var deferred = $q.defer();

			$http.get('data/hotels.json').success(function(results) {
				deferred.resolve(results.results);
			});

			return deferred.promise;
		},
		addHotel: function(hotel) {

			$http.post('https://api.parse.com/1/classes/hotels', hotel, {
				headers: parseHeaders
			});
		},
		setSelectedHotel: function(hotel) {
			selectedHotel = hotel
		},
		getSelectedHotel: function(hotel) {
			return selectedHotel;
		},
		getHotel: function(hotelId) {
			var deferred = $q.defer();

			$http.get('data/hotels.json').success(function(results) {
				var hotels = results.results;
				angular.forEach(hotels, function(item) {
					if (item.id === hotelId) {
						deferred.resolve(item);
					}
				});

			});


			return deferred.promise;
		}
	};

	return hp;

});