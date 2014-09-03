
angular.module('hotelmgr').factory('favProvider', function() {

	var favs = [];

	return {
		getFavorites: function() {
			return favs;
		},
		addFav: function(hotel) {
			favs.push(hotel);
		},
		removeFav : function(fav){
			//remove
		}
	}

})