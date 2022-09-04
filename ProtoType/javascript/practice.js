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

id_regex = function(obj, hide) {
    const re = /^[A-Za-z가-힣]{1}[A-Za-z가-힣]{2,19}$/g;
    console.log($.trim($(obj).val()))
    if ($.trim($(obj).val()) == null || $.trim($(obj).val()) == '') {
        hide.parent().addClass('error')
        $(hide).text("아이디를 작성하시오")
        $(hide).show()
        return false;
    } else if(!(($.trim($(obj).val()).length > 2) && ($.trim($(obj).val()).length < 21))) {
        $(hide).text('4~20자 사이의 아이디를 작성하시오')
        hide.parent().addClass('error')
        $(hide).show()
        return false;
    } else {
        hide.parent().removeClass('error')
        hide.parent().addClass('success')
        $(hide).text("멋진 아이디 입니다.")
        $(hide).show()
        return true;
    }
}

name_regex = function(obj) {
    const re = /^[^0-9]+[가-힣]{1,4}$/g;
    console.log(re.test(obj))
    return re.test(obj);
}