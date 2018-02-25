$(document).ready(function() {
   $("#getNewsButton").on('click', function() {
      var content = "";
      $.ajax({
         type: 'GET',
         url: '/getNews',
         dataType: 'JSON',
         success: function(response) {
            var newsArticles = response;
            for(let i = 0; i < newsArticles.length; i++) {
               content += '<div class="col-sm-3 article-div">'
                          + '<img src="' + newsArticles[i].urlToImage + '" style="width: 100%">'
                          + '<p><b>' + newsArticles[i].title + '</b></p><br>'
                          + '<p>' + newsArticles[i].description + '</p><br>'
                          + '</div>';
            }
            $('#content').html(content);
         },
         error: function(err) {
            console.log(err);
         }
      });
   });
});
