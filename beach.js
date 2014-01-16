var beach = {
	
	digging : false,
	fireplace : {
		
		build : false 
		
	},
	
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
	},
	buildFirePlace : function() {
		if(!beach.fireplace.build && inventory.items.smallStone.amount >= 10){
			inventory.use('smallStone',10);
			beach.fireplace.build = true;
		}
	}
};
