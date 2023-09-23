"use strict";
// Create a new div element
var div = document.createElement("div");
// Create a new h1 element
var h1 = document.createElement("h1");
// Create a text node with the text "Hello, world!"
var text = document.createTextNode("Hello, world!");
// Append the text node to the h1 element
h1.appendChild(text);
// Append the h1 element to the div element
div.appendChild(h1);
// Create a new button element
var button = document.createElement("button");
// Set the type attribute of the button to "button"
button.setAttribute("type", "button");
// Create a text node with the text "Click me!"
var buttonText = document.createTextNode("Click me!");
// Append the text node to the button element
button.appendChild(buttonText);
// Append the button element to the div element
div.appendChild(button);
// Append the div element to the document body
document.body.appendChild(div);
