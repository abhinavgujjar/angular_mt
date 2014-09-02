angular.module('hotelmgr').factory('hotelsProvider', function($http) {

	var selectedHotel;

	var hotels = [];

	var hp = {
		getHotels: function(callback) {


			$http.get('data/hotels.json').success(function(results) {
				callback(results.results)
			});

			//return hotels;
		},
		addHotel: function(hotel) {
			hotels.push(hotel);
		},
		setSelectedHotel: function(hotel) {
			selectedHotel = hotel
		},
		getSelectedHotel: function(hotel) {
			return selectedHotel;
		},
		getHotel: function(hotelId) {
			var targeHotel;

			angular.forEach(hotels, function(item) {
				if (item.id === hotelId) {
					targeHotel = item;
				}
			});

			return targeHotel;
		}
	};

	return hp;

});