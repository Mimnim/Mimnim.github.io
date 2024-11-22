document.addEventListener("DOMContentLoaded", loadMenu);

let menu_text = "<h1 class = 'heading right'><a href='index.html'>Home</a></h1>" +
                "<h1 class = 'heading right'><a href='projects.html'>Projects</a></h1>" +
                "<h1 class = 'heading right'><a class='link-button' href='https://www.upwork.com/freelancers/~011c5bf8a4be4c9149?mp_source=share'>Upwork</a></h1>";

function loadMenu(){
    document.getElementById("menu").innerHTML = menu_text;
}

