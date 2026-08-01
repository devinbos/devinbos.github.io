function initializeThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;
 
  function applyTheme(theme) {
    document.body.setAttribute("data-theme", theme);
    toggleBtn.checked = theme === "dark";
    localStorage.setItem("theme", theme);
  }
 
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);
 
  toggleBtn.addEventListener("change", function() {
    applyTheme(toggleBtn.checked ? "dark" : "light");
  });
}
// function initializeThemeToggle() {
// document.addEventListener("DOMContentLoaded", function () {
//  const toggleBtn = document.getElementById("theme-toggle");
//  function applyTheme(theme) {
//  document.body.setAttribute("data-theme", theme);
//     toggleBtn.checked = theme === "dark";
//     localStorage.setItem("theme", theme);
//  }
//  function loadSavedTheme() {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme){
//         applyTheme(savedTheme);
//     }
//     else{
//         applyTheme("light");
//     }
//  }
//  toggleBtn.addEventListener("click", function () {
//     const currentTheme = document.body.getAttribute("data-theme");
//     const newTheme = (currentTheme == "light") ? "dark" : "light";
//     applyTheme(newTheme);
//  });
//  loadSavedTheme(); 
// });
// }
