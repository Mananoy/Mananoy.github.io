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
          center : new google.maps.LatLng(-35.34253036, 149.81762754),
          zoom : 10,
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
      map.data.loadGeoJson('script/features-8.json', {}, function() {
         // initialise Braindwood as selected
         feat = map.data.getFeatureById('ckan_91e70237_d9d1_4719_a82f_e71b811154c6.766');
         feat.setProperty("selected", true);
         map.data.overrideStyle(feat, {fillOpacity: 0.1, fillColor: 'blue'});
      });
      map.data.setStyle({fillOpacity: 0.0, strokeWeight: 1, strokeColor: 'lightslategrey'});
      // Link Event to Functions
      map.data.addListener('click', function(event) {
         selectSuburb(event.feature);
         map.panTo(event.latLng);
      });
      map.data.addListener("mouseover", (event) => {
         if (!event.feature.getProperty("selected"))
         {
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
            suburb_name = event.feature.getProperty("name");
            suburb_name = capitalizeFirstLetter(suburb_name);
            $.getJSON( "https://mananoy.github.io/script/Suburb2019.json", function( data ) {
               validity = false;
               $.each(data, function(key, value) {
                   if (key.includes(suburb_name))
                   {
                      map.data.overrideStyle(event.feature, { fillOpacity: 0.1, fillColor: 'chartreuse', strokeWeight: 3 });
                      validity = true;
                      return;
                   }
               });
               if (validity == false) 
               {
                  map.data.overrideStyle(event.feature, { clickable: false });
               }
            });
         }
         return;
      });
      map.data.addListener("mouseout", (event) => {
         if (!event.feature.getProperty("selected"))
         {
            map.data.overrideStyle(event.feature, {fillOpacity: 0.0, strokeWeight: 1});  
         }
      });
    }
    //
    // Handle selection
    function selectSuburb(feature) {
      map.data.revertStyle();
      map.data.forEach(function selectSuburb(feature){
         feature.removeProperty("selected");
      })
      feature.setProperty("selected", true);
      map.data.overrideStyle(feature, {fillOpacity: 0.1, fillColor: 'blue'});
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
      updateChart(suburb_name);
    }
    //        
    //
    //
    //        
    //
    //
    // change data here
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
                // bug fix
                if (counter2 == 25 && counter1 == 0)
                {
                   for ( var counter3 = 0; counter3 < 26; counter3++)
                   {
                       var value= "";
                       value = value + String.fromCharCode(counter2+65);
                       value = value + String.fromCharCode(counter3+65);
                       list[count] = value;
                       count = count + 1;
                   }
                }
            }
        }
        return list;
    }
    function updateChart(suburb_name){
       //First we need the place of the surburb for query
       var array = build_array();
       //console.log("array:");
       //console.log(array);
       $.getJSON( "https://mananoy.github.io/script/Suburb2019.json", function( data ) {
          var index = 2;
          var place = " ";
          $.each(data, function(key, value) {
              value.id = array[index];
              index = index + 1;
          });
          console.log("map produced in mapper:");
          console.log(data);
          $.each(data, function(key, value) {
              if (key.includes(suburb_name))
              {
                 console.log("found in map with id:");
                 place = value.id
                 console.log(place);
              }
          });
          if (place == " ")
          {
             alert("No data found for " + suburb_name);
             return;
          }
          //
          //
          //
          drawRentEventCountChart();
          drawRentAveragePriceChart();
          drawSoldEventCountChart();
          drawSoldAveragePriceChart();
          //
          // We now have the id, Create a query to spreadsheet for the data
          function drawRentEventCountChart(){
             var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1i4G3n-sSk3A4voH2DCKKIzK7G5PFBwEE6XVZRQRci_g/edit#gid=531570582');
             // Set Query
             query.setQuery("select B, " + place + " where A contains 'Rent EventCount'");
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
               // check data
               for (i=0; i<data.getNumberOfRows(); i++)
               {
                  //console.log(data.getValue(i, 1));
                  if(data.getValue(i, 1) == "None")
                  {
                     data.insertColumn(1, 'number', data.getColumnLabel(1));
                     // copy values from column 2 (old column 1) to column 1, converted to numbers
                     for (var i = 0; i < data.getNumberOfRows(); i++) {
                         var val = data.getValue(i, 2);
                         if (val != '' && val != null) {
                             data.setValue(i, 1, new Number(val).valueOf());
                         }
                         else if (val == "None"){
                             data.setValue(i, 1, new Number(null).valueOf());
                         }
                     }
                     // remove column 2 (the old column 1)
                     data.removeColumn(2);
                     break;
                  }
               }
               console.log(data);
               <!--Set chart options-->
               var options = {'title':'Rent EventCount',
                              'width':680,
                              'height':400,
                              pointSize: 5,
                              legend: { position: 'bottom' },
                              interpolateNulls: true
                              };
               <!--Instantiate and draw our chart, passing in some options.-->
               var chart = new google.visualization.LineChart(document.getElementById('RentEventCount_div'));
               chart.draw(data, options);
             }
          }
          function drawRentAveragePriceChart(){
             <!--Create a query to spreadsheet.-->
             var query2 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1i4G3n-sSk3A4voH2DCKKIzK7G5PFBwEE6XVZRQRci_g/edit#gid=531570582');
             <!--Set Query-->
             <!--For Rent EventCount-->
             query2.setQuery("select B, " + place + " where A contains 'Rent AveragePrice'");
             <!--send query and handle response-->
             query2.send(handleQueryResponse);
             <!--handler function-->
             function handleQueryResponse(response) {
               // Called when the query response is returned
               if (response.isError()) {
                 alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
                 return;
               }
               <!--extract response data-->
               var data2 = response.getDataTable();
               // check data
               for (i=0; i<data2.getNumberOfRows(); i++)
               {
                  //console.log(data2.getValue(i, 1));
                  if(data2.getValue(i, 1) == "None")
                  {
                     data2.insertColumn(1, 'number', data2.getColumnLabel(1));
                     // copy values from column 2 (old column 1) to column 1, converted to numbers
                     for (var i = 0; i < data2.getNumberOfRows(); i++) {
                         var val = data2.getValue(i, 2);
                         if (val != '' && val != null) {
                             data2.setValue(i, 1, new Number(val).valueOf());
                         }
                         else if (val == "None"){
                             data2.setValue(i, 1, new Number(null).valueOf());
                         }
                     }
                     // remove column 2 (the old column 1)
                     data2.removeColumn(2);
                     break;      
                  }
               }
               console.log(data2);
               <!--Set chart options-->
               var options = {'title':'Rent AveragePrice',
                              'width':680,
                              'height':400,
                              pointSize: 5,
                              legend: { position: 'bottom' },
                              interpolateNulls: true
                              };
               <!--Instantiate and draw our chart, passing in some options.-->
               var chart2 = new google.visualization.LineChart(document.getElementById('RentAveragePrice_div'));
               chart2.draw(data2, options);
             }
          }
          function drawSoldEventCountChart(){
             <!--Create a query to spreadsheet.-->
             var query3 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1i4G3n-sSk3A4voH2DCKKIzK7G5PFBwEE6XVZRQRci_g/edit#gid=531570582');
             <!--Set Query-->
             <!--For Rent EventCount-->
             query3.setQuery("select B, " + place + " where A contains 'Sold EventCount'");
             <!--send query and handle response-->
             query3.send(handleQueryResponse);
             <!--handler function-->
             function handleQueryResponse(response) {
               // Called when the query response is returned
               if (response.isError()) {
                 alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
                 return;
               }
               <!--extract response data-->
               var data3 = response.getDataTable();
               // check data
               for (i=0; i<data3.getNumberOfRows(); i++)
               {
                  //console.log(data3.getValue(i, 1));
                  if(data3.getValue(i, 1) == "None")
                  {
                     data3.insertColumn(1, 'number', data3.getColumnLabel(1));
                     // copy values from column 2 (old column 1) to column 1, converted to numbers
                     for (var i = 0; i < data3.getNumberOfRows(); i++) {
                         var val = data3.getValue(i, 2);
                         if (val != '' && val != null) {
                             data3.setValue(i, 1, new Number(val).valueOf());
                         }
                         else if (val == "None"){
                             data3.setValue(i, 1, new Number(null).valueOf());
                         }
                     }
                     // remove column 2 (the old column 1)
                     data3.removeColumn(2);
                     break;    
                  }
               }
               console.log(data3);
               <!--Set chart options-->
               var options = {'title':'Sold EventCount',
                              'width':680,
                              'height':400,
                              pointSize: 5,
                              legend: { position: 'bottom' },
                              interpolateNulls: true
                              };
               <!--Instantiate and draw our chart, passing in some options.-->
               var chart3 = new google.visualization.LineChart(document.getElementById('SoldEventCount_div'));
               chart3.draw(data3, options);
             }
          }
          function drawSoldAveragePriceChart(){
             <!--Create a query to spreadsheet.-->
             var query4 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1i4G3n-sSk3A4voH2DCKKIzK7G5PFBwEE6XVZRQRci_g/edit#gid=531570582');
             <!--Set Query-->
             <!--For Rent EventCount-->
             query4.setQuery("select B, " + place + " where A contains 'Sold AveragePrice'");
             <!--send query and handle response-->
             query4.send(handleQueryResponse);
             <!--handler function-->
             function handleQueryResponse(response) {
               // Called when the query response is returned
               if (response.isError()) {
                 alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
                 return;
               }
               <!--extract response data-->
               var data4 = response.getDataTable();
               // check data
               for (i=0; i<data4.getNumberOfRows(); i++)
               {
                  //console.log(data4.getValue(i, 1));
                  if(data4.getValue(i, 1) == "None")
                  {
                     data4.insertColumn(1, 'number', data4.getColumnLabel(1));
                     // copy values from column 2 (old column 1) to column 1, converted to numbers
                     for (var i = 0; i < data4.getNumberOfRows(); i++) {
                         var val = data4.getValue(i, 2);
                         if (val != '' && val != null) {
                             data4.setValue(i, 1, new Number(val).valueOf());
                         }
                         else if (val == "None"){
                             data4.setValue(i, 1, new Number(null).valueOf());
                         }
                     }
                     // remove column 2 (the old column 1)
                     data4.removeColumn(2);
                     break;
                  }
               }
               console.log(data4);
               <!--Set chart options-->
               var options = {'title':'Sold AveragePrice',
                              'width':680,
                              'height':400,
                              pointSize: 5,
                              legend: { position: 'bottom' },
                              interpolateNulls: true
                              };
               <!--Instantiate and draw our chart, passing in some options.-->
               var chart4 = new google.visualization.LineChart(document.getElementById('SoldAveragePrice_div'));
               chart4.draw(data4, options);
             }
          }
       });
    };
    //
    //
    //
    //
    //
    //
    function change_date(str){
      // we nned to get the place
      var suburb_name = document.getElementById('selected_suburb_name').innerHTML;
      console.log("name:");
      console.log(suburb_name);
      console.log("str:");
      console.log(str);
      //First we build an array
      var array = build_array();
      console.log("array:");
      console.log(array);
      // now we get the suburb list
      var place2019 = " ";
      var place2018 = " ";
      var place2017 = " ";
      var place2016 = " ";
      var place2015 = " ";
      var place2014 = " ";
      var place2013 = " ";
      var place2012 = " ";
      var place2011 = " ";
      var place2010 = " ";
      // 2019
      $.getJSON( "https://mananoy.github.io/script/Suburb2019.json", function( data ) {
         var index = 2;
         $.each(data, function(key, value) {
             value.id = array[index];
             index = index + 1;
         });
         console.log("map 2019 produced in mapper:");
         console.log(data);
         $.each(data, function(key, value) {
             if (key.includes(suburb_name))
             {
                console.log("found in map with id:");
                place2019 = value.id
                console.log(place2019);
             }
         });
         if (place2019 == " ")
         {
            alert("No 2019 data found for " + suburb_name);
            return;
         }
      });
      // 2018
      $.getJSON( "https://mananoy.github.io/script/Suburb2018.json", function( data ) {
         var index = 2;
         $.each(data, function(key, value) {
             value.id = array[index];
             index = index + 1;
         });
         console.log("map 2018 produced in mapper:");
         console.log(data);
         $.each(data, function(key, value) {
             if (key.includes(suburb_name))
             {
                console.log("found in map with id:");
                place2018 = value.id
                console.log(place2018);
             }
         });
         if (place2018 == " ")
         {
            alert("No 2018 data found for " + suburb_name);
            return;
         }
      });
      // 2017
      $.getJSON( "https://mananoy.github.io/script/Suburb2017.json", function( data ) {
         var index = 2;
         $.each(data, function(key, value) {
             value.id = array[index];
             index = index + 1;
         });
         console.log("map 2017 produced in mapper:");
         console.log(data);
         $.each(data, function(key, value) {
             if (key.includes(suburb_name))
             {
                console.log("found in map with id:");
                place2017 = value.id
                console.log(place2017);
             }
         });
         if (place2017 == " ")
         {
            alert("No 2017 data found for " + suburb_name);
            return;
         }
      });
      // 2016
      $.getJSON( "https://mananoy.github.io/script/Suburb2016.json", function( data ) {
         var index = 2;
         $.each(data, function(key, value) {
             value.id = array[index];
             index = index + 1;
         });
         console.log("map 2016 produced in mapper:");
         console.log(data);
         $.each(data, function(key, value) {
             if (key.includes(suburb_name))
             {
                console.log("found in map with id:");
                place2016 = value.id
                console.log(place2016);
             }
         });
         if (place2016 == " ")
         {
            alert("No 2016 data found for " + suburb_name);
            return;
         }
      });
      // 2015
      $.getJSON( "https://mananoy.github.io/script/Suburb2015.json", function( data ) {
         var index = 2;
         $.each(data, function(key, value) {
             value.id = array[index];
             index = index + 1;
         });
         console.log("map 2015 produced in mapper:");
         console.log(data);
         $.each(data, function(key, value) {
             if (key.includes(suburb_name))
             {
                console.log("found in map with id:");
                place2015 = value.id
                console.log(place2015);
             }
         });
         if (place2015 == " ")
         {
            alert("No 2015 data found for " + suburb_name);
            return;
         }
      });
      // 2014
      $.getJSON( "https://mananoy.github.io/script/Suburb2014.json", function( data ) {
         var index = 2;
         $.each(data, function(key, value) {
             value.id = array[index];
             index = index + 1;
         });
         console.log("map 2014 produced in mapper:");
         console.log(data);
         $.each(data, function(key, value) {
             if (key.includes(suburb_name))
             {
                console.log("found in map with id:");
                place2014 = value.id
                console.log(place2014);
             }
         });
         if (place2014 == " ")
         {
            alert("No 2014 data found for " + suburb_name);
            return;
         }
      });
      // 2013
      $.getJSON( "https://mananoy.github.io/script/Suburb2013.json", function( data ) {
         var index = 2;
         $.each(data, function(key, value) {
             value.id = array[index];
             index = index + 1;
         });
         console.log("map 2013 produced in mapper:");
         console.log(data);
         $.each(data, function(key, value) {
             if (key.includes(suburb_name))
             {
                console.log("found in map with id:");
                place2013 = value.id
                console.log(place2013);
             }
         });
         if (place2013 == " ")
         {
            alert("No 2013 data found for " + suburb_name);
            return;
         }
      });
      // 2012
      $.getJSON( "https://mananoy.github.io/script/Suburb2012.json", function( data ) {
         var index = 2;
         $.each(data, function(key, value) {
             value.id = array[index];
             index = index + 1;
         });
         console.log("map 2012 produced in mapper:");
         console.log(data);
         $.each(data, function(key, value) {
             if (key.includes(suburb_name))
             {
                console.log("found in map with id:");
                place2012 = value.id
                console.log(place2012);
             }
         });
         if (place2012 == " ")
         {
            alert("No 2012 data found for " + suburb_name);
            return;
         }
      });
      // 2011
      $.getJSON( "https://mananoy.github.io/script/Suburb2011.json", function( data ) {
         var index = 2;
         $.each(data, function(key, value) {
             value.id = array[index];
             index = index + 1;
         });
         console.log("map 2011 produced in mapper:");
         console.log(data);
         $.each(data, function(key, value) {
             if (key.includes(suburb_name))
             {
                console.log("found in map with id:");
                place2011 = value.id
                console.log(place2011);
             }
         });
         if (place2011 == " ")
         {
            alert("No 2011 data found for " + suburb_name);
            return;
         }
      });
      // 2010
      $.getJSON( "https://mananoy.github.io/script/Suburb2010.json", function( data ) {
         var index = 2;
         $.each(data, function(key, value) {
             value.id = array[index];
             index = index + 1;
         });
         console.log("map 2010 produced in mapper:");
         console.log(data);
         $.each(data, function(key, value) {
             if (key.includes(suburb_name))
             {
                console.log("found in map with id:");
                place2010 = value.id
                console.log(place2010);
             }
         });
         if (place2010 == " ")
         {
            alert("No 2010 data found for " + suburb_name);
            return;
         }
         /*
         console.log("place2019: ");
         console.log(place2019);
         console.log("place2018: ");
         console.log(place2018);
         console.log("place2017: ");
         console.log(place2017);
         console.log("place2016: ");
         console.log(place2016);
         console.log("place2015: ");
         console.log(place2015);
         console.log("place2014: ");
         console.log(place2014);
         console.log("place2013: ");
         console.log(place2013);
         console.log("place2012: ");
         console.log(place2012);
         console.log("place2011: ");
         console.log(place2011);
         console.log("place2010: ");
         console.log(place2010);
         */
         //
         // prepare for query
         // 2019: https://docs.google.com/spreadsheets/d/1i4G3n-sSk3A4voH2DCKKIzK7G5PFBwEE6XVZRQRci_g/edit#gid=531570582
         // 2018: https://docs.google.com/spreadsheets/d/1S3dR1tc61lfRZCq1vT1-thZF-D1jEXPyIG9zj1OXD5s/edit#gid=1187331731
         // 2017: https://docs.google.com/spreadsheets/d/1ljxOszGC8yWhG_DqveGBtfOW6xt91ajONE5NiyGddkc/edit#gid=1078369128
         // 2016: https://docs.google.com/spreadsheets/d/1zk82_ZQMoxvj75BSxjOY6hO6kduOOG4i3izuIo9P4bc/edit#gid=1331133136
         // 2015: https://docs.google.com/spreadsheets/d/1--9F_5QceNX51tHtOSGm4JOmN1M39jq_hcFZ6wtoJJA/edit#gid=72003855
         // 2014: https://docs.google.com/spreadsheets/d/1l_Ma6QsqytRAG9fkzuVUsq2Bp5-HXAKEaOQpR7-Bq3E/edit#gid=293612783
         // 2013: https://docs.google.com/spreadsheets/d/1tGwUMJAnBHnf0LwN1hR2_e2ueJY4r4ezyHQYqsOt5BE/edit#gid=593572366
         // 2012: https://docs.google.com/spreadsheets/d/1QAzU_fds7qiXjVMzHwdpwukrusL_y0zHosL0_PLawNE/edit#gid=1415192241
         // 2011: https://docs.google.com/spreadsheets/d/1dDMefA5kppqLKb7VbTImhSQGMNvJpLtys-tS3FVYPiE/edit#gid=956444414
         // 2010: https://docs.google.com/spreadsheets/d/18oUAi9Hz62GAjWLJiNnKSKbNY9YONhjKBg3J_9bR5tM/edit#gid=359162479
         //
         //
         //
         //
         /*
         function drawRentEventCountChart(){
            var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1i4G3n-sSk3A4voH2DCKKIzK7G5PFBwEE6XVZRQRci_g/edit#gid=531570582');
            // Set Query
            query.setQuery("select B, " + place + " where A contains 'Rent EventCount'");
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
              // check data
              for (i=0; i<data.getNumberOfRows(); i++)
              {
                 //console.log(data.getValue(i, 1));
                 if(data.getValue(i, 1) == "None")
                 {
                    data.insertColumn(1, 'number', data.getColumnLabel(1));
                    // copy values from column 2 (old column 1) to column 1, converted to numbers
                    for (var i = 0; i < data.getNumberOfRows(); i++) {
                        var val = data.getValue(i, 2);
                        if (val != '' && val != null) {
                            data.setValue(i, 1, new Number(val).valueOf());
                        }
                        else if (val == "None"){
                            data.setValue(i, 1, new Number(null).valueOf());
                        }
                    }
                    // remove column 2 (the old column 1)
                    data.removeColumn(2);
                    break;
                 }
              }
              console.log(data);
              <!--Set chart options-->
              var options = {'title':'Rent EventCount',
                             'width':680,
                             'height':400,
                             pointSize: 5,
                             legend: { position: 'bottom' },
                             interpolateNulls: true
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
         if (str == "6m"){
            
         }
         else if (str == "1y"){

         }
         else if (str == "5y"){

         }
         else if (str == "10y"){

         }
         */
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
   <!--Div that will hold the map-->
   <div id="map_canvas"></div>
   
   <!--display suburb name-->
   <h2 id="selected_suburb_name" style="text-align: center">Braidwood</h2>
   <div style="text-align: center; color: white;">
      <a class="btn btn-primary" onclick="change_date('6m')" role="button">6m</a>
   </div>
   
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
