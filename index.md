<link rel="stylesheet" type="text/css" href="style/style1.css">
<script src="https://kit.fontawesome.com/f46a3c561e.js" crossorigin="anonymous"></script>

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

[To 404.md](https://mananoy.github.io/pages/404)


<div style="background-color: Grey; border:2px solid SeaShell;">
  <div id="text1"></div>
  <div id="text2"></div>
  <div id="text3"></div>
</div>

<!--This time we can put the script tags anywhere we like as the jQuery callback function will be only executed when the DOM is ready. The only limitation is that we need to load our code after we have loaded jQuery itself.-->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="script/test.js"></script>

<!--we would like to get some data from the server. As we cannot run anything on the server we cannot get dynamic data, but we can store the data in JSON files and load them using the Ajax methods provided by jQuery.-->
<script src="script/json.js"></script>

<!--The JavaScript code must come at the end so by the time it is executed the DOM is ready. Otherwise the JavaScript code will not find the HTML element.-->
<script>
document.getElementById("text2").innerHTML = "Text added by JavaScript code";
</script>

