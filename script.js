// script.js
const toggleBtn = document.getElementById("dark-mode-toggle");
const body = document.body;

if (localStorage.getItem("darkMode") === "true") {
  body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const darkOn = body.classList.contains("dark-mode");
  toggleBtn.textContent = darkOn ? "☀️" : "🌙";
  localStorage.setItem("darkMode", darkOn);
});
