function initializeThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;
 
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    toggleBtn.checked = theme === "dark";
    localStorage.setItem("theme", theme);
  }
 
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);
 
  toggleBtn.addEventListener("change", () => {
    applyTheme(toggleBtn.checked ? "dark" : "light");
  });
}