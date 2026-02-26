const {useState,useEffect}=React;

function Typing(){

const words=["Software Developer","Creative Technologist","UI Engineer"];

const [text,setText]=useState("");

const [index,setIndex]=useState(0);

const [char,setChar]=useState(0);

useEffect(()=>{

if(char<words[index].length){

setTimeout(()=>{

setText(prev=>prev+words[index][char]);

setChar(char+1);

},100);

}

},[char]);

return <div className="typing">{text}</div>

}

function Project({title,img,desc}){

return(

<div className="col-md-4 fade-in">

<div className="glass project">

<img src={img}/>

<h3>{title}</h3>

<p>{desc}</p>

<button className="btn btn-danger"

data-bs-toggle="modal"

data-bs-target="#modal">

View Case Study

</button>

</div>

</div>

)

}

function App(){

useEffect(()=>{

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible")

}

})

})

document.querySelectorAll(".fade-in")

.forEach(el=>observer.observe(el))

},[])

return(

<div>

<nav className="navbar navbar-dark fixed-top px-5">

<span className="navbar-brand">Ruby</span>

</nav>

<section className="hero">

<h1>Ruby Omokhafe</h1>

<Typing/>

<p className="mt-3">

Building immersive digital experiences

</p>

<a href="resume.pdf"

className="btn btn-danger">

Download Resume

</a>

</section>

<section className="container my-5">

<h2>Projects</h2>

<div className="row">

<Project

title="Map App"

img="https://picsum.photos/400/300"

desc="Interactive mapping platform"

/>

<Project

title="Drawing App"

img="https://picsum.photos/401/300"

desc="JavaFX graphics software"

/>

<Project

title="Portfolio"

img="https://picsum.photos/402/300"

desc="Luxury portfolio website"

/>

</div>

</section>

<section className="container my-5 glass">

<h2>Contact</h2>

<p>Email: ruby@email.com</p>

<p>GitHub: github.com/rubyomokhafe</p>

</section>

</div>

)

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
