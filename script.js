const root = ReactDOM.createRoot(document.getElementById("root"));

function App(){

return React.createElement("div", null,

React.createElement(Nav),

React.createElement(Hero),

React.createElement(Projects),

React.createElement(Contact)

);

}


// NAV

function Nav(){

return React.createElement("nav",

{className:"navbar navbar-dark fixed-top bg-dark px-4"},

React.createElement("span",{className:"navbar-brand"},"Ruby")

);

}


// HERO

function Hero(){

return React.createElement("div",

{className:"text-center text-white vh-100 d-flex flex-column justify-content-center"},

React.createElement("h1",

{style:{fontSize:"70px"}},

"Ruby Omokhafe"

),

React.createElement("p",

{style:{color:"#ff2e63"}},

"Software Developer | Creative Technologist"

),

React.createElement("a",

{

href:"resume.pdf",

className:"btn btn-danger"

},

"Download Resume"

)

);

}


// PROJECTS

function Projects(){

return React.createElement("div",

{className:"container text-white mt-5"},

React.createElement("h2",null,"Projects"),

React.createElement("div",

{className:"row"},


ProjectCard("Drawing App"),

ProjectCard("Map App"),

ProjectCard("Portfolio")

)

);

}


function ProjectCard(name){

return React.createElement("div",

{className:"col-md-4 mt-3"},

React.createElement("div",

{

className:"card bg-dark text-white p-3"

},

React.createElement("h3",null,name),

React.createElement("button",

{className:"btn btn-danger"},

"View Case Study"

)

)

);

}


// CONTACT

function Contact(){

return React.createElement("div",

{className:"container text-white mt-5 mb-5"},

React.createElement("h2",null,"Contact"),

React.createElement("p",null,"Email: ruby@email.com"),

React.createElement("p",null,"GitHub: github.com/rubyomokhafe")

);

}


root.render(React.createElement(App));
