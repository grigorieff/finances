Template.report.rendered = function() {

    var getRandomColor = function (){
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    var self = this;

    Tracker.autorun(function() {

        var transactions = Transactions.find({
            box_id: self.data.box_id
        }).fetch();

        var groupedDates = _.groupBy(transactions, 'category_id');
        var groupedDates2 = _.groupBy(transactions, 'date');
        var data = [];

        _(groupedDates).each(function(group,key) {
            var sum = _(group).reduce(function(memo,obj){
                var c = Currencies.findOne(obj.currency_id);
                return parseFloat(memo) + parseFloat(obj.balance * c.value);
            },0);

            data.push({
                value: sum,
                label: Categories.findOne(key).title,
                color: getRandomColor()
            });
        });

        var ctx = self.find("#myChart").getContext("2d");
        new Chart(ctx).Pie(data);

        var labels = [];
        var points = [];

        _(groupedDates2).each(function(group,key) {

            var sum = _(group).reduce(function(memo,obj){
                var c = Currencies.findOne(obj.currency_id);
                return parseFloat(memo) + parseFloat(obj.balance * c.value)
            },0);

            labels.push(moment(key).format('L'));
            points.push(sum);

        });

        var data2 = {
            labels: labels,
            datasets: [{
                label : "date",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: points
            }]
        };


        var ctx2 = self.find("#myChart2").getContext("2d");
        new Chart(ctx2).Line(data2,{
            scaleShowGridLines : true
        });

    });


}