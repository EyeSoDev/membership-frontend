const username = document.getElementById('username');

// Password
const password = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('show-password');

// Form
const logimForm = document.getElementById('login-form');

const showPassword = () => {
  password.type = showPasswordCheckbox.checked ? 'text' : 'password';
};

const loginVerify = async (loginData) => {
  try {
    const response = await fetch('http://localhost:3000/members/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData),
      credentials: 'include'
    })

    if (!response.ok) {
      throw new Error('Failed to fetch trivia questions');
    }

    window.location.href = 'profile.html';
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

logimForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const loginData = {
    username: username.value,
    password: password.value
  };

  loginVerify(loginData);
})
