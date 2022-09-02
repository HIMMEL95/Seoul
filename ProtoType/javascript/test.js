checkNull = function(obj, value, message) {
    if (value == "" || value == null || value == '0') {
        // alert(message);
        obj.focus();
        $(".error").text(message);
        $(".error").show();
        // $(".error").css('display', none);
        return false;
    } else {
        return true;
    }
}

checkNullWithoutFocus = function(value, message) {
    if (value == "" || value == null) {
        alert(message);
        return false;
    } else {
        return true;
    }
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
