







document.addEventListener("DOMContentLoaded", function () {
    var show = localStorage.getItem("showButton");
    if (show === "true") {
        document.getElementById("hiddenButton").style.display = "block";
        localStorage.removeItem("showButton");
    }
});