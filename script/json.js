/*
In the jQuery code we use the getJSON method to fetch the data.json file from the server. This means, first the HTML file that was generated from the Markdown file will be loaded. Then the browser will load jQuery followed by our code. Then, once everything is ready, our code runs and loads the JSON file from the server.
The first parameter of getJSON is the URL of the JSON file we would like to load. The second parameter is an anonymous callback function that will be executed when we get the response from the server. Then the jQuery will call our anonymous function and it will pass the content of the JSON file after it was converted to a JavaScript object.
console.log(data); was only added for debugging.
In the last JQuery code, in $("#text").html(data["text"]); the first part $("#text") will locate the element with the id "text". The html method will set the content of the element to the value we pass to it which in our case is data["text"], the value of the "text" key that arrived from the JSON file
*/
$().ready(function(){
    $("#text3").html("before");
    
    $.getJSON( "https://mananoy.github.io/script/data.json", function( data ) {
       $("#text3").html(data["text"]);
    });
    
    /*
    $.getJSON("https://mananoy.github.io/script/data.json").done(function( data ) {
       $("#text3").html(data["text"]);
    });
    */
});
