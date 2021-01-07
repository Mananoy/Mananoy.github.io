$().ready(function(){
    $.getJSON( "/data.json", function( data ) {
    $("#text3").html(data["text"]);
  });
});
