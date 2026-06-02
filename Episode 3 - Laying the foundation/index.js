import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reaches the JS ) - PARCEL - Babel
// JSX ==> React.createElement ==> ReactElement-JS Object ==> HTMLElement(render)

// React Element
const Heading = (
    <h1 className="head" tabIndex={5}>
        Namaste React using JSX
    </h1>
);

const elem = <span>React Element</span>


// React Component
// Class Based Component --- Old way (it uses js class)
// Functional Based Component --- New way (it uses js function)

   const title = () => (
 <h1 className="head" tabIndex={5}>
        Namaste React by Akshay Saini
        </h1>
    );

      const Title = () => (
 <h1 className="head" tabIndex={5}>
        Let Start
        </h1>
    );

// React Functional Component

const HeadingComponent = () => (
    <div id="container">
        <title />
        {Title()}
        <Title></Title>
     <h1 className="heading">Namaste React Functional Component</h1>
     </div>
     );   

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Heading);
root.render(<HeadingComponent />);