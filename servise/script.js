function selectService(serviceName) {
    document.getElementById('service').value = serviceName;
}

(function() {
    emailjs.init('k4782mxa4KgrfBhJdJHGd'); // Replace 'your_user_id' with your actual EmailJS User ID (API Key)
})();

function sendEmail(event) {
    event.preventDefault(); // Prevent form submission
    const form = event.target;

    // Extract form data
    const name = form.name.value;
    const phone = form.phone.value;
    const service = form.service.value;

    // Construct email body using template variables
    const emailBody = `
        Hello Appithub,

        You got a new message from ${name}:

        Service: ${service}

        Best wishes,
        EmailJS team
    `;

    // Send email using EmailJS
    emailjs.send('service_meoge19', 'template_7omokio', {
        Appithub: 'Appithub', // Replace with actual service-related content if needed
        from_name: name,
        to_email: 'hiiaayush@gmail.com', // Replace with your actual recipient email
        message_html: emailBody
    }).then(function(response) {
        console.log('Email sent:', response);
        alert('Your message has been sent successfully!');
        form.reset(); // Clear form fields after submission
    }, function(error) {
        console.error('Email send error:', error);
        alert('Oops! Something went wrong. Please try again later.');
    });
}
