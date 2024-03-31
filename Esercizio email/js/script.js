document.getElementById('checkEmail').addEventListener('click', function() {
    let inputEmail = document.getElementById('emailInput').value;
    let messageElement = document.getElementById('message');
    let allowedEmails = ["user1@example.com", "user2@example.com", "user3@example.com"];
    let emailFound = false;

    for (let i = 0; i < allowedEmails.length; i++) {
        if (inputEmail === allowedEmails[i]) {
            emailFound = true;
        }
    }

    if (emailFound) {
        messageElement.textContent = "Accesso Consentito";
    } else {
        messageElement.textContent = "Accesso Negato";
    }
});