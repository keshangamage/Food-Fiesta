document.getElementById('reservation-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for booking with Food Fiesta! We look forward to serving you.');
});

const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });



