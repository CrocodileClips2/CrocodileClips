document.addEventListener("DOMContentLoaded", () => {
    // Get version history from localStorage
    const versionHistory = localStorage.getItem("versionHistory");

    if (versionHistory) {
        const parsedHistory = JSON.parse(versionHistory);
        const versionHistoryContainer = document.getElementById("version-history-container");

        parsedHistory.forEach(item => {
            const versionEntry = document.createElement("div");
            versionEntry.classList.add("version-entry");
            versionEntry.innerHTML = `<h3>Version ${item.version}</h3><p>${item.details}</p>`;
            versionHistoryContainer.appendChild(versionEntry);
        });
    }
});