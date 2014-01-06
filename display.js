var display = {

    init : function() {
        for(var i=0;i<10;i++){
            $("#messages").append("<div></div>");
        }
        this.update();
        window.setInterval(this.updateStatus,1000/25);
    },
    update : function () {
        display.updateMap();
        display.updateStatus();
        display.updateInventory();
        display.writeMessage(Date.now());
    },
    updateMap : function (){
        var html = $("<div></div>");
        var btn;
        if(map.beach.found){
            btn = $("<button>beach</button>");
            btn.click(display.showBeach);
            html.append(btn);
        }
        if(map.forest.found){
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
        $("#inventory").html(table);
    },
    writeMessage : function(text){
        $("#messages div:first").remove();
        $("#messages").append($("<div></div>").text(text));
    },
    showBeach : function () {
        var html = $("<div></div>");
        var fieldset = $("<fieldset></fieldset>").append($("<legend></legend>").text("ocean"));
        fieldset.append($("<button></button>").text("drink salt water").click(beach.drinkSaltWater));
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
