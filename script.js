document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('newsletter-form');
    const successContainer = document.getElementById('inline-success');
    const submitBtn = document.getElementById('submit-btn');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // 1. Change button state
        submitBtn.disabled = true;
        submitBtn.innerText = 'Joining...';

        // 2. Simulate API call (1 second delay)
        setTimeout(() => {
            // 3. Hide form and show success message
            form.style.display = 'none';
            successContainer.classList.remove('hidden');
        }, 1000);
    });
});