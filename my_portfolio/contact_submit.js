document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  

    var formData = new FormData(this); 
    fetch('https://angeelbyeon@gmail.com/send-email', { 
        method: 'POST',
        body: formData
    })
    .then(response => response.json())  
    .then(data => {
        console.log('Success:', data);
        alert('Form submitted successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your form.');
    });
});
