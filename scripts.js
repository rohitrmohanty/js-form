function validateForm() {
    // .trim removes all the extra whitespaces at the end of the string
    const form = document.getElementById('registrationForm');
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const confirmPassword = form.confirmPassword.value.trim();
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.textContent = '';

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return false;
    }

    // Ensure all fields are filled
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        errorMessage.textContent = 'Please fill out all fields.';
        return false;
    }

    return true;
}