Template.transactionForm.helpers({
    categories: function() {
        var self = this;

        return Categories.find().map(function(p) {
            p.parent = self;
            return p;
        });
    },
    selected: function(id,cit) {
        return cit===id ? 'selected' : '';
    },
    date: function() {
        return moment(this.date).format('YYYY-MM-DD')
    },
    currencies: function() {
        var self = this;

        return Currencies.find().map(function(p) {
            p.parent = self;
            return p;
        });
    }
});

Template.transactionForm.rendered = function() {
    if(!this._rendered) {
        $('.datepicker').datepicker({
            format: 'yyyy-mm-dd'
        });
    }
}

Template.transactionForm.events({
    "click #add-transaction-btn": function (ev,tmpl) {

        var balance = $(tmpl.find('#transaction-balance')).val();
        var category = $(tmpl.find('#transaction-category')).val();
        var currency = $(tmpl.find('#transaction-currency')).val();
        var desc = $(tmpl.find('#transaction-desc')).val();
        var date = $(tmpl.find('#transaction-date')).val();

        if(!_.isFinite(balance)) {
            alert("balance can be number");
            return;
        }

        if( s(desc).trim().value()=='') {
            alert("Desc cant be empty   ");
            return;
        }

        var rexp = new RegExp("^([0-9]{2,4})-([0-1][0-9])-([0-3][0-9])?$");
        if(!(date.match(rexp))) {
            alert("Date invalid format");
            return;
        }

        var data = {
            user_id: Meteor.userId(),
            balance: balance,
            desc: desc,
            category_id: category,
            currency_id: currency,
            box_id: tmpl.data.box_id,
            date: new Date(moment(date).format())
        };

        Transactions.update(tmpl.data._id,data);

        Router.go('boxes/:_id',{
            _id: data.box_id
        });

        ev.preventDefault();
    }
});