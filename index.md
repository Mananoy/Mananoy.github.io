<!--css file-->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="style/style1.css">

<!--This is required for icon-->
<script src="https://kit.fontawesome.com/f46a3c561e.js" crossorigin="anonymous"></script>

<!--test for google chart-->
<!--Load the AJAX API-->
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">

<!--Load the Visualization API and the corechart package.-->
google.charts.load('current', {'packages':['corechart']});
<!--Set a callback to run when the Google Visualization API is loaded.-->
google.charts.setOnLoadCallback(drawChart);

<!--Callback that creates and populates a data table, instantiates the pie chart, passes in the data and draws it.-->
function drawChart() {
<!--Create the data table.-->
var data = new google.visualization.DataTable();
data.addColumn('string', 'Topping');
data.addColumn('number', 'Slices');
data.addRows([
   ['Mushrooms', 3],
   ['Onions', 1],
   ['Olives', 1],
   ['Zucchini', 1],
   ['Pepperoni', 2]
]);
<!--Set chart options-->
var options = {'title':'How Much Pizza I Ate Last Night',
               'width':400,
               'height':300};
<!--Instantiate and draw our chart, passing in some options.-->
var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
chart.draw(data, options);
}
</script>
<!--test for google chart-->


<!--test for google map-->
<script defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDcPfC9HmRWGoP4pluFyWh02pCSnPYVqjM&callback=initMap">
</script>
<script>
    let map;
    function initMap() {
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    }
</script>
<!--test for google map-->


<div id="main">
   <nav class="sticky">
      <ul class="menubar">
         <li class="menubar active"><a href="https://mananoy.github.io"><i class="fas fa-home"></i> Home</a></li>
         <li class="menubar"><a href="https://mananoy.github.io/pages/404"><i class="fas fa-house-user"></i> Option2</a></li>
         <li class="menubar"><a href="https://mananoy.github.io/pages/404"><i class="fas fa-archive"></i> Option3</a></li>
         <li class="menubar"><a href="https://mananoy.github.io/pages/404"><i class="fas fa-address-card"></i> Option4</a></li>
      </ul>
   </nav>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   
   <!--Div that will hold the pie chart-->
   <div id="chart_div"></div>
   
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   
   <!--Div that will hold the map-->
   <div id="map" style="overflow: visible;"></div>
   
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <p title="Oh~ You even hover on me~~"> Below are add by different js approaches </p>

   <div style="background-color: PapayaWhip; border:0.2em solid PeachPuff;">
     <div id="text1"></div>
     <div id="text2"></div>
     <div id="text3"></div>
   </div>

   <!--test for loading with js file, jquery, and intext js-->
   <!--load JQuery-->
   <!--<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>-->
   <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
   
   <!--This time we can put the script tags anywhere we like as the jQuery callback function will be only executed when the DOM is ready. The only limitation is that we need to load our code after we have loaded jQuery itself.-->
   <script src="script/test.js"></script>

   <!--we would like to get some data from the server. As we cannot run anything on the server we cannot get dynamic data, but we can store the data in JSON files and load them using the Ajax methods provided by jQuery.-->
   <script src="script/json.js"></script>

   <!--The JavaScript code must come at the end so by the time it is executed the DOM is ready. Otherwise the JavaScript code will not find the HTML element.-->
   <script>
      document.getElementById("text2").innerHTML = "Text added by JavaScript code";
   </script>
   
   <!--This is required for bootstrap for nice button-->
   <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
   <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
   
   <br>
   <div style="text-align: center;">
      <a class="btn btn-primary" href="https://mananoy.github.io/pages/404" role="button">404</a>
   </div>
   
</div>
