const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  
  if (!email || !password) {
    alert('всі поля повинні бути заповнені');
    return;
  }

  const userData = { email, password };
  console.log(userData);
  form.reset();
});

// я не до кінця зрозумів цю задачу, було б добре
// отримати дуууже детальне пояснення з вирішенням