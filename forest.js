
var forest = {

	show : function () {
		var actionGroups,actionGroup,action;
		
		actionGroups = [];
		
		//begin tree
		actionGroup = { 
			name : 'trees',
			actions : []
		};
		
		actionGroup.actions.push({
			name : 'make something with a tree',
			action : null
		});
		
		actionGroups.push(actionGroup);
		//end tree
		
		display.displayActions(actionGroups);
	}

};
