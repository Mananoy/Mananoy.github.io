<!--css file-->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="style/style1.css">

<!--test for google chart-->
<!--Load the AJAX API-->
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">
<!--Load the Visualization API and the corechart package.-->
google.charts.load('current', {'packages':['corechart']});
<!--Draw the line chart for the Spreadsheet when Charts is loaded.-->
google.charts.setOnLoadCallback(drawRentEventCountChart);
google.charts.setOnLoadCallback(drawRentAveragePriceChart);
google.charts.setOnLoadCallback(drawSoldEventCountChart);
google.charts.setOnLoadCallback(drawSoldAveragePriceChart);

<!--Callback that creates and populates a data table, instantiates the pie chart, passes in the data and draws it.-->
function drawRentEventCountChart() {   
   <!--Create a query to spreadsheet.-->
   var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1i4G3n-sSk3A4voH2DCKKIzK7G5PFBwEE6XVZRQRci_g/edit#gid=531570582');
   <!--Set Query-->
   <!--For Rent EventCount-->
   query.setQuery("select B, C where A contains 'Rent EventCount'");
   <!--send query and handle response-->
   query.send(handleQueryResponse);
   <!--handler function-->
   function handleQueryResponse(response) {
     // Called when the query response is returned
     if (response.isError()) {
       alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
       return;
     }
     <!--extract response data-->
     var data = response.getDataTable();
     console.log(data);
     <!--Set chart options-->
     var options = {'title':'Rent EventCount',
                    'width':680,
                    'height':400,
                    pointSize: 5,
                    legend: { position: 'bottom' }
                    };
     <!--Instantiate and draw our chart, passing in some options.-->
     var chart = new google.visualization.LineChart(document.getElementById('RentEventCount_div'));
     chart.draw(data, options);
   }
}
function drawRentAveragePriceChart() {   
   <!--Create a query to spreadsheet.-->
   var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1i4G3n-sSk3A4voH2DCKKIzK7G5PFBwEE6XVZRQRci_g/edit#gid=531570582');
   <!--Set Query-->
   <!--For Rent EventCount-->
   query.setQuery("select B, C where A contains 'Rent AveragePrice'");
   <!--send query and handle response-->
   query.send(handleQueryResponse);
   <!--handler function-->
   function handleQueryResponse(response) {
     // Called when the query response is returned
     if (response.isError()) {
       alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
       return;
     }
     <!--extract response data-->
     var data = response.getDataTable();
     console.log(data);
     <!--Set chart options-->
     var options = {'title':'Rent AveragePrice',
                    'width':680,
                    'height':400,
                    pointSize: 5,
                    legend: { position: 'bottom' }
                    };
     <!--Instantiate and draw our chart, passing in some options.-->
     var chart = new google.visualization.LineChart(document.getElementById('RentAveragePrice_div'));
     chart.draw(data, options);
   }
}
function drawSoldEventCountChart() {   
   <!--Create a query to spreadsheet.-->
   var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1i4G3n-sSk3A4voH2DCKKIzK7G5PFBwEE6XVZRQRci_g/edit#gid=531570582');
   <!--Set Query-->
   <!--For Rent EventCount-->
   query.setQuery("select B, C where A contains 'Sold EventCount'");
   <!--send query and handle response-->
   query.send(handleQueryResponse);
   <!--handler function-->
   function handleQueryResponse(response) {
     // Called when the query response is returned
     if (response.isError()) {
       alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
       return;
     }
     <!--extract response data-->
     var data = response.getDataTable();
     console.log(data);
     <!--Set chart options-->
     var options = {'title':'Sold EventCount',
                    'width':680,
                    'height':400,
                    pointSize: 5,
                    legend: { position: 'bottom' }
                    };
     <!--Instantiate and draw our chart, passing in some options.-->
     var chart = new google.visualization.LineChart(document.getElementById('SoldEventCount_div'));
     chart.draw(data, options);
   }
}
function drawSoldAveragePriceChart() {   
   <!--Create a query to spreadsheet.-->
   var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1i4G3n-sSk3A4voH2DCKKIzK7G5PFBwEE6XVZRQRci_g/edit#gid=531570582');
   <!--Set Query-->
   <!--For Rent EventCount-->
   query.setQuery("select B, C where A contains 'Sold AveragePrice'");
   <!--send query and handle response-->
   query.send(handleQueryResponse);
   <!--handler function-->
   function handleQueryResponse(response) {
     // Called when the query response is returned
     if (response.isError()) {
       alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
       return;
     }
     <!--extract response data-->
     var data = response.getDataTable();
     console.log(data);
     <!--Set chart options-->
     var options = {'title':'Sold AveragePrice',
                    'width':680,
                    'height':400,
                    pointSize: 5,
                    legend: { position: 'bottom' }
                    };
     <!--Instantiate and draw our chart, passing in some options.-->
     var chart = new google.visualization.LineChart(document.getElementById('SoldAveragePrice_div'));
     chart.draw(data, options);
   }
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
      // Set basic params
      var mapOptions = {
          center : new google.maps.LatLng(-25.51237, 133.49844),
          zoom : 5,
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          panControl: false
      };
      // Add Control keys
      if (window.innerWidth > 728) {
           mapOptions.zoomControl = true;
           mapOptions.zoomControlOptions = {
               position: google.maps.ControlPosition.RIGHT_BOTTOM
           };
           mapOptions.streetViewControl = true;
           mapOptions.mapTypeControl = true;
           mapOptions.mapTypeControlOptions = {
               position: google.maps.ControlPosition.LEFT_BOTTOM
           };
      }
      // set map height
      document.getElementById("map_canvas").style.height = (window.innerHeight - 110).toString() + "px"
      // Show map
      map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
      // Load boundary data and set style
      map.data.loadGeoJson('script/features-1.json', {}, function() {});
      map.data.loadGeoJson('script/features-2.json', {}, function() {});
      map.data.loadGeoJson('script/features-3.json', {}, function() {});
      map.data.loadGeoJson('script/features-4.json', {}, function() {});
      map.data.loadGeoJson('script/features-5.json', {}, function() {});
      map.data.loadGeoJson('script/features-6.json', {}, function() {});
      map.data.loadGeoJson('script/features-7.json', {}, function() {});
      map.data.loadGeoJson('script/features-8.json', {}, function() {});
      map.data.setStyle({fillOpacity: 0.0, strokeWeight: 1, strokeColor: 'lightslategrey'});
      // Link Event to Functions
      map.data.addListener('click', function(event) {
         selectSuburb(event.feature);
      });
    }
    // Handle selection
    function selectSuburb(feature) {
      map.data.revertStyle();
      map.data.overrideStyle(feature, {fillOpacity: 0.1, fillColor: 'red'});
      // Handle different naming
      function capitalizeFirstLetter(str) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you
            // Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        // Directly return the joined string
        return splitStr.join(' '); 
      }
      suburb_name = feature.getProperty("name");
      suburb_name = capitalizeFirstLetter(suburb_name);
      document.getElementById('selected_suburb_name').innerHTML = suburb_name;
      //        
      //
      //
      //        
      //
      //
      // change data here
      updateRentEventCountChart(suburb_name);
      updateRentAveragePriceChart(suburb_name);
      updateSoldEventCountChart(suburb_name);
      updateSoldAveragePriceChart(suburb_name);
      function build_array()
      {
          var list = [];
          var count = 0;
          var lock = false;
          for ( var counter1 = 0; counter1 < 26; counter1++)
          {
              for ( var counter2 = 0; counter2 < 26; counter2++)
              {
                  for ( var counter3 = 0; counter3 < 26; counter3++)
                  {
                      var value= ""
                      if (counter1 != 0)
                      {
                          value = String.fromCharCode(counter1+64);
                      }
                      if ( (counter1 != 0 || counter2 == 0) && lock == true)
                      {
                          value = value + String.fromCharCode(counter2+65);
                      }
                      else if (counter1 != 0 || counter2 != 0)
                      {
                          value = value + String.fromCharCode(counter2+64);
                      }
                      if(counter3 == 25){
                          lock = true;
                      }
                      value = value + String.fromCharCode(counter3+65);
                      list[count] = value;
                      count = count + 1;
                  }
              }
          }
          return list;
      }        
      function mapper(array, suburb_name){
         $.getJSON( "https://mananoy.github.io/script/Suburb.json", function( data ) {
            var index = 2;
            $.each(data, function(key, value) {
                value.id = array[index];
                index = index + 1;
            });
            console.log("map produced in mapper:");
            console.log(data);
            place = data.suburb_name.id
            return place;
         });
      };
      function updateRentEventCountChart(suburb_name){
         //First we need the place of the surburb for query
         var array = build_array();
         console.log("array:");
         console.log(array);
         var place = mapper(array, suburb_name);
         console.log("place:");
         console.log(place);
         if (place == undefined)
         {
            alert("No data found for " + suburb_name);
            return;
         }
         /*
         //Create a query to spreadsheet for the data
         var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1uL0NIY6LZwEVJ4A-QjQVhboYzHM2DPFJJPv7aqvdqds/edit#gid=0');
         //Set Query
         var Que = "select B, " + str + " where A contains 'Rent EventCount'";
         <!--send query and handle response-->
         query.send(handleQueryResponse);
         <!--handler function-->
         function handleQueryResponse(response) {
           // Called when the query response is returned
           if (response.isError()) {
             alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
             return;
           }
           <!--extract response data-->
           var data = response.getDataTable();
           console.log(data);
           <!--Set chart options-->
           var options = {'title':'Rent EventCount',
                          'width':680,
                          'height':400,
                          pointSize: 5,
                          legend: { position: 'bottom' }
                          };
           <!--Instantiate and draw our chart, passing in some options.-->
           var chart = new google.visualization.LineChart(document.getElementById('RentEventCount_div'));
           chart.draw(data, options);
         }
         */
      };
      function updateRentAveragePriceChart(suburb_name){};
      function updateSoldEventCountChart(suburb_name){};
      function updateSoldAveragePriceChart(suburb_name){};
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
   <!--Div that will hold the map-->
   <div id="map_canvas"></div>
   
   <!--display suburb name-->
   <h2 id="selected_suburb_name" text-align="center">Braidwood</h2>
   
   <!--Div that will hold the pie chart-->
   <!--Table and divs that hold the pie charts-->
   <table class="columns">
     <tr>
       <td><div id="RentEventCount_div" style="border: 1px solid #ccc"></div></td>
       <td><div id="RentAveragePrice_div" style="border: 1px solid #ccc"></div></td>
     </tr>
   </table>
   <table class="columns">
     <tr>
       <td><div id="SoldEventCount_div" style="border: 1px solid #ccc"></div></td>
       <td><div id="SoldAveragePrice_div" style="border: 1px solid #ccc"></div></td>
     </tr>
   </table>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <p title="You hover on me~"> Below are add by different js approaches </p>

   <div style="background-color: PapayaWhip; border:0.2em solid PeachPuff;">
     <div id="text1"></div>
     <div id="text2"></div>
     <div id="text3"></div>
   </div>

   <br>
   <div style="text-align: center;">
      <a class="btn btn-primary" href="https://mananoy.github.io/pages/404" role="button">404</a>
   </div>



   <!--test for loading with js file, jquery, and intext js-->
   <!--load JQuery-->
   <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
   
   <!--This time we can put the script tags anywhere we like as the jQuery callback function will be only executed when the DOM is ready. The only limitation is that we need to load our code after we have loaded jQuery itself.-->
   <script src="script/test.js"></script>

   <!--we would like to get some data from the server. As we cannot run anything on the server we cannot get dynamic data, but we can store the data in JSON files and load them using the Ajax methods provided by jQuery.-->
   <script src="script/json.js"></script>
   
   <!--script for jquery-->
   <script src="script/test.js"></script>
   
   <!--This is required for icon-->
   <script src="https://kit.fontawesome.com/f46a3c561e.js" crossorigin="anonymous"></script>
   <!--This is required for bootstrap-->
   <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
   <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
   
</div>
