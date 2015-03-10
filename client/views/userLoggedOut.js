Template.userLoggedOut.events({
    'click .login-vk' : function(e,tmpl) {
        Meteor.loginWithVk({
            requestPermissions: ['email']
        },function(err) {
            if(err) {
                //error handling
            } else {
                // sho an alert
            }
        });
    }
});