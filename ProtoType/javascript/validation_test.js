// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     validateInputs();
// });

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');
//     console.log(inputControl)

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

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-z]{2,}))$/;
//     console.log(re.test(String(email).toLowerCase()))
//     return re.test(String(email).toLowerCase());
// }

// const validateInputs = () => {
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//     const password2Value = password2.value.trim();

//     if (usernameValue === '') {
//         setError(username, '이름을 입력하시오');
//     } else {
//         setSuccess(username);
//     }

//     if (emailValue === '') {
//         setError(email, 'Email을 입력하시오');
//     } else if (!isValidEmail(emailValue)) {
//         setError(email, '올바른 방식의 이메일을 입력하시오');
//     } else {
//         setSuccess(email);
//     }

//     if (passwordValue === '') {
//         setError(password, 'Password is required');
//     } else if (passwordValue.length < 8) {
//         setError(password, 'Password must be at least 8 character.');
//     } else {
//         setSuccess(password);
//     }

//     if (password2Value === '') {
//         setError(password2, 'Please confirm your password');
//     } else if (password2Value !== passwordValue) {
//         setError(password2, "Passwords doesn't match");
//     } else {
//         setSuccess(password2);
//     }
// }

checkNull = function(obj, value) {
    if (value != "4" || value != "5") {
        obj.focus();
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

gender_regex = function(obj, value, message, hide) {
    if (!checkNull(obj, value)) {
        hide.parent().addClass('error')
        $(hide).text(message);
        $(hide).show();
        return false;
    } else {
        hide.parent().removeClass('error')
        hide.parent().addClass('success')
        $(hide).hide();
        return true;
    }
}