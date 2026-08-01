document.addEventListener("DOMContentLoaded", function () {
    const filterInput = document.getElementById("filter-input");
    const noResults = document.getElementById("no-results");
    // Adjust the selector to match your card markup
    filterInput.addEventListener("input", function () {
        const cards = document.querySelectorAll(".project-card");
         const query = this.value.toLowerCase().trim();
         let visibleCount = 0;
        cards.forEach(function (card) {
            const title = card.querySelector(".card-title").textContent.toLowerCase();
            const cat = card.querySelector(".card-category").textContent.toLowerCase();
            if (title.includes(query) || cat.includes(query)){
                card.style.display = "";
                visibleCount += 1;
            }
            else{
                card.style.display = "none";
            }
             // TODO: Read the title and category (or description) from the card
             // Hint: card.querySelector(".card-title").textContent.toLowerCase()
             // TODO: Show the card if query matches title OR category/description
             // TODO: Hide it otherwise
             // Hint: card.style.display = "none" or "" (empty string to restore)
             // TODO: Increment visibleCount for each visible card
        });

        if (visibleCount === 0){
            noResults.style.display = "block";
        }
        else{
            noResults.style.display = "none";
        }
    // TODO: Show noResults element if visibleCount === 0, hide it otherwise
     });
});
