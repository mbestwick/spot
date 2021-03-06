// JavaScript for user updating profile information

function alertSuccess (results) {
    alert(results);
    location.reload();
}

function updateUserInfo(evt) {
    evt.preventDefault();

    var current_pwd = prompt("Please enter your current password for verification.");

    var formInputs = {'fname': $("#fname-field").val(),
                      'lname': $("#lname-field").val(),
                      'email': $("#email-field").val(),
                      'password': $("#pwd-field").val(),
                      'current_pwd': current_pwd,
                      'zipcode': $("#zipcode-field").val(),
                      'phone': $("#phone-field").val(),
                      'user': $("#user-field").val(),
    };

    $.post('/user-updates', formInputs, alertSuccess);
}

$("#user-updates").on('submit', updateUserInfo);