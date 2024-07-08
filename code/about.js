function AboutMe(){
    fetch('/content/aboutme.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById("AboutMe").innerText = data;
        })
        .catch(error => console.error('Error:', error));
}

document.addEventListener("DOMContentLoaded", AboutMe);