const sec1 = document.getElementById("section1");
const sec2 = document.getElementById("section2");
const sec3 = document.getElementById("section3");
const sec4 = document.getElementById("section4");


function resetAll() {
    sec1.style.backgroundColor = "white";
    sec2.style.backgroundColor = "white";
    sec3.style.backgroundColor = "white";
    sec4.style.backgroundColor = "white";

    sec1.textContent = " ";
    sec2.textContent = " ";
    sec3.textContent = " ";
    sec4.textContent = " ";
    

    sec1.style.boxShadow = "none";
    sec2.style.boxShadow = "none";
    sec3.style.boxShadow = "none";
    sec4.style.boxShadow = "none";
}

sec1.addEventListener("mouseenter", function () {
    resetAll();
    sec1.style.backgroundColor = "purple";
    sec1.textContent = "Top Left";
    sec1.style.color = "yellow"; 
    sec1.style.boxShadow = "0 5px 15px  blue";
    sec1.style.cursor = "crosshair"; 
});

sec2.addEventListener("mouseenter", function () {
    resetAll();

    sec2.style.backgroundColor = "lightgreen";
    sec2.textContent = "Top Right ";
    sec2.style.color = "white";
    sec2.style.boxShadow = "0 0 15px blueviolet";
    sec2.style.cursor = "grab";
});

sec3.addEventListener("mouseenter", function () {
    resetAll();

    sec3.style.backgroundColor = "yellow";
    sec3.textContent = "Bottom Left";
    sec3.style.color ="Green";
    sec3.style.boxShadow = "0 0 15px green";
    sec3.style.cursor = "help";
});

sec4.addEventListener("mouseenter", function () {
    resetAll();

    sec4.style.backgroundColor = "blue";
    sec4.textContent = "Bottom Right";
    sec4.style.color = "black";
    sec4.style.boxShadow = "0 0 15px green";
    sec4.style.cursor = "move";
});
