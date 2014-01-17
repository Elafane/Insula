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
        display.updateInventory();
        //display.writeMessage(Date.now());
    },
    updateMap : function (){
        var html = $("<div></div>");
        var btn;
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
    updateInventory : function(){
        var items = inventory.items;
        var table = $("<table></table>");
        for(item in items){
            if(items[item].found){
                var tr = $("<tr></tr>");
                tr.append($("<td></td>").text(items[item].name));
                tr.append($("<td></td>").text(items[item].amount));
                table.append(tr);
            }
        }
        $("#items").html(table);
        var actions = $("<div></div>");
        var fieldset;
        if(inventory.items.filledCauldron.amount > 0){
			fieldset = $("<fieldset></fieldset>").append($("<legend></legend>").text("filled cauldron"));
			fieldset.append($("<button></button>").text("drink").click(beach.drinkSaltWater));
			actions.append(fieldset);
		}
		$('#actions').html(actions);
    },
    writeMessage : function(text){
        $("#messages div:first").remove();
        $("#messages").append($("<div></div>").text(text));
    },
    showBeach : function () {
        var html = $("<div></div>");
        var fieldset = $("<fieldset></fieldset>").append($("<legend></legend>").text("ocean"));
        fieldset.append($("<button></button>").text("drink salt water").click(beach.drinkSaltWater));
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
