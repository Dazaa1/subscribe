document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('newsletter-form');
    const successMsg = document.getElementById('success-msg');
    const emailInput = document.getElementById('email-input');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop page refresh

        const email = emailInput.value;
        
        // You would typically send 'email' to your backend or ESP (like Mailchimp) here
        console.log(`Sending ${email} to our mailing list...`);

        // Simulate an API call
        form.style.opacity = '0.5';
        document.getElementById('submit-btn').innerText = 'Joining...';

        setTimeout(() => {
            successMsg.classList.remove('hidden');
            form.reset();
            form.style.opacity = '1';
            document.getElementById('submit-btn').innerText = 'Get Started';
        }, 1000);
    });
});

function closeModal() {
    document.getElementById('success-msg').classList.add('hidden');
}
