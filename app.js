import React from "react";
import ReactDOM from "react-dom/client";

// react element 
const eleRac =  (<h1 className="head">this is component composing in react , element</h1>)

//
const Component2 = () =>(<h1 className="head">this is component composing in react, component</h1>)


// React functional component
const HeadingComponent = () =>
(
    <div id="container">
        { eleRac }
        <Component2 />
    <h1 id="heading1"> Namaste react using jsx inside react</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);