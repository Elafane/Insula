var inventory =  {
	
	add : function(item,number) {
		if(inventory.items.hasOwnProperty(item)){
			inventory.items[item].found = true;
			inventory.items[item].amount += number;
		}		
		
	},
	
	use : function(item,number) {
		if(inventory.items.hasOwnProperty(item)){
			inventory.items[item].amount -= number;
		}
	},
		
    items : {
        cauldron : {
            name : "cauldron",
            found : false,
            amount: 0,
            action : null
        },
        filledCauldronSalt : {
            name : "filled Cauldron (saltwater)",
            found : false,
            amount: 0,
            action : function(){
					if(inventory.items.filledCauldronSalt.amount > 0){
						beach.drinkSaltWater();
						inventory.use('filledCauldronSalt',1);
						inventory.add('cauldron',1);
					}
				}
        },
        filledCauldronWater : {
            name : "filled Cauldron (water)",
            found : false,
            amount: 0,
            action : function(){
					if(inventory.items.filledCauldronWater.amount > 0){
						hero.decreaseThirst(25);
						inventory.use('filledCauldronWater',1);
						inventory.add('cauldron',1);
					}
				}
        },
		smallStone : {
            name : "small stone",
            found : false,
            amount: 0,
            action : null
        },
        leaf : {
            name : "leaf",
            found : false,
            amount : 0,
            action : null
        },
        stick : {
            name : "stick",
            found : false,
            amount : 0,
            action : null
        }
		
	}
};
