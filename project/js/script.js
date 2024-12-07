// Add interactivity to the global navigation
document.addEventListener("DOMContentLoaded", () => {
  // Highlight active page
  const links = document.querySelectorAll("header nav a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.href.includes(currentPage)) {
      link.classList.add("active");
    }
  });

  // Example: Add button click alert
  const buttons = document.querySelectorAll(".buy-now");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Thank you for your interest in our Walkman products!");
    });
  });
});