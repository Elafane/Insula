var game = {

    tick : function(){
        var now = Date.now();
    }
};
var hero =  {

    thirst : 0,
    hunger : 0
};
var inventory =  {
    items : {
        leaf : {
            name : "leaf",
            found : false,
            amount: 0
        },
        stick : {
            name : "stick",
            found : false,
            amount: 0
        },
        cauldron : {
            name : "cauldron",
            found : false,
            amount: 0
        },
        smallStone : {
            name : "small_stone",
            found : false,
            amount: 0
        }
    }
};
var map = {

    beach : {
        obj : beach,
        found : true
    },
    forest : {
        obj : forest,
        found : true
    }

};
var beach = {

};
var forest = {


};
$(document).ready(function(){
    window.setInterval(game.tick,1000/25);
})