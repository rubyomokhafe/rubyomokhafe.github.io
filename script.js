const text = "Elegant Software Developer";

let index = 0;

function type(){

if(index < text.length){

document.querySelector(".typing").innerHTML += text.charAt(index);

index++;

setTimeout(type,80);

}

}

type();
