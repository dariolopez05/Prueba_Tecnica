document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  clearErrors();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  let isValid = true;

  if (!name) {
    showError('nameError', 'El nombre es obligatorio');
    isValid = false;
  }

  if (!email || !validateEmail(email)) {
    showError('emailError', 'Ingresa un correo válido');
    isValid = false;
  }

  if (!phone || !validatePhone(phone)) {
    showError('phoneError', 'Ingresa un teléfono válido');
    isValid = false;
  }

  if (!message) {
    showError('messageError', 'El mensaje es obligatorio');
    isValid = false;
  }

  if (isValid) {
    submitForm(name, email, phone, message);
  }
});

function showError(id, message) {
  const errorElement = document.getElementById(id);
  const inputElement = errorElement.previousElementSibling;
  const labelElement = inputElement.previousElementSibling;

  errorElement.textContent = message;
  errorElement.style.display = 'block';

  inputElement.classList.add('error');
  labelElement.classList.add('error');
}

function clearErrors() {
  const errors = document.querySelectorAll('.error-message');
  errors.forEach(error => {
    error.textContent = '';
    error.style.display = 'none';
  });

  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.classList.remove('error');
  });

  const labels = document.querySelectorAll('label');
  labels.forEach(label => {
    label.classList.remove('error');
  });
}

//Funcíon para comprobar si el email es valido
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

//Funcíon para comprobar si el telefono es valido
function validatePhone(phone) {
  const regex = /^(?:(?:\+34|0034)?[ -]?)?[6789]\d{8}$/;
  return regex.test(phone);
}

function showCard(name, email, phone, message) {
  document.getElementById('cardName').textContent = name;
  document.getElementById('cardEmail').textContent = email;
  document.getElementById('cardPhone').textContent = phone;
  document.getElementById('cardMessage').textContent = message;

  const card = document.getElementById('card');
  card.classList.remove('hidden');
}

function submitForm(name, email, phone, message) {
  const data = {
    name: name,
    email: email,
    phone: phone,
    message: message,
  };

  // Simulación de envío con AJAX
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Respuesta del servidor:', data);
      showCard(name, email, phone, message); 
    })
    .catch(error => {
      console.error('Error al enviar el formulario:', error);
    });
}