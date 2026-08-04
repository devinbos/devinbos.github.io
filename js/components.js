function loadComponent(selector, filePath) {
        return fetch(filePath)
        .then(response => {
        if (!response.ok) throw new Error("Could not load " + {$filePath});
        return response.text();
        })
    //reloads the theme switcher
    .then(html => {
        document.querySelector(selector).innerHTML = html;
        initializeThemeToggle();
        })
        .catch(error => console.error(error));
    }
    //loads the header and footer
    document.addEventListener("DOMContentLoaded", function () {
        loadComponent("#header-placeholder", "components/header.html");
        loadComponent("#footer-placeholder", "components/footer.html");
});