var game = {

    tick : function(){
        var now = Date.now();
    }
};
var hero =  {

    thirst : 0,
    hunger : 0
};
var inventory =  {
    items : {
        leaf : {
            name : "leaf",
            found : false,
            amount: 0
        },
        stick : {
            name : "stick",
            found : false,
            amount: 0
        },
        cauldron : {
            name : "cauldron",
            found : false,
            amount: 0
        },
        smallStone : {
            name : "small_stone",
            found : false,
            amount: 0
        }
    }
};
var map = {

    beach : {
        obj : beach,
        found : true
    },
    forest : {
        obj : forest,
        found : true
    }

};
var beach = {
	
	digging : false,
	
	drinkSaltWater : function() {
		hero.thirst += 5;
		display.writeMessage("drinking salt water made you thirsty");
	},
	dig : function() {
		if(!beach.digging){
			display.writeMessage("digging...");
			beach.digging = true;
			window.setTimeout(beach.digged,1000);
		}
	},
	digged : function(){
		var r = Math.random();
		if(!inventory.items.cauldron.found && r > 0.8) {
			inventory.items.cauldron.found = true;
			inventory.items.cauldron.amount++;
			display.writeMessage("You found a cauldron");
		}
		else if (r > 0.4) {
			inventory.items.smallStone.found = true;
			inventory.items.smallStone.amount++;
			display.writeMessage("You found a small stone");
		}
		else {
			display.writeMessage("You found nothing :(");
		}
		beach.digging = false;
	}
};
var forest = {


};
$(document).ready(function(){
    window.setInterval(game.tick,1000/25);
})
