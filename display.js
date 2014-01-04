var display = {

    init : function() {
        for(var i=0;i<10;i++){
            $("#messages").append("<div></div>");
        }
        window.setInterval(this.update,1000/25);
    },
    update : function () {
        display.updateMap();
        display.updateInventory();
        display.writeMessage(Date.now());
    },
    updateMap : function (){
        var html = $("<div></div>");
        var btn;
        if(map.beach.found){
            btn = $("<button>beach</button>");
            btn.click(this.showBeach);
            html.append(btn);
        }
        if(map.forest.found){
            btn = $("<button>forest</button>");
            btn.click(this.showForest);
            html.append(btn);
        }
        $("#map").html(html);
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
    },
    showForest : function () {
    }
};
$(document).ready(function(){
    display.init();
});