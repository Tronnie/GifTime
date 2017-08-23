console.log("hola! we are documents are connected")

$("#search").on('click', function(){
  console.log('the click is on!')
});



//GLOBAL VARIABLES
var instrument = ("");
var queryURL =  "https://api.giphy.com/v1/gifs/search?api_key=d6ed00ce3a7b4d4cb205f3d20fe6750c&q=" + instrument;

//FUNCTIONS
  //various instruments

    //-accordion
    $("#accordion").on('click', function(){
            console.log('the accordion is on!')
      $.ajax ({
              url:"https://api.giphy.com/v1/gifs/search?api_key=d6ed00ce3a7b4d4cb205f3d20fe6750c&q=accordion", 
              method: "GET"})
       .done(function (response){
            console.log(response);
       });
    });
    //-cowbell
    //-maracas
    //-tamborine
    //-sitar
    //xylophone
    //harp
    //saxophone
    //slideguitar
    //theremin
    //gong

//MAIN PROCESS
