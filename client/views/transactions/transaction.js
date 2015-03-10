Template.transaction.helpers({
    balance: function() {
        return s.numberFormat(parseInt(this.balance),2);
    },
    category: function() {
        return Categories.findOne(this.category_id).title;
    },
    date: function() {
        return (moment(this.date)).format("L");
    },
    currency: function() {
        return Currencies.findOne(this.currency_id).caption;
    },
});