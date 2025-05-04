document.addEventListener('DOMContentLoaded', function() {
  const ctaButton = document.getElementById('ctaButton');
  const contactForm = document.getElementById('contactForm');
  const recruitForm = document.getElementById('recruitForm');
  
  const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]').value; // CSRF Token

  // Smooth scrolling
  if (ctaButton) {
    ctaButton.addEventListener('click', () => {
      document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    });
  }

  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Form handling for Contact Form
  if (contactForm) {
    const contactName = document.getElementById('contactName');
    const contactEmail = document.getElementById('contactEmail');
    const contactMessage = document.getElementById('contactMessage');
    
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); 

      if (contactName && contactEmail && contactMessage) {
        const contactData = {
          name: contactName.value,
          email: contactEmail.value,
          message: contactMessage.value
        };

        fetch('/api/contact/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken
          },
          body: JSON.stringify(contactData),
        })
        .then(response => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.json();
        })
        .then(data => {
          alert(data.message || 'Contact message sent successfully!');
          contactForm.reset();
        })
        .catch(error => {
          console.error('Error:', error);
          alert('There was an error sending the contact message: ' + error.message);
        });
      } else {
        console.error('Form fields are missing.');
      }
    });
  }

  // Form handling for Recruit Form
  if (recruitForm) {
    const recruitName = document.getElementById('recruitName');
    const recruitAge = document.getElementById('recruitAge');
    const recruitGender = document.getElementById('recruitGender');
    const recruitSport = document.getElementById('recruitSport');
    const recruitEmail = document.getElementById('recruitEmail');
    const recruitPhone = document.getElementById('recruitPhone');
    const recruitBio = document.getElementById('recruitBio');

    recruitForm.addEventListener('submit', function(event) {
      event.preventDefault();

      if (recruitName && recruitAge && recruitGender && recruitSport && recruitEmail && recruitPhone && recruitBio) {
        const recruitData = {
          name: recruitName.value,
          age: recruitAge.value,
          gender: recruitGender.value,
          sport: recruitSport.value,
          email: recruitEmail.value,
          phone: recruitPhone.value,
          bio: recruitBio.value
        };

        fetch('/api/recruit/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken
          },
          body: JSON.stringify(recruitData),
        })
        .then(response => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.json();
        })
        .then(data => {
          alert(data.message || 'Recruitment application submitted successfully!');
          recruitForm.reset();
        })
        .catch(error => {
          console.error('Error:', error);
          alert('There was an error submitting the recruitment application: ' + error.message);
        });
      } else {
        console.error('Form fields are missing.');
      }
    });
  }
});
