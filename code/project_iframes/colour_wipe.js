document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll(".project");

    projects.forEach(project => {
        project.addEventListener("mouseenter", function() {
            document.documentElement.style.setProperty('--i', '-200px');
        });

        project.addEventListener("mouseleave", function() {
            document.documentElement.style.setProperty('--i', '0px');
        });
    });
});

