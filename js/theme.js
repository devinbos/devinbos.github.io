function initializeThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;
  //function for the changing of theme
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    toggleBtn.checked = theme === "dark";
    localStorage.setItem("theme", theme);
  }
  //Applies saved theme
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);
 //changes theme when switched is toggled
  toggleBtn.addEventListener("change", () => {
    applyTheme(toggleBtn.checked ? "dark" : "light");
  });
}