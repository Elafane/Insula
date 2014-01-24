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
			inventory.add('cauldron',1);
			display.writeMessage("You found a cauldron");
		}
		else if (r > 0.4) {
			inventory.add('smallStone',1);
			display.writeMessage("You found a small stone");
		}
		else {
			display.writeMessage("You found nothing :(");
		}
		beach.digging = false;
		display.reload();
	},
	
	
	buildFirePlace : function() {
		if(!beach.fireplace.build && inventory.items.smallStone.amount >= 10){
			inventory.use('smallStone',10);
			beach.fireplace.build = true;
		}
	},
	fillCauldron : function(){
		if(inventory.items.cauldron.amount > 0){
			inventory.use('cauldron',1);
			inventory.add('filledCauldronSalt',1)
		}
	},
	
	
	show : function () {
		var actionGroups,actionGroup,action;
		
		actionGroups = [];
		
		
		//begin ocean
		actionGroup = { 
			name : 'ocean',
			actions : []
		};
		
		actionGroup.actions.push({
			name : 'drink water',
			action : beach.drinkSaltWater
		});
		
		if(inventory.items.cauldron.amount > 0){
			actionGroup.actions.push({
				name : 'fill Cauldron',
				action : beach.fillCauldron
			});		
		}
		
		
		
		actionGroups.push(actionGroup);
		// end ocean
		
		
		//begin sand
		actionGroup = { 
			name : 'sand',
			actions : []
		};
		
		actionGroup.actions.push({
			name : 'dig',
			action : beach.dig
		});
		
		if(!beach.fireplace.build && inventory.items.smallStone.found){
			actionGroup.actions.push({
				name : 'build fire place (10 small stone)',
				action : beach.buildFirePlace
			});	
		}

		actionGroups.push(actionGroup);
		//end sand
		
		
		//begin fireplace
		if(beach.fireplace.build){
			actionGroup = { 
				name : 'fireplace',
				actions : []
			};
			actionGroups.push(actionGroup);			
		}
		//end fireplace
		
		display.displayActions(actionGroups);
    }
	
};
