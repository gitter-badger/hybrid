###Project Structure
The project structure contains an <code>app</code> folder, with the framework in it, there's a folder <code>app/lib</code> where
the main application is located. A folder for the dependencies is also provided in the app folder under <code>app/lib/deps</code>.
For more information, take a look at the tree below.

```
app/
 |
 +- lib/
 +- deps/
 +- cache/
 +- ui/
 +-
```


###Conventions
All properties in the framework are named after the 'camelCase' princip, where the first letter is lowercased and each new word starts with an uppercased character. 

Classes are named after the 'PascalCase' princip, where the first letter is also uppercased, and the following are named like in the camel case princip.

....

###HTML
The whole framework is based on HTML5, it's permitted to use any HTML version below 5! You can review the list of [new HTML5 Elements](http://www.w3schools.com/html/html5_new_elements.asp) or take a look at the UI documentation.

```html
<!-- Don't do this! -->
<div class="navigation"></div>

<!-- This is the correct way -->
<nav></nav>
```


###Error providing
There should be one global error method, with specific arguments - inherited by the global Error class in the browser window, the **idea** is like this:

```js
minErr('$module', 'status' 'template', "The error {0}!", "message");
// compiling to "$module: The error message! [template:status]"
```


###Adapter Inheritance
There is one global $adapterProvider which will work like an interface in OO Programming languages, every adapter will inherit the default methods from the provider, **idea**:

```js
var $webSqlAdapter = new $adapterProvider(opts);
```


###Offline recognition
If the user is offline, there should be all services provided, which are needed. There should be an adapter for the localstorage which will sync to the master DB when connection is avaible. The framework files and the view of the user should be saved in a <code>manifest</code> file, which we'll generate with a PHP method. UI elements and JS will be cached and compressed into one single file located under <code>cache/</code> and will be renewed on changes in any of the files needed, **idea**:

```js
// When the appstatus goes to 'offline', execute code
myApp.change(myApp.status, 'offline', function($app) {
    alert("Appmode is now " + $app.status);
});
```


###Internal linking
You can use the built in linking method for generating links to the pages in the app, the main benefit is, that the app won't reload at all and you can add serveral parameters or special methods.

> You won't have to use the link tag at all, the styling is also provided for the <code>.anchor</code> class!

```html
<nav>
    <ul>
        <li class="anchor" data-link="myPage">Go to myPage</li>
    </ul>
</nav>
```

###Loading the Framework
Save your views as <code>.html</code> files and if you won't include all the Scripts files manually, call the <code>$requestApp</code> method before the end-tag of your body, like this:

```html
<body>
    <h1>Hello World</h1>
    <p>Content comes here ...</p>
    <script>
        var app = $requestApp('app', function($app) {
            console.log("Loaded the app");
        });
        app.init(); // initialize the app
    </script>
</body>

```
