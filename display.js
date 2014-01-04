var display = {

    init : function() {
        this.writeMessage("test");
        window.setInterval(this.update,1000/25);
    },
    update : function () {
        display.updateMap();
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
    writeMessage : function(text){
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