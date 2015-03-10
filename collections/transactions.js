Transactions = new Meteor.Collection('transactions');

if(Meteor.isServer) {
    Meteor.publish("transactions", function () {
        return Transactions.find({});
    });
}

if(Meteor.isClient) {
    Meteor.subscribe("transactions");
}