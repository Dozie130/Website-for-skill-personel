document.getElementById('application-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Form elements
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const position = document.querySelector('input[type="text"][placeholder="Position"]').value;
    const resume = document.getElementById('resume').files[0];
    const coverLetter = document.querySelector('textarea').value;
    const successMessage = document.getElementById('success-message');

    // Validation
    if (!name || !email || !position || !resume || !coverLetter) {
        alert('Please fill out all fields');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    if (resume.size > 5 * 1024 * 1024) {
        alert('Resume file size should not exceed 5MB');
        return;
    }

    // Simulate submission
    console.log({
        name,
        email,
        position,
        resume: resume.name,
        coverLetter
    });

    // Show success message
    successMessage.classList.remove('hidden');
    this.reset();

    // Hide success message after 3 seconds
    setTimeout(() => {
        successMessage.classList.add('hidden');
    }, 3000);
});

// Apply button functionality
document.querySelectorAll('.apply-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('apply').scrollIntoView({ behavior: 'smooth' });
        document.querySelector('input[type="text"][placeholder="Position"]').value = 
            button.parentElement.querySelector('h3').textContent;
    });
});
