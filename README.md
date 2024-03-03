<h1>hxjson</h1>

**This may be XSS vulnerable if used with untrusted API or unsanitized HTML until I find an efficient way to handle this issue take Notice and use `safe` attribute in your tag if you trust the response data or you can add your own sanitizer**

is very light and easy to use
<h2>How to use it</h2>
<p>
  example
  <p>Json from server</p>
  <pre>
    {
   "1":[
      {
         "name":{
            "first":"joe",
            "last":"dany"
         },
         "place":"Asyut"
      },
      {
         "name":{
            "first":"<script>alert('Hi')</script>",
            "last":"tomas"
         },
         "place":"Cairo"
      }
   ]
}
  </pre>
  <p>Your front end</p>
  
    ```
    <button
      hx-get="{% url 'home:homepage' %}?data"
      hx-target=".response"
      hx-swap="none"
      hxjson
    >
      Retrive Json
    </button>
    <div class="response">
      <div>
        <p jsondata="1.0.name.first">i am first name</p>
        <p jsondata="1.0.name.last">i am last name</p>
        <p jsondata="1.0.place">i am place</p>
      </div>
      <div>
        <p jsondata="1.1.name.first" safe>i am first name</p>
        <p jsondata="1.1.name.last">i am last name</p>
        <p jsondata="1.1.place">i am place</p>
      </div>
    </div>
    ```
  </code>
  </p>
  you need to import HTMX as usual then
  
  As you can see all you have to do is add `hxjson` to the element that makes the request and specify `hx-swap="none"`
  Then you add jsondata to any element and index your JSON response like shown in the example above from within 
  your specified `hx-target`
