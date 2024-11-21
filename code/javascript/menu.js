document.addEventListener("DOMContentLoaded", loadMenu);

function loadMenu(){
    document.getElementById("menu").innerHTML = "<h1 class = 'heading right'><a href='index.html'>Home</a></h1> <h1 class = 'heading right'><a href='projects.html'>Projects</a></h1><button type='button' onclick='window.location.href='https://w3docs.com';'>Click Me!</button>";
}

