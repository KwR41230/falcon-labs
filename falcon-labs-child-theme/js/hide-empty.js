document.addEventListener("DOMContentLoaded", function() {
    console.log("Hide empty script loaded");
    var elements = document.querySelectorAll(".entry-content");
    console.log("Found " + elements.length + " .entry-content elements");
    elements.forEach(function(el, index) {
        console.log("Element " + index + " textContent: '" + el.textContent + "', trimmed: '" + el.textContent.trim() + "'");
        if (el.textContent.trim() === "") {
            console.log("Hiding element " + index);
            el.style.display = "none";
        }
    });
});