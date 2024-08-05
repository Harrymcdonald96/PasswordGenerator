
function generatePassword() {
    const length = 12;  // Fixed length for password
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=-";
    let password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById('passwordDisplay').value = password;
}

function copyPassword() {
    const passwordInput = document.getElementById('passwordDisplay');
    passwordInput.select();  // Select the text field
    document.execCommand("copy");  // Copy the text inside the text field
    alert("Password copied to clipboard!");  // Alert the user that text has been copied
}

