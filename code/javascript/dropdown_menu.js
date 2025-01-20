function toggleDescription(itemId) {
    var description = document.getElementById(itemId);
    if (description.style.display === "none") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}
