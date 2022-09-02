checkNull = function(obj, value, message, hide) {
    if (value == "" || value == null) {
        // alert(message);
        obj.focus();
        $(hide).text(message);
        $(hide).show();
        setError(obj, message);
        // $(".error").css('display', none);
        return false;
    } else {
        $(hide).text();
        $(hide).hide();
        setSuccess(obj);
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
