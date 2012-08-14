var cls = require("./lib/class");

module.exports = Arena = cls.Class.extend({
    init: function(player) {
        this.players = [player];
        this.ups = 33;
        
    },
    
    connect : function(player) {
        this.players.push(player);
        
    },
    
    run : function() {
        setInterval(function() {
           
        }, 1000 / this.ups);
    }
});