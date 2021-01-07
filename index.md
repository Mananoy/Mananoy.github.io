# House Price Dashboard

### About Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for:

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```
- [ ] Item A
- [ ] Item B
- [x] Item C

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

<p title="Oh~ You even hover on me~~"> Hey you find me! <p/>

<pre>
THis is pre! Fuuuuuu
wryyyyyyyyy!
You will see how the js work here:
<pre/>

<div id="text1"></div>
<div id="text2"></div>
<div id="text3"></div>

<!--This time we can put the script tags anywhere we like as the jQuery callback function will be only executed when the DOM is ready. The only limitation is that we need to load our code after we have loaded jQuery itself.-->
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="script/test.js"></script>

<!--The JavaScript code must come at the end so by the time it is executed the DOM is ready. Otherwise the JavaScript code will not find the HTML element.-->
<script>
document.getElementById("text2").innerHTML = "Text added by JavaScript code";
</script>

<!--we would like to get some data from the server. As we cannot run anything on the server we cannot get dynamic data, but we can store the data in JSON files and load them using the Ajax methods provided by jQuery.-->
<!--In the jQuery code we use the getJSON method to fetch the data.json file from the server. This means, first the HTML file that was generated from the Markdown file will be loaded. Then the browser will load jQuery followed by our code. Then, once everything is ready, our code runs and loads the JSON file from the server.
The first parameter of getJSON is the URL of the JSON file we would like to load. The second parameter is an anonymous callback function that will be executed when we get the response from the server. Then the jQuery will call our anonymous function and it will pass the content of the JSON file after it was converted to a JavaScript object.
console.log(data); was only added for debugging.
In the last JQuery code, in $("#text").html(data["text"]); the first part $("#text") will locate the element with the id "text". The html method will set the content of the element to the value we pass to it which in our case is data["text"], the value of the "text" key that arrived from the JSON file.-->
<script src="/json.js"></script>

[To Top](#welcome-to-house-price-dashboard)

[To 404.md](https://mananoy.github.io/pages/404)
