const button = document.getElementById("themeToggle");
const body = document.body;

    button.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");

    // Change icon depending on mode
    if (body.classList.contains("dark")) {
        button.textContent = "🌙"; // moon icon
    } else {
        button.textContent = "☀️"; // sun icon
    }
});