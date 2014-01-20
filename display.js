var display = {

    init : function() {
        for(var i=0;i<10;i++){
            $("#messages").append("<div></div>");
        }
        display.update();
        display.updateMap();
        window.setInterval(display.update,1000/25);
    },
    update : function () {
        //display.updateMap();
        display.updateStatus();
        //display.writeMessage(Date.now());
    },
    updateMap : function (){
        var html = $("<div></div>");
        var btn;
		btn = $("<button>inventory</button>");
		btn.click(display.showInventory);
		html.append(btn);
        if(map.place.hasOwnProperty('beach')){
            btn = $("<button>beach</button>");
            btn.click(display.showBeach);
            html.append(btn);
        }
        if(map.place.hasOwnProperty('forest')){
            btn = $("<button>forest</button>");
            btn.click(display.showForest);
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
		var html = $("<div></div>");
		var items = inventory.items;
        for(var item in items){
            if(items[item].found){
				html.append($('<button></button>').text(items[item].name + " : " + items[item].amount));
            }
        }
		$("#inventory").html(html);
		$("#inventory").toggle();
	},
    writeMessage : function(text){
        $("#messages div:first").remove();
        $("#messages").append($("<div></div>").text(text));
    },
    showBeach : function () {
        var html = $("<div></div>");
        var fieldset = $("<fieldset></fieldset>").append($("<legend></legend>").text("ocean"));
        fieldset.append(($("<button></button>").text("drink salt water")).click(beach.drinkSaltWater));
        if(inventory.items.cauldron.amount > 0){
			fieldset.append($("<button></button>").text("fill cauldron").click(beach.fillCauldron));
		}
        html.append(fieldset);
		
		fieldset = $("<fieldset></fieldset>").append($("<legend></legend>").text("sand"));
		fieldset.append($("<button></button>").text("dig").click(beach.dig));
		if(!beach.fireplace.build && inventory.items.smallStone.found){
			fieldset.append($("<button></button>").text("build fire place (10 small stone)").click(beach.buildFirePlace));
		}
		html.append(fieldset);
		
		if(beach.fireplace.build){
			fieldset = $("<fieldset></fieldset>").append($("<legend></legend>").text("fire place"));
		}
		html.append(fieldset);
		
        $("#buttons").html(html);
    },
    showForest : function () {
        var html = $("<div></div>");

        $("#buttons").html(html);
    }
};
$(document).ready(function(){
    display.init();
});
