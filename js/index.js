document.addEventListener("DOMContentLoaded", () => {

    const enterScreen = document.getElementById("enter-screen");
    const enterVideo = document.getElementById("enter-video");
    const enterButton = document.getElementById("enter-button");

    const site = document.getElementById("site");

    const searchInput = document.getElementById("game-search");
    const gamesGrid = document.getElementById("games-grid");
    const noResults = document.getElementById("no-results");
    const gameCount = document.getElementById("game-count");


    /*
     * ENTER SCREEN
     */

    function enterSnek() {
        if (enterScreen.classList.contains("exit")) {
            return;
        }

        enterScreen.classList.add("exit");

        if (enterVideo) {
            enterVideo.pause();
            enterVideo.currentTime = 0;
        }

        setTimeout(() => {
            enterScreen.remove();
            site.classList.remove("hidden");

            window.dispatchEvent(new Event("resize"));
        }, 700);
    }

    enterButton.addEventListener("click", enterSnek);


    document.addEventListener("keydown", (event) => {
        if (
            event.key === "Enter" ||
            event.code === "Space"
        ) {
            if (!enterScreen.classList.contains("exit")) {
                event.preventDefault();
                enterSnek();
            }
        }
    });


    /*
     * GAME SEARCH
     */

    function getGames() {
        return Array.from(
            gamesGrid.querySelectorAll(".game-card")
        );
    }

    function updateGameCount(amount) {
        gameCount.textContent =
            `${amount} ${amount === 1 ? "game" : "games"}`;
    }

    function filterGames() {

        const query =
            searchInput.value
                .trim()
                .toLowerCase();

        const games = getGames();

        let visible = 0;

        games.forEach((game) => {

            const name =
                (
                    game.dataset.name ||
                    game.querySelector(".game-title")?.textContent ||
                    ""
                ).toLowerCase();

            const matches =
                !query ||
                name.includes(query);

            game.style.display =
                matches ? "" : "none";

            if (matches) {
                visible++;
            }
        });

        updateGameCount(visible);

        noResults.classList.toggle(
            "hidden",
            visible !== 0
        );
    }

    searchInput.addEventListener(
        "input",
        filterGames
    );


    /*
     * INITIAL COUNT
     */

    updateGameCount(
        getGames().length
    );


    /*
     * ESCAPE = CLEAR SEARCH
     */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            if (document.activeElement === searchInput) {
                searchInput.value = "";
                filterGames();
                searchInput.blur();
            }
        }

    });

});
