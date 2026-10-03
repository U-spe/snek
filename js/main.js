const enterScreen = document.getElementById("enter-screen");
const enterVideo = document.getElementById("enter-video");
const enterButton = document.getElementById("enter-button");
const site = document.getElementById("site");

let entered = false;

function enterSnek() {
    if (entered) return;

    entered = true;

    enterScreen.classList.add("hidden");
    site.classList.add("visible");

    if (enterVideo) {
        enterVideo.pause();
    }

    setTimeout(() => {
        enterScreen.remove();
    }, 900);
}

enterButton.addEventListener("click", enterSnek);

enterVideo.addEventListener("ended", () => {
    enterButton.style.opacity = "1";
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        if (!entered) {
            enterSnek();
        }
    }
});

window.addEventListener("load", () => {
    site.classList.remove("visible");
});
