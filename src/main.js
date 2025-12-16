// Enhanced main.js with form handling
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  const btn = form.querySelector('button');
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    btn.disabled = true;
    btn.textContent = 'Sending...';
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    try {
      // Replace with your endpoint (Netlify Forms, Render service, etc.)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        form.innerHTML = '<p style="color: #4ade80; text-align: center;">Thanks! We\'ll be in touch within 24 hours.</p>';
      }
    } catch (error) {
      btn.textContent = 'Try again';
      alert('Network error. Please try again.');
    } finally {
      btn.disabled = false;
    }
  });
  
  console.log("Lakkuu Digital Solutions landing page loaded.");
});

