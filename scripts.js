// Store elements in variables
const ctaButton = document.getElementById('ctaButton');
const contactForm = document.getElementById('contactForm');
const recruitForm = document.getElementById('recruitForm');

// Smooth scrolling
ctaButton.addEventListener('click', () => {
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const targetId = anchor.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Form handling
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const formData = {
    name: contactForm.elements.name.value,
    email: contactForm.elements.email.value,
    message: contactForm.elements.message.value,
  };

  fetch('/api/contact/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Display success message
      const successMessage = document.createElement('div');
      successMessage.textContent = 'Message sent successfully!';
      successMessage.classList.add('success-message');
      document.body.appendChild(successMessage);
      setTimeout(() => {
        successMessage.remove();
      }, 3000);
      contactForm.reset();
    })
    .catch(error => {
      console.error('Error:', error);
      // Display error message
      const errorMessage = document.createElement('div');
      errorMessage.textContent = 'There was an error sending your message. Please try again.';
      errorMessage.classList.add('error-message');
      document.body.appendChild(errorMessage);
      setTimeout(() => {
        errorMessage.remove();
      }, 3000);
    });
});

recruitForm.addEventListener('submit', e => {
  e.preventDefault();
  const recruitData = {
    name: recruitForm.elements.name.value,
    sport: recruitForm.elements.sport.value,
    email: recruitForm.elements.email.value,
    phone: recruitForm.elements.phone.value,
    bio: recruitForm.elements.bio.value,
  };

  fetch('/api/recruit/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(recruitData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.error) {
        throw new Error(data.error);
      }
      // Display success message
      const successMessage = document.createElement('div');
      successMessage.textContent = 'Application submitted successfully!';
      successMessage.classList.add('success-message');
      document.body.appendChild(successMessage);
      setTimeout(() => {
        successMessage.remove();
      }, 3000);
      recruitForm.reset();
    })
    .catch(error => {
      console.error('Error:', error);
      // Display error message
      const errorMessage = document.createElement('div');
    })})