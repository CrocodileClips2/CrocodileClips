document.addEventListener("DOMContentLoaded", () => {
    const gameWidgets = document.querySelectorAll(".game-widget");
    const gameEmbedPopup = document.getElementById("game-embed-popup");
    const gameEmbedContainer = document.getElementById("game-embed-container");
    const closeGameEmbedPopup = document.querySelector(".close-game-embed-popup");

    gameWidgets.forEach(widget => {
        const playButton = widget.querySelector(".play-game-btn");
        const gameSlug = "crocodile-simulator-beach-hunt"; // Replace with the correct game slug

        playButton.addEventListener("click", () => {
            gameEmbedContainer.innerHTML = `<div id="game-container-${gameSlug}"></div>`;
            gameEmbedPopup.style.display = "block";
            loadCrazyGame(gameSlug, `game-container-${gameSlug}`);
        });
    });

    closeGameEmbedPopup.addEventListener("click", () => {
        gameEmbedPopup.style.display = "none";
        gameEmbedContainer.innerHTML = "";
    });
});