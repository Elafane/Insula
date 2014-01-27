
var forest = {

	lookAround : function() {
		if(!hero.busy){
			display.writeMessage("looking...");
			hero.busy = true;
			window.setTimeout(forest.lookedAround,1000);
		}
		
	},
	
	lookedAround : function() {
		var r = Math.random();
		if(r > 0.8) {
			inventory.add('stick',1);
			display.writeMessage("You found a stick");
		}
		else if (r > 0.2) {
			inventory.add('leaf',1);
			display.writeMessage("You found a leaf");
		}
		else {
			display.writeMessage("You found nothing :(");
		}
		hero.busy = false;
		display.reload();	
		
	},

	show : function () {
		var actionGroups,actionGroup,action;
		
		actionGroups = [];
		
		//begin tree
		actionGroup = { 
			name : 'trees',
			actions : []
		};
		
		actionGroup.actions.push({
			name : 'take a look around',
			action : forest.lookAround
		});
		
		actionGroups.push(actionGroup);
		//end tree
		
		display.displayActions(actionGroups);
	}

};
