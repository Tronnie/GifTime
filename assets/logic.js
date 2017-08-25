console.log("hola! html and JS are connected")

// //Test. 12 displayMovieIn
// function displayInstButton() {

    //-accordion
    $("button").on('click', function(){

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
            //Test 11. appropriate Rating
            if (results[i].rating !== "r" && results[i].rating !== "pg-13"){
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

            }    //<--rating
    } //<--animateImage function
    animateImage ()  //<--Test 7.

        }//<--for loop

       }); //<--.done




    // Function for displaying movie data
          function renderButtons() {

            // Deleting the movies prior to adding new movies
            // (this is necessary otherwise you will have repeat buttons)
            $("#buttons-view").empty();

            // Looping through the array of movies
            for (var i = 0; i < results.length; i++) {

              // Then dynamicaly generating buttons for each movie in the array
              // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
              var a = $("<button>");
              // Adding a class of movie to our button
              a.addClass("btns");
              // Adding a data-attribute
              a.attr("data-instrument", results[i]);
              // Providing the initial button text
              a.text(results[i]);
              // Adding the button to the buttons-view div
              $("#buttons-view").append(a);
            }
          }

          // This function handles events where a movie button is clicked
          $("#add-instrument").on("click", function(event) {
            event.preventDefault();
            console.log("submit clicked");
            // This line grabs the input from the textbox
            var newInst = $("#instrument-input").val().trim();

            // Adding movie from the textbox to our array
            results.push(newInst);

            // Calling renderButtons which handles the processing of our movie array
            renderButtons();
          });


  // Adding a click event listener to all elements with a class of "movie"
  // $(document).on("click", ".newInst", displayInstButton);

  // Calling the renderButtons function to display the intial buttons
  renderButtons();

    }); //<--button onclick

  // }  //<--Test.12 displayInstButton
