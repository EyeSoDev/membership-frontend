// Password
const password = document.getElementById('password');
const letter = document.getElementById('letter');
const capital = document.getElementById('capital');
const number = document.getElementById('number');
const length = document.getElementById('length');
const togglePassword = document.getElementById('toggle-password');

// Form
const registerForm = document.getElementById('register-form');

const username = document.getElementById('username');
const type = document.getElementById('type');
const name = document.getElementById('name');
const addressNo = document.getElementById('address-no');
const villageNo = document.getElementById('village-no');
const alley = document.getElementById('alley');
const road = document.getElementById('road');
const subDistrict = document.getElementById('subdistrict');
const district = document.getElementById('district');
const province = document.getElementById('province');
const zipcode = document.getElementById('zipcode');
const contactTitle = document.getElementById('contact-title');
const contactFirstname = document.getElementById('contact-firstname');
const contactLastname = document.getElementById('contact-lastname');
const contactPhonenumber = document.getElementById('contact-phonenumber');
const contactEmail = document.getElementById('contact-email');
const contactReferralCode = document.getElementById('contact-referral-code');

password.addEventListener('click', () => {
  if (password.type == 'password') {
    password.type = 'text';
    togglePassword.classList.add('visible');
  } else {
    password.type = 'password';
    togglePassword.classList.remove('visible');
  }
})

password.addEventListener('keyup', () => {
  const lowerCaseLetters = /[a-z]/g;
  if (password.value.match(lowerCaseLetters)) {
    letter.classList.remove('invalid');
    letter.classList.add('valid');
  } else {
    letter.classList.remove('valid');
    letter.classList.add('invalid');
  }

  const upperCaseLetters = /[A-Z]/g;
  if (password.value.match(upperCaseLetters)) {
    capital.classList.remove('invalid');
    capital.classList.add('valid');
  } else {
    capital.classList.remove('valid');
    capital.classList.add('invalid');
  }

  const numbers = /[0-9]/g;
  if (password.value.match(numbers)) {
    number.classList.remove('invalid');
    number.classList.add('valid');
  } else {
    number.classList.remove('valid');
    number.classList.add('invalid');
  }

  if (password.value.length >= 8) {
    length.classList.remove('invalid');
    length.classList.add('valid');
  } else {
    length.classList.remove('valid');
    length.classList.add('invalid');
  }
})

async function register(memberData) {
  try {
    const response = await fetch('http://localhost:3000/members/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(memberData)
    })

    if (!response.ok) {
      throw new Error('Failed to fetch trivia questions');
    }

    window.location.href = 'index.html';
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const memberData = {
    username: username.value,
    password: password.value,
    type: type.value,
    name: name.value,
    addressNo: addressNo.value,
    villageNo: villageNo.value,
    alley: alley.value,
    road: road.value,
    subdistrict: subDistrict.value,
    district: district.value,
    province: province.value,
    zipcode: zipcode.value,
    contactTitle: contactTitle.value,
    contactFirstname: contactFirstname.value,
    contactLastname: contactLastname.value,
    contactPhonenumber: contactPhonenumber.value,
    contactEmail: contactEmail.value,
    contactReferralCode: contactReferralCode.value
  };

  register(memberData);
})
