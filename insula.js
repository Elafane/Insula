var game = {

	lastThirstTick : 0,
	
    tick : function(){
        var now = Date.now();
        if(now - game.lastThirstTick > 5000){
			game.lastThirstTick = now;
			hero.thirst++;
		}
    }
};
var hero =  {

    thirst : 0,
    hunger : 0,
    
    busy : false,
    
    decreaseThirst : function(amount){
		if((hero.thirst -= amount) < 0){
			hero.thirst = 0;
		}
	}
};

var map = {

	addPlace : function (name,object) {
		map.place[name] = {
			name : name,
			obj : object
		}
	},

	place : { }

};

$(document).ready(function(){
    window.setInterval(game.tick,1000/25);
    map.addPlace('beach',beach);
    map.addPlace('forest',forest);
});
