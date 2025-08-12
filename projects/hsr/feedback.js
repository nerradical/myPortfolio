document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('feedbackForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Capture data from form
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const email = document.getElementById('email').value;
        const feedback = document.getElementById('feedback').value;

        // Store data in local storage
        localStorage.setItem('gender', gender);
        localStorage.setItem('email', email);
        localStorage.setItem('feedback', feedback);

        // Redirect to thank you page
        window.location.href = 'thankyou.html';
    });
});
