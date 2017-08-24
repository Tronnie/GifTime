console.log("hola! html and JS are connected")

    //-accordion
    $("button").on('click', function(){
            console.log('the accordion is on!')

      var inst = $(this).attr("data-instrument");
      // var state =$(this).attr("data-state")
      var queryURL =  "https://api.giphy.com/v1/gifs/search?api_key=d6ed00ce3a7b4d4cb205f3d20fe6750c&limit=10&q=" + inst;

      $.ajax ({
              url:queryURL,
              method: "GET"})//<--ajax

       .done(function (response) {
            console.log(response.data);

          var results = response.data;
          for (var i=0; i<results.length; i++){
            var instDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);


            //Test 7. add a movingImage loop in order to animate all gifs!
    function animateImage(){
        //Test 3. works! but only on first gif
        $(instDiv).on('click', function(){
          console.log ("tickle me image!");
          instDiv.html(animate);
        }); //<--click image

                //Original
            var image = $("<img>");
            image.attr("src", results[i].images.fixed_height_still.url);
            //
            var animate =$("<img>")
            animate.attr("src", results[i].images.fixed_height.url);

            instDiv.append(p);
            instDiv.append(image);
            // instDiv.append(animate);
            $(".instruments").prepend(instDiv);
    } //<--animateImage function
    animateImage ()  //<--Test 7.



        }//<--for loop



       }); //<--.done

    }); //<--button onclick
