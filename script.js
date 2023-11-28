let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let ms = document.querySelector("h6");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    css.innerText = body.style.background + ";";
    ms.textContent = "Touch the code to Copy :-)"
}

css.onclick = function () {
    document.execCommand("copy");
}

css.addEventListener("copy", function (event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", css.textContent);
        
    }
});

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
