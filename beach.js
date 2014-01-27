var beach = {
	
	fireplace : {
		
		build : false,
		cauldronPlaced : false,
		waterCooked : false
		
		
	},
	
	drinkSaltWater : function() {
		hero.thirst += 5;
		display.writeMessage("drinking salt water made you thirsty");
	},
	
	
	dig : function() {
		if(!hero.busy){
			display.writeMessage("digging...");
			hero.busy = true;
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
		hero.busy = false;
		display.reload();
	},
	
	
	buildFirePlace : function() {
		if(!beach.fireplace.build 
			&& inventory.items.smallStone.amount >= 10
			&& inventory.items.stick.amount >= 5
			&& inventory.items.leaf.amount >= 20
		){
			inventory.use('smallStone',10);
			inventory.use('stick',5);
			inventory.use('leaf',20);
			beach.fireplace.build = true;
		}
	},
	fillCauldron : function(){
		if(inventory.items.cauldron.amount > 0){
			inventory.use('cauldron',1);
			inventory.add('filledCauldronSalt',1)
		}
	},
	placeFilledCauldron : function(){
		if(inventory.items.filledCauldronSalt.amount >= 1){
			inventory.use('filledCauldronSalt',1);
			beach.fireplace.cauldronPlaced = true;
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
		
		if(!beach.fireplace.build 
				&& (inventory.items.smallStone.found || inventory.items.stick.found)
			){
			actionGroup.actions.push({
				name : 'build fire place (10 small stone, 5 stick, 20 leaf)',
				action : beach.buildFirePlace
			});	
		}

		actionGroups.push(actionGroup);
		//end sand
		
		
		//begin fireplace
		if(beach.fireplace.build){
			actionGroup = { 
				name :  'fireplace' + 
					((beach.fireplace.cauldronPlaced)?' with cauldron' + 
						((beach.fireplace.waterCooked)?'(water)':'(salt water)'):''),
				actions : []
			};
			if(!beach.fireplace.cauldronPlaced && inventory.items.filledCauldronSalt.amount >= 1){
				actionGroup.actions.push({
					name : 'place filled cauldron',
					action : beach.placeFilledCauldron
				});
			}
			actionGroups.push(actionGroup);			
		}
		//end fireplace
		
		display.displayActions(actionGroups);
    }
	
};
