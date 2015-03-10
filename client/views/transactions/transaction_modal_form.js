Template.transactionModalForm.helpers({
    categories: function() {
        return Categories.find();
    },
    currencies: function() {
        return Currencies.find();
    },
});

Template.transactionModalForm.rendered=function() {
    $('.datepicker').datepicker({
        format: 'yyyy-mm-dd'
    });
}

Template.transactionModalForm.events({
    "click #add-transaction-btn": function (ev,tmpl) {

        var balance = $(tmpl.find('#transaction-balance')).val();
        var category = $(tmpl.find('#transaction-category')).val();
        var desc = $(tmpl.find('#transaction-desc')).val();
        var date = $(tmpl.find('#transaction-date')).val();
        var currency = $(tmpl.find('#transaction-currency')).val();

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
            box_id: this.box_id,
            date: new Date(moment(date).format())
        };

        Transactions.insert(data);

        $(tmpl.find('#add-transaction-modal')).modal('hide');

        _.each(tmpl.findAll('input'),function(el){
            el.value = '';
       });

        ev.preventDefault();
    }
});