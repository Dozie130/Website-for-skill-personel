// Only run this script on apply.html
if (document.getElementById('application-form')) {
    document.getElementById('application-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const position = document.querySelector('input[name="position"]').value;
        const resume = document.getElementById('resume').files[0];
        const coverLetter = document.querySelector('textarea[name="coverletter"]').value;
        const successMessage = document.getElementById('success-message');

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

        console.log({ name, email, position, resume: resume.name, coverLetter });
        successMessage.classList.remove('hidden');
        this.reset();

        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 3000);
    });

    // Pre-fill position from URL query
    const urlParams = new URLSearchParams(window.location.search);
    const position = urlParams.get('position');
    if (position) {
        document.querySelector('input[name="position"]').value = decodeURIComponent(position);
    }
}
