//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red"
};

const date = new Date();
var text = "Good morning";
var curHours = date.getHours();

if (curHours > 12 && curHours < 18) {
  text = "Good Afternoon";
  customStyle.color = "green";
} else if (curHours > 18) {
  text = "Good evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 class="heading" style={customStyle}>
    {text}
  </h1>,
  document.getElementById("root")
);
