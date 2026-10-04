// =========================================================
// SNEK // MAIN JS
// =========================================================


// =========================================================
// CLOCK
// =========================================================

function updateClock() {
  const now = new Date();

  const timeEl = document.getElementById("time");
  const dateEl = document.getElementById("date");

  if (timeEl) {
    timeEl.textContent = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }

  if (dateEl) {
    dateEl.textContent = now.toDateString();
  }
}

setInterval(updateClock, 1000);
updateClock();


// =========================================================
// SNEK CONST TEXT
// =========================================================

const lines = [
  "backup mode: activated",
  "single handedly saving the school year",
  "look who's back...",
  "damn school wifi again",
  "slow ahh wifi",
  "snek is online",
  "one path. one hub.",
  "games go brrrr",
  "you found the backup",
  "at this point, i don't even know",
  "this one loaded properly",
  "made by cj the goat, right?",
  "what are you still doing here???",
  "we're so back",
  "snek.exe has entered the chat"
];

const constText = document.getElementById("constText");

let lineIndex = 0;

setInterval(() => {
  if (!constText) return;

  constText.style.opacity = "0";

  setTimeout(() => {
    constText.textContent = lines[lineIndex];

    lineIndex++;

    if (lineIndex >= lines.length) {
      lineIndex = 0;
    }

    constText.style.opacity = "1";
  }, 220);

}, 2400);


// =========================================================
// ENTER SCREEN
// =========================================================

const INTRO_TIME = 5000;

window.addEventListener("load", () => {

  const loading = document.getElementById("loading-screen");
  const video = document.getElementById("loadVideo");
  const app = document.getElementById("app");
  const enterBtn = document.getElementById("enter-btn");

  let done = false;

  function finish() {

    if (done) return;

    done = true;

    if (video) {
      video.pause();
    }

    if (loading) {
      loading.classList.add("hidden");
    }

    setTimeout(() => {

      if (app) {
        app.classList.add("ready");
      }

    }, 350);
  }


  if (enterBtn) {
    enterBtn.addEventListener("click", finish);
  }


  if (video) {
    video.addEventListener("ended", finish);
  }


  // Automatic fallback if the video takes too long.
  setTimeout(finish, INTRO_TIME);
});


// =========================================================
// NAVIGATION
// =========================================================

function go(page) {

  if (page.startsWith("#")) {

    const target = document.querySelector(page);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }

    return;
  }

  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = page;
  }, 350);
}


// =========================================================
// MENU BEHAVIOR
// =========================================================

if (!window.__snekMenuInit) {

  window.__snekMenuInit = true;

  const menu = document.getElementById("menu");
  const btn = document.getElementById("menu-btn");
  const wrapper = document.querySelector(".menu-wrapper");

  let closeTimer = null;
  let locked = false;


  if (btn && menu && wrapper) {

    btn.addEventListener("click", (event) => {

      event.stopPropagation();

      locked = !locked;

      if (locked) {
        menu.classList.add("open");
      } else {
        menu.classList.remove("open");
      }

    });


    wrapper.addEventListener("mouseenter", () => {

      clearTimeout(closeTimer);

      menu.classList.add("open");

    });


    wrapper.addEventListener("mouseleave", () => {

      if (locked) return;

      closeTimer = setTimeout(() => {

        menu.classList.remove("open");

      }, 180);

    });


    document.addEventListener("click", (event) => {

      if (!wrapper.contains(event.target)) {

        locked = false;

        menu.classList.remove("open");

      }

    });

  }

}


// =========================================================
// STARS
// =========================================================

const canvas = document.getElementById("stars-canvas");

if (canvas) {

  const ctx = canvas.getContext("2d");

  let stars = [];

  function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    createStars();

  }


  function createStars() {

    const amount =
      Math.min(
        180,
        Math.floor(
          (window.innerWidth * window.innerHeight) / 9000
        )
      );

    stars = [];

    for (let i = 0; i < amount; i++) {

      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,

        size: Math.random() * 1.4 + 0.2,

        speed:
          Math.random() * 0.12 + 0.025,

        opacity:
          Math.random() * 0.65 + 0.15
      });

    }

  }


  function drawStars() {

    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    for (const star of stars) {

      ctx.beginPath();

      ctx.fillStyle =
        `rgba(255,255,255,${star.opacity})`;

      ctx.arc(
        star.x,
        star.y,
        star.size,
        0,
        Math.PI * 2
      );

      ctx.fill();

      star.y -= star.speed;

      if (star.y < -5) {
        star.y = canvas.height + 5;
        star.x = Math.random() * canvas.width;
      }

    }

    requestAnimationFrame(drawStars);

  }


  window.addEventListener(
    "resize",
    resizeCanvas
  );

  resizeCanvas();
  drawStars();

}


// =========================================================
// KEYBOARD SHORTCUT
// =========================================================

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    const menu = document.getElementById("menu");

    if (menu) {
      menu.classList.remove("open");
    }

  }

});
