console.log("hola! html and JS are connected")





//GLOBAL VARIABLES
// var instrument = ("");
// var queryURL =  "https://api.giphy.com/v1/gifs/search?api_key=d6ed00ce3a7b4d4cb205f3d20fe6750c&limit=10&q=" + instrument;

//FUNCTIONS
  //various instruments


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
            console.log(queryURL);
            console.log(response);
            console.log(response.data);

          var results = response.data;
          for (var i=0; i<results.length; i++){
            var instDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);

                //Original
            var image = $("<img>");
            image.attr("src", results[i].images.fixed_height_still.url);
            //
            var animate =$("<img>")
            animate.attr("src", results[i].images.fixed_height.url);

//if results[i]= "_still.url"{
//image.attr("src", results[i].images.fixed_height.url);
//} ?????
            instDiv.append(p);
            instDiv.append(image);
            // instDiv.append(animate);


            $(".instruments").prepend(instDiv);

                //Test 3.
            $(instDiv).on('click', function(){
              console.log ("tickle me image!");
              instDiv.append(animate);


                  //Test 5. boolean image
            //   if (image === image)
            //     image.attr(animate);
          }); //<--click image


                //Test 2.
              // var animate = $("<img>");
              // image.attr("src", results[i].images.fixed_height.url);
            // }) //<--image click
          // });


          }//<--for loop


              ///try to add an instrument
          // $("#add-instrument").on("click", function(event){
          //   console.log ("submit clicked");
          //   event.preventDefault();
          //   var newInst = $("#instrument-input").val().trim();
          //   results.push(newInst);
          //
            // renderButtons();

          // })//<--input form

       }); //<--.done

    }); //<--button onclick




    // $("#search").on('click', function(){
    //   console.log('the click is on!')
    // });
    //-cowbell
    //-maracas
    //-tamborine
    //-sitar
    //xylophone
    //harp
    //saxophone
    //ukelele
    //theremin
    //gong

//MAIN PROCESS
