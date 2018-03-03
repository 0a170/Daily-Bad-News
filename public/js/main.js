$(document).ready(function() {
   $(".getNewsButton").on('click', function() {
      var content = "";
      var url = '/' + $(this).val();

      $.ajax({
         type: 'GET',
         url: url,
         dataType: 'JSON',
         success: function(response) {
            $('#content').empty();
            var newsArticles = response;
            for(let i = 0; i < newsArticles.length; i++) {
               content += '<div class="col-sm-4 article-div">'
                       +     '<img src="' + newsArticles[i].urlToImage + '" style="width: 100%">'
                       +     '<p><b>' + newsArticles[i].title + '</b></p>'
                       +     '<div class="divider"></div>'
                       +     '<p>' + newsArticles[i].description + '</p>'
                       +  '</div>';
            }
            $('#content').html(content);
         },
         error: function(err) {
            console.log(err);
         }
      });
   });
});
