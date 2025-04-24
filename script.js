// Fetch and display blog posts
fetch('_posts/index.json')
  .then(response => response.json())
  .then(posts => {
    const blogContainer = document.querySelector('.articles-grid');
    posts.forEach(post => {
      blogContainer.innerHTML += `
        <article class="article-card">
          <img src="${post.thumbnail}" alt="${post.title}" class="article-image">
          <div class="article-date">${new Date(post.date).toLocaleDateString()}</div>
          <h2 class="article-title">${post.title}</h2>
          <p class="article-excerpt">${post.description}</p>
          <a href="${post.url}" class="read-more">Read Article</a>
        </article>
      `;
    });
  }); 