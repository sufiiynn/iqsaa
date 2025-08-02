// Show welcome message when the page loads
window.onload = function () {
    alert("Welcome to Iqsa - BCA Final Year Project!");
};

// Highlight the current nav item (optional future feature)
document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
