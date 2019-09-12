let middle_image = document.getElementById("middle_image");
let counter = 0;

function timer() {
    if (counter === 0) {
        middle_image.setAttribute("hidden", "");
        counter++;
    } else if (counter === 1) {
        middle_image.removeAttribute("hidden");
        counter = 0;
    }
}

function interval() {
    counter = 0;
    let my_interval = window.setInterval(timer, 2000);
}

interval();