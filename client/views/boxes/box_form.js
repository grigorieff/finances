Template.boxForm.events({
    "click #add-box-btn": function (ev,tmpl) {

        var title = $(tmpl.find('input[type=text]')).val();

        if(s(title).trim()==='') {
            alert("title can't be empty");
            return;
        }

        Boxes.insert({
            user_id: Meteor.userId(),
            title: title
        });

        $(tmpl.find('#add-box-modal')).modal('hide');
        ev.preventDefault();
    }
});