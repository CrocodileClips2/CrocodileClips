document.addEventListener("DOMContentLoaded", () => {
    // Get version history from home.html
    const versionPopup = window.opener && window.opener.document.getElementById("version-popup");
    if (versionPopup) {
        const versionHistory = JSON.parse(versionPopup.dataset.versionHistory);
        const versionHistoryContainer = document.getElementById("version-history-container");

        versionHistory.forEach(item => {
            const versionEntry = document.createElement("div");
            versionEntry.classList.add("version-entry");
            versionEntry.innerHTML = `<h3>Version ${item.version}</h3><p>${item.details}</p>`;
            versionHistoryContainer.appendChild(versionEntry);
        });
    }
});