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
    hunger : 0
};
var inventory =  {
	addResource : function(resource,number) {
		if(inventory.resources.hasOwnProperty(resource)){
			inventory.resources[resource].found = true;
			inventory.resources[resource].amount += number;
		}		
		
	},
	
	useResource : function(resource,number) {
		if(inventory.resources.hasOwnProperty(resource)){
			inventory.resources[resource].amount -= number;
		}
	},
	
	addItem : function(item,number) {
		if(inventory.items.hasOwnProperty(item)){
			inventory.items[item].found = true;
			inventory.items[item].amount += number;
		}		
		
	},
	
	useItem : function(item,number) {
		if(inventory.items.hasOwnProperty(item)){
			inventory.items[item].amount -= number;
		}
	},
		
    items : {
        cauldron : {
            name : "cauldron",
            found : false,
            amount: 0
        },
        filledCauldron : {
            name : "filled_cauldron",
            found : false,
            amount: 0
        }
        
    },
    resources : {
		smallStone : {
            name : "small_stone",
            found : false,
            amount: 0
        },
        leaf : {
            name : "leaf",
            found : false,
            amount: 0
        },
        stick : {
            name : "stick",
            found : false,
            amount: 0
        }
		
	}
};
var map = {

	addPlace : function (name,object) {
		map.place[name] = {
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
