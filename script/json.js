$().ready(function(){
    $.getJSON( "/data.json", function( data ) {
    console.log(data);
    $("#text3").html(data["text"]);
  });
});
