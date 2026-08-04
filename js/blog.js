document.addEventListener("DOMContentLoaded", function () {
    const blogList = document.getElementById("blog-list");

    fetch("data/posts.json")
    .then(response => response.json())
    .then(posts => {
      posts.sort((a, b) => new Date(b.date) - new Date(a.date));
      posts.forEach((post,index) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post-card");
        const date = new Date(post.date);
        const stringDate = date.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
          });
          let latestPost = "";
          if (index === 0){latestPost = "(Latest Post)";}
          else{latestPost="";}
          // takes in the JSON file's categories and formats them into html elements
          postElement.innerHTML = `<div class="project-card"> <h2 class="card-title">${post.title} ${latestPost}</h2> 
                                <p class = "post-meta">${stringDate}</p> 
                                <p class = "card-category">${post.category}</p>
                                <p>${post.summary}
                                <p id="hidden-${post.id}" style="display:none;">${post.content} </p>
                                <button onclick="
                                const content = document.getElementById('hidden-${post.id}');
                                if (content.style.display ==='none'){
                                content.style.display='block';
                                this.textContent='Read Less'}else{content.style.display='none'; this.textContent='Read More'}">
                                Read More
                                </button>
                                </div>`;
                                blogList.appendChild(postElement);
            });
          })
  .catch(error => console.error("Error loading posts:", error));
});