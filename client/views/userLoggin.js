Template.userLoggin.events({
    'click #logout' : function(e,tmpl) {
        Meteor.logout(function(err) {
            if(err) {
                //error handling
            } else {
                // sho an alert
            }
        });
    }
});