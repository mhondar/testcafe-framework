const {Selector} = require('testcafe');

function select(selector) {
    return Selector(selector).with({ boundTestRun: testController });
}

exports.RegisterPage = {
    GenderButton: function() {
        return select('#gender-male');
    },
    Firstname: function() {
        return select('#FirstName');
    },
    LastName: function() {
        return select('#LastName');
    },
    DateOfBirthDay: function() {
        return select('select[name="DateOfBirthDay"]');
    },
    DateOfBirthMonth: function() {
        return select('select[name="DateOfBirthMonth"]');
    },
    DateOfBirthYear: function() {
        return select('select[name="DateOfBirthYear"]');
    },
    Email: function() {
        return select('#Email');
    },
    Password: function() {
        return select('#Password');
    },
    ConfirmPassword: function() {
        return select('#ConfirmPassword');
    },
    RegisterButton: function() {
        return select('select[#register-button');
    },
    SuccessfullMessage: function() {
        return select('div.result').withText('Your registration completed');
    },
    ListOption: function() {
        return select('option');
    }
}
