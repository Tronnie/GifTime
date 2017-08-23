console.log("hola! html and JS are connected")





//GLOBAL VARIABLES
// var instrument = ("");
// var queryURL =  "https://api.giphy.com/v1/gifs/search?api_key=d6ed00ce3a7b4d4cb205f3d20fe6750c&limit=10&q=" + instrument;

//FUNCTIONS
  //various instruments


    //-accordion
    $("button").on('click', function(){
            console.log('the accordion is on!')

      var animal = $(this).attr("data-instrument");
      // var state =$(this).attr("data-state")
      var queryURL =  "https://api.giphy.com/v1/gifs/search?api_key=d6ed00ce3a7b4d4cb205f3d20fe6750c&limit=10&q=" + animal;


      $.ajax ({
              url:queryURL,
              method: "GET"})//<--ajax
       .done(function (response) {
            console.log(queryURL);
            console.log(response);
            console.log(response.data);

          var results = response.data;
          for (var i=0; i<results.length; i++){
            var animalDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var image = $("<img>");
            image.attr("src", results[i].images.fixed_height_still.url);

            animalDiv.append(p);
            animalDiv.append(image);

            $(".instruments").prepend(animalDiv);

            $(image).on('click', function(){
              console.log ("image clicked");
              var animate = $("<img>");
              image.attr("src", results[i].images.fixed_height.url);
            })

          }//<--for loop

          $("#add-instrument").on("click", function(event){
            console.log ("submit clicked");
            event.preventDefault();
            var newInst = $("#instrument-input").val().trim();
            results.push(newInst);

          })//<--input form

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
