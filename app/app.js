angular.module('hotelmgr', []);

angular.module('hotelmgr').controller('mainController', function($scope, config, hotelsProvider) {

	$scope.descLimit = config.descLimit;

	$scope.upVote = function(hotel) {
		if (!hotel.rating) {
			hotel.rating = 0;
		}

		hotel.rating++;
	}

	$scope.downVote = function(hotel) {
		if (!hotel.rating) {
			hotel.rating = 0;
		}

		hotel.rating--;
	}

	$scope.hotels = hotelsProvider.getHotels();
});

angular.module('hotelmgr').filter('toFeet', function() {
	return function(input) {
		return input * 10.7639
	}
})

angular.module('hotelmgr').value('config', {
	descLimit: 300
});

angular.module('hotelmgr').factory('hotelsProvider', function(){

	var hotels =  [{
		"id": "1",
		"name": "Taj Westend",
		"price": 17000,
		"location": "Race Course Road",
		"imgUrl": "kVIGWsz.jpg",
		"url": "http://www.theleela.com/",
		"availableForBook": false,
		"description": "Incoherently newt hound ",
		"area": 40000
	}, {
		"id": "2",
		"name": "Keys Hotel",
		"price": 8000,
		"location": "Whitefield",
		"imgUrl": "OqJMuy5.jpg",
		"availableForBook": true,
		"description": "Irresolutely and oh across wherever oh goodness more wallaby a some much reindeer octopus overcast howled far far honey tamarin a ouch inventoried distinct wombat egregious deceptive conservative alas.",
		"area": 20000
	}, {
		"id": "3",
		"name": "Leela Palace",
		"price": 20000,
		"location": "Old Airport Road",
		"imgUrl": "qA4PCDl.jpg",
		"availableForBook": true,
		"description": "Llama crab credible wow reproachfully brave apart dived rugged this hey luscious obediently pert taped smug crud learned thus arousingly or jeepers as before pill save jeez cunning jeez some pointed near house imprecise chose.",
		"area": 65000
	}, {
		"id": "4",
		"name": "Oberoi!!!",
		"price": 20000,
		"location": "Whitefield",
		"imgUrl": "qA4PCDl.jpg",
		"availableForBook": true,
		"description": "Llama crab credible wow reproachfully brave apart dived rugged this hey luscious obediently pert taped smug crud learned thus arousingly or jeepers as before pill save jeez cunning jeez some pointed near house imprecise chose.",
		"area": 198000
	}, {
		"id": "4",
		"name": "Alila",
		"price": 50000,
		"location": "Whitefield",
		"imgUrl": "qA4PCDl.jpg",
		"availableForBook": true,
		"description": "Llama crab credible wow reproachfully brave apart dived rugged this hey luscious obediently pert taped smug crud learned thus arousingly or jeepers as before pill save jeez cunning jeez some pointed near house imprecise chose.",
		"area": 198000
	}];

	var hp =  {
		getHotels : function(){
			return hotels;
		}
	};

	return hp;

});
