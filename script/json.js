$().ready(function(){
    $.getJSON( "script/data.json", function( data ) {
    $("#text3").html(data["text"]);
  });
});
