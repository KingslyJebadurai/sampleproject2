// Handle login functionality
document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if username and password are provided (non-empty)
    if (username && password) {
        // Redirect to the home page (index.html) on successful login
        window.location.href = "index.html";
    } else {
        alert("Please enter both username and password.");
    }
});