document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('newsletter-form');
    const successMsg = document.getElementById('inline-success');
    const submitBtn = document.getElementById('submit-btn');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 1. Give the user feedback that something is happening
        submitBtn.innerText = 'Joining...';
        submitBtn.style.opacity = '0.7';
        submitBtn.disabled = true;

        // 2. Simulate a short delay (like a real database save)
        setTimeout(() => {
            // 3. Hide the form and show the success message
            form.style.display = 'none';
            successMsg.classList.remove('hidden');
        }, 800);
    });
});