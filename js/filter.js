document.addEventListener("DOMContentLoaded", function () {
    const filterInput = document.getElementById("filter-input");
    const noResults = document.getElementById("no-results");
    //When the user types anything into the search bar this checks the input against the titles and categories of the different cards in "News" and "Products"
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

        });

        if (visibleCount === 0){
            noResults.style.display = "block";
        }
        else{
            noResults.style.display = "none";
        }
     });
});
