Categories = new Meteor.Collection('categories');

if(Meteor.isServer) {
    Meteor.publish("categories", function () {
        return Categories.find();
    });
}

if(Meteor.isClient) {
    Meteor.subscribe("categories");
}

Meteor.startup(function () {

    if(Meteor.isServer) {
        if (Categories.find().count() === 0) {
            Categories.insert({ title: "Автомобиль. Личный транспорт" });
            Categories.insert({ title: "Бизнес, проекты" });
            Categories.insert({ title: "Бытовая техника" });
            Categories.insert({ title: "Продукты" });
            Categories.insert({ title: "Долги, кредиты" });
            Categories.insert({ title: "Кафе и рестораны" });
            Categories.insert({ title: "Заработная плата" });
            Categories.insert({ title: "Проценты по банковскому вкладу" });
            Categories.insert({ title: "Выйгрыш в латерею" });
        }
    }

});