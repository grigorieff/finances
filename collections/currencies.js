Currencies = new Meteor.Collection('currencies');

if(Meteor.isServer) {
    Meteor.publish("currencies", function () {
        return Currencies.find();
    });
}

if(Meteor.isClient) {
    Meteor.subscribe("currencies");
}

Meteor.startup(function () {
    if(Meteor.isServer) {
        if (Currencies.find().count() === 0) {
            Currencies.insert({ caption: "Американский доллар", "value": 64 });
            Currencies.insert({ caption: "Рубль" , value: 1});
            Currencies.insert({ caption: "Евро", value: 75 });
        }
    }
});