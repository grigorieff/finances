
Router.configure({
    // the default layout
    layoutTemplate: 'AppLayout'
});

Router.route('/', function () {
    this.render('boxes');
});

Router.route('boxes/:_id',function() {
    //var transactions = Transactions.find({box_id: this.params._id});
    var box = Boxes.findOne(this.params._id);
    this.render('transactions', {
        data: {
            box_id: box._id
        }
    });
});

Router.route('boxes/:_id/transactions/:_tid',function() {
    var transaction = Transactions.findOne(this.params._tid);
    this.render('transactionForm', {
        data: transaction
    });
});

Router.route('boxes/:_id/report',function() {
    var box = Boxes.findOne(this.params._id);
    this.render('report', {
        data: {
            box_id: box._id
        }
    });
});