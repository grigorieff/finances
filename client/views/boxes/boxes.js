Template.boxes.helpers({
    boxes: function() {
        return Boxes.find();
    }
});

Template.boxes.events({
    /*"click .box-item": function () {
        this.route('/boxes/' + this._id);
    }*/
});