var display = {
	
	currentObject : null,
	
    init : function() {
        for(var i=0;i<10;i++){
            $("#messages").append("<div></div>");
        }
        display.updateMap();
        window.setInterval(display.update,1000/25);
    },
    update : function () {
        display.updateStatus();
    },
    updateMap : function (){
        var html = $("<div></div>");
        var btn;
		btn = $("<button>inventory</button>");
		btn.click(display.showInventory);
		html.append(btn);
		var place;
		for(var p in map.place){
			place = map.place[p];
			btn = $("<button></button>");
			btn.text(place.name);
			btn.click(function(obj){
				return function(){
					display.currentObject = obj;
					obj.show();
				}
			}(place.obj));
			//btn.click(place.obj.show);
			html.append(btn);
		}
        $("#map").html(html);
    },
    updateStatus : function () {
		var html = $("<div></div>");
		html.append($("<span></span>").text("thirst:" + hero.thirst));
		$("#status").html(html);
	},
	
    showInventory : function(){
		$("#inventory").toggle();
	},
	updateInventory : function() {
		var html = $("<div></div>");
		var items = inventory.items;
        for(var item in items){
            if(items[item].found){
				html.append($('<button></button>').text(items[item].name + " : " + items[item].amount)
				.click(items[item].action()).click(display.updateInventory));
            }
        }
		$("#inventory").html(html);
		
	},
    writeMessage : function(text){
        $("#messages div:first").remove();
        $("#messages").append($("<div></div>").text(text));
    },
    reload : function() {
		display.currentObject.show();
		display.updateInventory();
	},
    displayActions : function(actionGroups){

		var html = $('<div></div>');
		
		for(var i = 0,l = actionGroups.length;i<l;i++){
			var actionGroup = actionGroups[i];
			var fieldset = $('<fieldset></fieldset>');
			fieldset.append($('<legend></legend>').text(actionGroup.name));
			for(var j = 0,k = actionGroup.actions.length;j<k;j++){
				var action = actionGroup.actions[j];
				var button = $("<button></button>");
				button.text(action.name);
				button.click(action.action);
				button.click(display.reload);
				fieldset.append(button);
			}
			
			html.append(fieldset);
		}
		$("#buttons").html(html);
	}
};
$(document).ready(function(){
    display.init();
});
