document.getElementById('application-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic form validation
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const position = document.querySelector('input[type="text"][placeholder="Position"]').value;
    const resume = document.getElementById('resume').files[0];
    const coverLetter = document.querySelector('textarea').value;

    if (!name || !email || !position || !resume || !coverLetter) {
        alert('Please fill out all fields');
        return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // File size validation (max 5MB)
    if (resume.size > 5 * 1024 * 1024) {
        alert('Resume file size should not exceed 5MB');
        return;
    }

    // Simulate form submission
    console.log({
        name,
        email,
        position,
        resume: resume.name,
        coverLetter
    });
    
    alert('Application submitted successfully!');
    this.reset();
});
