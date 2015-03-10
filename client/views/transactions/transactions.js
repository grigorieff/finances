Template.transactions.helpers({
    transactions: function() {
        return Transactions.find({
            box_id : this.box_id
        });
    }
});

Template.transactions.events({

    "click .delete": function () {
        Transactions.remove(this._id);
    }

});

