
document.getElementById("cracker-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const reason = document.getElementById("reason").value;
    const days = parseInt(document.getElementById("days").value, 10);

    console.log("Name:", name, "Reason:", reason, "Days:", days);  

    if (isNaN(days) || days <= 0) {
        alert("Please enter a valid number of days.");
        return;
    }

    const circlesContainer = document.getElementById("circles-container");
    const remainingDaysText = document.getElementById("remaining-days");

    circlesContainer.innerHTML = "";
    remainingDaysText.textContent = "";

    // Create circles
    for (let i = 1; i <= days; i++) {
        const circle = document.createElement("div");
        circle.className = "circle";
        circle.textContent = i;

        circle.addEventListener("click", () => {
            if (!circle.classList.contains("dashed")) {
                circle.classList.add("dashed");
                updateRemainingDays();
            }
        });

        circlesContainer.appendChild(circle);
    }

    // Initialize remaining days
    let remainingDays = days;
    remainingDaysText.textContent = `Remaining Days: ${remainingDays}`;

    // Update remaining days
    function updateRemainingDays() {
        remainingDays--;
        remainingDaysText.textContent = `Remaining Days: ${remainingDays}`;
    }
});
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


