checkNull = function(obj, value, message, hide) {
    if (value == "" || value == null) {
        // alert(message);
        obj.focus();
        hide.parent().addClass('error')
        $(hide).text(message)
        $(hide).show()
        return false;
    } else {
        hide.parent().removeClass('error')
        hide.parent().addClass('success')
        $(hide).hide()
        return true;
    }
}

checkNullWithoutFocus = function(value, message, hide) {
    if (value == "" || value == null) {
        alert(message);
        hide.parent().addClass('error')
        $(hide).text(message)
        $(hide).show()
        return false;
    } else {
        hide.parent().removeClass('error')
        hide.parent().addClass('success')
        $(hide).hide()
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

id_regex = function(obj) {
    const re = /^[A-Za-z가-힣]{1}[A-Za-z가-힣]{3,19}$/g;
    if (re.test(obj) && (obj.val() == "" || value.val() == null)) {
        hide.parent().addClass('error')
        $(hide).text("아이디를 입력하세요")
        $(hide).show()
    } else if(obj.val().length < 8) {
        hide.parent().addClass('error')
        $(hide).text("아이디를 8자 이상으로입력하세요")
        $(hide).show()
    } else {
        hide.parent().removeClass('error')
        hide.parent().addClass('success')
        $(hide).hide()
    }
    return re.test(obj);
}

name_regex = function(obj) {
    const re = /^[^0-9]+[가-힣]{1,4}$/g;
    console.log(re.test(obj))
    return re.test(obj);
}