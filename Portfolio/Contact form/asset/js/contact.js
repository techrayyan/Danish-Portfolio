// script.js

const form = document.getElementById('contact-form');
const responseDiv = document.getElementById('response');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Send the form data to your server-side script
    fetch('/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            phone,
            message
        })
    })
   .then(response => response.json())
   .then((data) => {
        responseDiv.innerHTML = `Thank you for contacting us, ${name}! We will get back to you soon.`;
    })
   .catch((error) => {
        responseDiv.innerHTML = `Error: ${error.message}`;
    });
});