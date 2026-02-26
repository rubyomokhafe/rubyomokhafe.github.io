const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {

return React.createElement(

"div",

{ className: "container text-center text-white mt-5" },

React.createElement("h1", null, "Ruby Omokhafe"),

React.createElement("p", null, "Luxury Cherry Red Portfolio")

);

}

root.render(React.createElement(App));
