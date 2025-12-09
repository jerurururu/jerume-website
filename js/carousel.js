let index = 0;

function move(step) {
    const s = document.getElementById("slide");
    const total = s.children.length;

    index = (index + step + total) % total;
    s.style.transform = "translateX(" + (-index * 400) + "px)";
}

setInterval(() => {
    move(1)
}, 2000);
