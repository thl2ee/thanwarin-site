var toggle = document.getElementById("dark-mode-toggle");
var darkTheme = document.getElementById("dark-mode-theme");
var savedTheme = localStorage.getItem("dark-mode-storage") || "light";
toggleStyle(savedTheme);

toggle.addEventListener("click", () => {
  const mode = toggle.className === "dark-option" ? "dark" : "light";
  setTheme(mode);
  toggleStyle(mode);
});

function setTheme(mode) {
  localStorage.setItem("dark-mode-storage", mode);
}

function toggleStyle(mode) {
  if (!darkTheme) return;
  if (mode === "dark") {
    darkTheme.disabled = false;
    toggle.className = "light-option";
    toggle.textContent = "Light Mode ☀️";
  } else if (mode === "light") {
    darkTheme.disabled = true;
    toggle.className = "dark-option";
    toggle.textContent = "Dark Mode 🌛";
  }
}
