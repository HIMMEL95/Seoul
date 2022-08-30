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
const signBtn = document.querySelector('.submit');

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
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return re.test(String(email).toLowerCase());
}

const isValidDob = dob => {
    const re = /^[1-2]{1}[0-9]{3}-[0-1]{1}[0-9]{1}-[0-3]{1}[0-9]{1}$/g;
    return re.test(dob);
}

const isValidTel = tel => {
    const re = /^[\d]{3}-[\d]{4}-[\d]{4}$/g;
    return re.test(tel);
}

const isValidUserName = username => {
    const re = /^[^0-9]+[가-힣]{1,4}$/g;
    return re.test(username);
}

const isValidNickname = id => {
    const re = /^[A-Za-z가-힣]{1}[A-Za-z가-힣]{3,19}$/g;
    return re.test(id);
}

id.addEventListener('input', e => {
    if (e.target.value === '') {
        setError(e.target, '4~20자리 아이디를 입력하시오')
    } else if (!isValidNickname) {
        setError(e.target, '숫자로 시작하는 아이디를 입력하지 마시오')
    } else if (e.target.value.length < 4 || e.target.value.length > 20) {
        setError(e.target, '4~20자리 아이디를 입력하시오')
    } else {
        setSuccess(e.target)
    }
})

username.addEventListener('input', e => {
    if (e.target.value === '') {
        setError(e.target, '이름을 입력하시오')
    } else if (!isValidUserName(e.target.value)) {
        setError(e.target, '정확한 이름을 입력하시오')
    } else {
        setSuccess(e.target)
    }
})

email.addEventListener('input', e => {
    if (e.target.value === '') {
        setError(e.target, '이메일을 입력하시오')
    } else if (!isValidEmail(e.target.value)) {
        setError(e.target, "이메일 양식에 맞게 입력하시오")
    } else {
        setSuccess(e.target)
    }
})

password.addEventListener('input', e => {
    if (e.target.value === '') {
        setError(e.target, '비밀번호를 입력하시오')
    } else if (e.target.value.length < 8 ) {
        setError(e.target, 'Password must be at least 8 character.')
    } else {
        setSuccess(e.target)
    }
})

password2.addEventListener('input', e => {
    if (e.target.value === '') {
        setError(e.target, '비밀번호를 입력하시오')
    } else if (e.target.value !== password.value.trim()) {
        setError(e.target, "Passwords doesn't match")
    } else {
        setSuccess(e.target)
    }
})

dob.addEventListener('input', e => {
    if (e.target.value === '') {
        setError(e.target, '생년월일을 입력하시오')
    } else if (!isValidDob(e.target.value)) {
        setError(e.target, '양식에 맞게 입력하시오')
    } else {
        setSuccess(e.target)
    }
})

tel.addEventListener('input', e => {
    if (e.target.value === '') {
        setError(e.target, '전화번호를 입력하시오')
    } else if (!isValidTel(e.target.value)) {
        setError(e.target, '양식에 맞게 입력하시오')
    } else {
        setSuccess(e.target)
    }
})

zip.addEventListener('input', e => {
    if (e.target.value === '') {
        setError(e.target, '우편번호를 입력하시오')
    } else {
        setSuccess(e.target)
    }
})

address.addEventListener('input', e => {
    if (e.target.value === '') {
        setError(e.target, '주소를 입력하시오')
    } else {
        setSuccess(e.target)
    }
})

detail_add.addEventListener('input', e => {
    if (e.target.value === '') {
        setError(e.target, '상세주소를 입력하시오')
    } else {
        setSuccess(e.target)
    }
})

radio.addEventListener('input', e => {
    if (e.target.value === '0') {
        setError(e.target, '통신사를 선택하세요')
    } else {
        setSuccess(e.target)
    }
})

gender.addEventListener('input', e => {
    if (e.target.value === '0') {
        setError(e.target, '성별을 선택하세요')
    } else {
        setSuccess(e.target)
    }
})

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     validateInputs();
    
// });

// const validateInputs = () => {
//     const idValue = id.value.trim();
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//     const password2Value = password2.value.trim();
//     const dobValue = dob.value.trim();
//     const genderValue = gender.value.trim();
//     const radioValue = radio.value.trim();
//     const telValue = tel.value.trim();
//     const certiValue = certi.value.trim();
//     const zipValue = zip.value.trim();
//     const addressValue = address.value.trim();
//     const detailValue = detail_add.value.trim();

//     if (idValue === '') {
//         setError(id, 'ID를 입력하시오');
//     } else {
//         setSuccess(id);
//     }

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

//     if (dobValue === '') {
//         setError(dob, '올바른 형식의 생일을 입력하시오');
//     } else {
//         setSuccess(dob);
//     }

//     if (genderValue === '') {
//         setError(gender, '본인의 성별을 입력하시오');
//     } else {
//         setSuccess(gender);
//     }

//     if (telValue === '') {
//         setError(tel, '전화번호 입력하시오');
//     } else {
//         setSuccess(tel);
//     }

//     if (radioValue === '') {
//         setError(radio, '통신사 입력하시오');
//     } else {
//         setSuccess(radio);
//     }

//     if (certiValue === '') {
//         setError(certi, '인증번호를 입력하시오');
//     } else {
//         setSuccess(certi);
//     }

//     if (zipValue === '') {
//         setError(zip, '우편번호를 입력하시오');
//     } else {
//         setSuccess(zip);
//     }

//     if (addressValue === '') {
//         setError(address, '주소를 입력하시오');
//     } else {
//         setSuccess(address);
//     }

//     if (detailValue === '') {
//         setError(detail_add, '상세주소를 입력하시오');
//     } else {
//         setSuccess(detail_add);
//     }
// }
