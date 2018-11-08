(function($) {
  //fetch blog
  $.ajax({
    url: "http://jventures.pk/backend/wp-json/wp/v2/posts?_embed",
    data: { categories: 4, per_page: 3 },
    type: "get",
    success: function(data) {
      var html = "";

      for (let i = 0; i < data.length; i++) {
        const article = data[i];

        var title = article.title.rendered;
        var author = article._embedded.author[0].name;
        var date = (new Date(article.date)).toDateString();
        var excerpt = $(article.excerpt.rendered)
          .text()
          .substr(0, 150);
        var image = article._embedded["wp:featuredmedia"][0].source_url;

        html += `
        <a href="single-blog.html?id=${article.id}" class="col-lg-4 col-md-4 col-sm-6 col-xs-12 blog-content wow fadeInUp" data-wow-delay="0.4s">
            <div class="blog-image">
                <div class="hover-effect">

                    <img src="${image}">
                </div>
            </div>
            <h2 class="blog-title">${title}</h2>
            <p>${excerpt}</p>
            <span class="blog-info"><span class="text-capitalize">${author}</span> - ${date} </span>
        </a>
        `;
      }

      $(".js-blog").prepend(html);
    },
    error: function(err) {
      console.error("FETCH_TEAM_ERR:", err);
    }
  });
})(jQuery);
