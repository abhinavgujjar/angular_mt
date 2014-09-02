angular.module('hotelmgr').factory('hotelsProvider', function() {

	var hotels = [{
		"id": "1",
		"name": "Taj Westend",
		"price": 17000,
		"location": "Race Course Road",
		"imgUrl": "kVIGWsz.jpg",
		"url": "http://www.theleela.com/",
		"availableForBook": false,
		"description": "Incoherently newt hound ",
		"area": 40000,
		'amenities': [{
			'name': 'Bar',
			'available': true
		},{
			'name': 'Swimming Pool',
			'available': true
		},{
			'name': 'Restaurant',
			'available': true
		},{
			'name': 'Free Parking',
			'available': true
		}]
	}, {
		"id": "2",
		"name": "Keys Hotel",
		"price": 8000,
		"location": "Whitefield",
		"imgUrl": "OqJMuy5.jpg",
		"availableForBook": true,
		"description": "Irresolutely and oh across wherever oh goodness more wallaby a some much reindeer octopus overcast howled far far honey tamarin a ouch inventoried distinct wombat egregious deceptive conservative alas.",
		"area": 20000,
		'amenities': [{
			'name': 'Bar',
			'available': true
		},{
			'name': 'Swimming Pool',
			'available': true
		},{
			'name': 'Restaurant',
			'available': true
		},{
			'name': 'Free Parking',
			'available': true
		}]
	}, {
		"id": "3",
		"name": "Leela Palace",
		"price": 20000,
		"location": "Old Airport Road",
		"imgUrl": "qA4PCDl.jpg",
		"availableForBook": true,
		"description": "Llama crab credible wow reproachfully brave apart dived rugged this hey luscious obediently pert taped smug crud learned thus arousingly or jeepers as before pill save jeez cunning jeez some pointed near house imprecise chose.",
		"area": 65000,
		'amenities': [{
			'name': 'Bar',
			'available': true
		},{
			'name': 'Swimming Pool',
			'available': false
		},{
			'name': 'Restaurant',
			'available': true
		},{
			'name': 'Free Parking',
			'available': false
		}]
	}, {
		"id": "4",
		"name": "Oberoi!!!",
		"price": 20000,
		"location": "Whitefield",
		"imgUrl": "qA4PCDl.jpg",
		"availableForBook": true,
		"description": "Llama crab credible wow reproachfully brave apart dived rugged this hey luscious obediently pert taped smug crud learned thus arousingly or jeepers as before pill save jeez cunning jeez some pointed near house imprecise chose.",
		"area": 198000,
		'amenities': [{
			'name': 'Bar',
			'available': false
		},{
			'name': 'Swimming Pool',
			'available': false
		},{
			'name': 'Restaurant',
			'available': false
		},{
			'name': 'Free Parking',
			'available': false
		}]
	}, {
		"id": "4",
		"name": "Alila",
		"price": 50000,
		"location": "Whitefield",
		"imgUrl": "qA4PCDl.jpg",
		"availableForBook": true,
		"description": "Llama crab credible wow reproachfully brave apart dived rugged this hey luscious obediently pert taped smug crud learned thus arousingly or jeepers as before pill save jeez cunning jeez some pointed near house imprecise chose.",
		"area": 198000,
		'amenities': [{
			'name': 'Bar',
			'available': true
		},{
			'name': 'Swimming Pool',
			'available': false
		},{
			'name': 'Restaurant',
			'available': true
		},{
			'name': 'Free Parking',
			'available': true
		}]
	}];

	var selectedHotel;

	var hp = {
		getHotels: function() {
			return hotels;
		},
		addHotel: function(hotel) {
			hotels.push(hotel);
		},
		setSelectedHotel : function(hotel){
			selectedHotel = hotel
		},
		getSelectedHotel : function(hotel){
			return selectedHotel;
		}
	};

	return hp;

});