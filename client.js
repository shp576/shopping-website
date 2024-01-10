// client.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const contactNumber = document.getElementById('contactNumber').value;
  
      // Perform any client-side validation or actions here before submitting
  
      // Submit the form data to the server
      try {
        const response = await fetch('/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, contactNumber }),
        });
  
        if (response.ok) {
          const result = await response.text();
          console.log(result);
        } else {
          console.error('Failed to submit form');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    });
  });
  