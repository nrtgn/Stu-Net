function includeHTML() {
  // Header
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;

      // ✅ RUN AFTER HEADER LOADS
      const menuToggle = document.getElementById("menuToggle");
      const nav = document.querySelector("nav");
      const authButtons = document.getElementById("nav-btn");

      menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
        authButtons.classList.toggle("active");
      });
    });

  // Footer
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    });
}

window.onload = includeHTML;
