document.addEventListener('DOMContentLoaded', function() {
    const gender = localStorage.getItem('gender');
    const email = localStorage.getItem('email');
    const feedback = localStorage.getItem('feedback');

    document.getElementById('userGender').textContent = gender;
    document.getElementById('userEmail').textContent = email;
    document.getElementById('userFeedback').textContent = feedback;
});