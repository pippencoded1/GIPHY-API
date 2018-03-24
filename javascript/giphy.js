

$(function(){
    //jquery selector, on method, argument//
    //A METHOD IS A FUNCTION ON AN OBJECT USE .functionName() TO RUN IT
    // AN ARRAY IS A COLLECTION USE [] TO ACCES AN ITEM ON THE COLLECTION
    // AN OBJECT IS A 'THING' ALL THINGS HAVE PROPERTIES (KEYS) TO ACCES ONES VALUE, USE   .keyName
    $("button").on("click", function(){
        var music= $(this).attr("data-music");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + music + "&api_key=ljM1nasPTjd9ub73CYaH8ITuJpVdhKNN&tag=&rating=G";
        $.get( queryURL, function( data ) {
            for (var i = 0; i< data.data.length; i++){
                console.log()
                var imgUrl =  data.data[i].images.original.url
                $('#gifs').prepend('<img src=' + imgUrl +' alt="gif"/>' )
            }
        });
    })
})
var topics= ["Rap", "Hip Hop", "Jazz","Country","Gospel","Soul"]

// for (var i = 0; i< topics.length; i++){


// .append(topics[0])

// var music= $(this).attr("data-music");
// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + music + "&api_key=ljM1nasPTjd9ub73CYaH8ITuJpVdhKNN&tag=&rating=G";


// $.ajax({
//     url:queryURL,
//     method: "GET"  
// }).then(function(response){

// },
// $(this).find(".nextbutton").on("click", function(){



// }
