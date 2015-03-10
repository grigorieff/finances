Accounts.onCreateUser(function(options,user){

    var profile = _.pick(user.services.vk,
        'first_name',
        'last_name',
        'photo',
        'email');

    user.profile = profile;
    user.profile.name = profile.first_name + ' ' + profile.last_name;

    return user;
});