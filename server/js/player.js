var cls = require("./lib/class");

module.exports = Player = cls.Class.extend({
    init: function(connection) {
        var self = this;
        
        this.connection = connection;
        
        this.name = "dummy name";
        
        this.connection.listen(function(message) {
            var messageType = message.type;
            // If you are not logged in I need to say hello first
            if (!self.loggedIn && messageType != 0) {
                self.connection.close("Are you not going to say hello first?");
                return;
            }
            // Can only say hello once, we've already met you know
            if (self.loggedIn && messageType == 0) {
                self.connection.close("We've already met once...");
                return;
            }
            
            if (messageType == 0) {
                self.arena = self.connection._server.getArena(self);
                console.log(self.arena);
            }
        });
    },
    
    setName : function(name) {
        this.name = name;
    }
    
});
