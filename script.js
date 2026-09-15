```javascript
// script.js

// Display a welcome message when the page loads
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");

    // Find the button and message elements
    const button = document.getElementById("myButton");
    const message = document.getElementById("message");

    // Add a click event to the button
    if (button && message) {
        button.addEventListener("click", function () {
            message.textContent = "Hello! You clicked the button.";
        });
    }
});
```

To connect it to your **`index.html`**, add this before the closing `</body>` tag:

```html
<script src="script.js"></script>
```

And your HTML can contain:

```html
<button id="myButton">Click Me</button>
<p id="message"></p>
```

If you're building the website from your previous request, I can also create the **complete `index.html + style.css + script.js` website files** for you.
