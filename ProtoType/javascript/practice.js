// checkNull = function(obj, value, message, hide) {
//     if (value == "" || value == null) {
//         // alert(message);
//         obj.focus();
//         hide.parent().addClass('error')
//         $(hide).text(message)
//         $(hide).show()
//         return false;
//     } else {
//         hide.parent().removeClass('error')
//         hide.parent().addClass('success')
//         $(hide).hide()
//         return true;
//     }
// }

// checkNullWithoutFocus = function(value, message, hide) {
//     if (value == "" || value == null) {
//         alert(message);
//         hide.parent().addClass('error')
//         $(hide).text(message)
//         $(hide).show()
//         return false;
//     } else {
//         hide.parent().removeClass('error')
//         hide.parent().addClass('success')
//         $(hide).hide()
//         return true;
//     }
// }

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success');
// };

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };

// id_regex = function(obj, hide) {
//     const re = /^[A-Za-z가-힣]{1}[A-Za-z가-힣]{2,19}$/g;
//     console.log($.trim($(obj).val()))
//     if ($.trim($(obj).val()) == null || $.trim($(obj).val()) == '') {
//         hide.parent().addClass('error')
//         $(hide).text("아이디를 작성하시오")
//         $(hide).show()
//         return false;
//     } else if(!(($.trim($(obj).val()).length > 2) && ($.trim($(obj).val()).length < 21))) {
//         $(hide).text('4~20자 사이의 아이디를 작성하시오')
//         hide.parent().addClass('error')
//         $(hide).show()
//         return false;
//     } else {
//         hide.parent().removeClass('error')
//         hide.parent().addClass('success')
//         $(hide).text("멋진 아이디 입니다.")
//         $(hide).show()
//         return true;
//     }
// }

// name_regex = function(obj) {
//     const re = /^[^0-9]+[가-힣]{1,4}$/g;
//     console.log(re.test(obj))
//     return re.test(obj);
// }


checkNull = function(obj, value) {
    if (value == "" || value == null) {
        obj.focus();
        return false;
    } else {
        return true;
    }
}

checkNullWithoutFocus = function(value) {
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

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success');
// };

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };

id_regex = function(obj, value, message, hide) {
    const re = /^[A-Za-z가-힣]{1}[A-Za-z가-힣]{2,19}$/g;
    if (!checkNull(obj, value) && !(re.test($.trim($(obj).val())))) {
        hide.parent().addClass('error')
        $(hide).text(message)
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

name_regex = function(obj, value, message, hide) {
    const re = /^[ㄱ-ㅎ가-힣a-zA-z]{1,10}$/g;
    if (!checkNull(obj, value)) {
        hide.parent().addClass('error')
        $(hide).text(message)
        $(hide).show()
        return false;
    } else if (!(re.test($.trim($(obj).val())))) {
        $(hide).text('양식에 맞게 작성하시오')
        hide.parent().addClass('error')
        $(hide).show()
        return false;
    } else if(!(($.trim($(obj).val()).length > 1) && ($.trim($(obj).val()).length < 10))) {
        $(hide).text('2~10자 사이의 이름을 작성하시오')
        hide.parent().addClass('error')
        $(hide).show()
        return false;
    } else {
        hide.parent().removeClass('error')
        hide.parent().addClass('success')
        $(hide).hide()
        return true;
    }
}

email_regex = function(obj, value, message, hide) {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    // const re = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
    if (!checkNull(obj, value)) {
        hide.parent().addClass('error')
        $(hide).text(message)
        $(hide).show()
        return false;
    } else if (!(re.test($.trim($(obj).val())))) {
        $(hide).text('양식에 맞게 작성하시오')
        hide.parent().addClass('error')
        $(hide).show()
        return false;
    } else {
        hide.parent().removeClass('error')
        hide.parent().addClass('success')
        $(hide).hide()
        return true;
    }
}

pwd_regex = function(obj, value, message, hide) {
    if (!checkNull(obj, value) && (re.test($.trim($(obj).val())))) {
        hide.parent().addClass('error')
        $(hide).text(message)
        $(hide).show()
        return false;
    } else if(!(($.trim($(obj).val()).length > 7))) {
        $(hide).text('8자 이상의 비밀번호를 작성하시오')
        hide.parent().addClass('error')
        $(hide).show()
        return false;
    } else {
        hide.parent().removeClass('error')
        hide.parent().addClass('success')
        $(hide).hide()
        return true;
    }
}

pwd2_regex = function(obj, value, message, hide) {
    if (!checkNull(obj, value) && (re.test($.trim($(obj).val())))) {
        hide.parent().addClass('error')
        $(hide).text(message)
        $(hide).show()
        return false;
    } else if(!(($.trim($(obj).val()) === $.trim($('#password').val())))) {
        $(hide).text('비밀번호가 일치하지 않습니다.')
        hide.parent().addClass('error')
        $(hide).show()
        return false;
    } else {
        hide.parent().removeClass('error')
        hide.parent().addClass('success')
        $(hide).hide()
        return true;
    }
}

dob_regex = function(obj, value, message, hide) {
    const re = /^[1-2]{1}[0-9]{3}-[0-1]{1}[0-9]{1}-[0-3]{1}[0-9]{1}$/g;
    if (!checkNull(obj, value)) {
        hide.parent().addClass('error')
        $(hide).text(message)
        $(hide).show()
        return false;
    } else if (!(re.test($.trim($(obj).val())))) {
        hide.parent().addClass('error')
        $(hide).text("양식에 맞게 작성하세요")
        $(hide).show()
        return false;
    } else {
        hide.parent().removeClass('error')
        hide.parent().addClass('success')
        $(hide).hide()
        return true;
    }
}

gender_regex = function(obj, value, message, hide) {
    if (!checkNull(obj, value)) {
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

radio_regex = function(obj, value, message, hide) {
    if (!checkNull(obj, value)) {
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

tel_regex = function(obj, value, message, hide) {
    const re = /^[\d]{3}-[\d]{4}-[\d]{4}$/g;
    if (!checkNull(obj, value)) {
        hide.parent().addClass('error')
        $(hide).text(message)
        $(hide).show()
        return false;
    } else if (!(re.test($.trim($(obj).val())))) {
        hide.parent().addClass('error')
        $(hide).text("양식에 맞게 작성하세요")
        $(hide).show()
        return false;
    } else {
        hide.parent().removeClass('error')
        hide.parent().addClass('success')
        $(hide).hide()
        return true;
    }
}

zip_regex = function(obj, value, message, hide) {
    const re = /^[\d]{5}$/g;
    if (!checkNull(obj, value)) {
        hide.parent().addClass('error')
        $(hide).text(message)
        $(hide).show()
        return false;
    } else if (!(re.test($.trim($(obj).val())))) {
        hide.parent().addClass('error')
        $(hide).text("양식에 맞게 작성하세요")
        $(hide).show()
        return false;
    } else if(!(($.trim($(obj).val()).length === 5))) {
        hide.parent().addClass('error')
        $(hide).text("5자리 우편번호를 입력하세요")
        $(hide).show()
        return false;
    } else {
        hide.parent().removeClass('error')
        hide.parent().addClass('success')
        $(hide).hide()
        return true;
    }
}

add_regex = function(obj, value, message, hide) {
    if (!checkNull(obj, value)) {
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

detail_regex = function(obj, value, message, hide) {
    if (!checkNull(obj, value)) {
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