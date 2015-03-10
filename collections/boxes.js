Boxes = new Meteor.Collection('boxes');

if(Meteor.isServer) {
    Meteor.publish("boxes", function () {
        return Boxes.find({
            user_id: this.userId
        });
    });
}

if(Meteor.isClient) {
    Meteor.subscribe("boxes");
}