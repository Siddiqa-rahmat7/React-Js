// ReactElement(object) => HTML(Browser Understands)

// Nesting 

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },[
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm a h2 tag")
    ]),
    React.createElement(
        "div",
        { id: "child2" },[
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm a h2 tag")
    ]),
);

console.log(parent);   //object
const root = ReactDOM.createRoot(document.getElementById("header"));

root.render(parent);

// Simple react code

/*const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Hello World from React");

console.log(heading);  //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); */