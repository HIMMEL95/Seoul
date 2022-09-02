const form = document.getElementById('form');
const id = document.getElementById('id');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const dob = document.getElementById('dob');
const gender = document.getElementById('gender');
const radio = document.getElementById('radio_operator');
const tel = document.getElementById('tel');
const certi = document.getElementById('tel_certification');
const zip = document.getElementById('zip');
const address = document.getElementById('address');
const detail_add = document.getElementById('detailAddress');
const job = document.getElementById('job');
const team = document.getElementById('team');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

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

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const idValue = id.value.trim();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const dobValue = dob.value.trim();
    const genderValue = gender.value.trim();
    const radioValue = radio.value.trim();
    const telValue = tel.value.trim();
    const certiValue = certi.value.trim();
    const zipValue = zip.value.trim();
    const addressValue = address.value.trim();
    const detailValue = detail_add.value.trim();

    if (idValue === '') {
        setError(id, 'ID를 입력하시오');
    } else {
        setSuccess(id);
    }

    if (usernameValue === '') {
        setError(username, '이름을 입력하시오');
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email을 입력하시오');
    } else if (!isValidEmail(emailValue)) {
        setError(email, '올바른 방식의 이메일을 입력하시오');
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character.');
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

    if (dobValue === '') {
        setError(dob, '올바른 형식의 생일을 입력하시오');
    } else {
        setSuccess(dob);
    }

    if (genderValue === '') {
        setError(gender, '본인의 성별을 입력하시오');
    } else {
        setSuccess(gender);
    }

    if (telValue === '') {
        setError(tel, '전화번호 입력하시오');
    } else {
        setSuccess(tel);
    }

    if (radioValue === '') {
        setError(radio, '통신사 입력하시오');
    } else {
        setSuccess(radio);
    }

    if (certiValue === '') {
        setError(certi, '인증번호를 입력하시오');
    } else {
        setSuccess(certi);
    }

    if (zipValue === '') {
        setError(zip, '우편번호를 입력하시오');
    } else {
        setSuccess(zip);
    }

    if (addressValue === '') {
        setError(address, '주소를 입력하시오');
    } else {
        setSuccess(address);
    }

    if (detailValue === '') {
        setError(detail_add, '상세주소를 입력하시오');
    } else {
        setSuccess(detail_add);
    }
}

