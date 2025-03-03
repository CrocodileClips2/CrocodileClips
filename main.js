document.addEventListener("DOMContentLoaded", () => {
    const searchBox = document.getElementById("search-box");
    const filterBtn = document.getElementById("filter-btn");
    const filterPopup = document.getElementById("filter-popup");
    const closeFilterBtn = document.getElementById("close-filter");
    const applyFilterBtn = document.getElementById("apply-filter");
    const resetLogo = document.getElementById("reset-logo");
    const videos = document.querySelectorAll(".video-container");

    const videoPopup = document.getElementById("video-popup");
    const videoEmbed = document.getElementById("video-embed");
    const closePopup = document.querySelector(".close-popup");

    searchBox.addEventListener("input", () => {
        const query = searchBox.value.toLowerCase();
        filterVideos(query);
    });

    filterBtn.addEventListener("click", () => {
        filterPopup.style.display = "block";
    });

    closeFilterBtn.addEventListener("click", () => {
        filterPopup.style.display = "none";
    });

    applyFilterBtn.addEventListener("click", () => {
        const source = document.getElementById("source").value;
        const type = document.getElementById("type").value;
        filterVideos(searchBox.value.toLowerCase(), source, type);
        filterPopup.style.display = "none";
    });

    resetLogo.addEventListener("click", () => {
        searchBox.value = "";
        document.getElementById("source").value = "all";
        document.getElementById("type").value = "all";
        filterVideos();
    });

    function filterVideos(query = "", source = "all", type = "all") {
        videos.forEach(video => {
            const videoTitle = video.getAttribute("data-title").toLowerCase();
            const videoSource = video.getAttribute("data-source");
            const videoType = video.getAttribute("data-type");

            if (videoTitle.includes(query) && 
                (source === "all" || videoSource === source) && 
                (type === "all" || videoType === type)) {
                video.style.display = "block";
            } else {
                video.style.display = "none";
            }
        });
    }

    filterVideos();

    videos.forEach(video => {
        video.addEventListener("click", () => {
            const driveId = video.getAttribute("data-google-drive-id");
            if (driveId) {
                videoEmbed.innerHTML = `<iframe src="https://drive.google.com/file/d/${driveId}/preview" width="640" height="480" allowfullscreen></iframe>`;
                videoPopup.style.display = "block";
            }
        });
    });

    closePopup.addEventListener("click", () => {
        videoPopup.style.display = "none";
        videoEmbed.innerHTML = "";
    });


    const moreVideosContainer = document.querySelector(".more-videos");
    const moreVideos = Array.from(document.querySelectorAll(".more-videos .video-container")); // Convert NodeList to Array

    // Function to shuffle array elements
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
    }

    // Shuffle and append videos
    shuffleArray(moreVideos);
    moreVideos.forEach(video => {
        moreVideosContainer.appendChild(video);
    });

    const versionWidget = document.getElementById("version-widget");
    const versionPopup = document.getElementById("version-popup");
    const closeVersionPopup = document.querySelector(".close-version-popup");
    const versionUpdatesToggle = document.querySelector(".version-updates-toggle");
    const versionUpdatesDropdown = document.querySelector(".version-updates-dropdown");

    versionWidget.addEventListener("click", () => {
        versionPopup.style.display = "block";
    });

    closeVersionPopup.addEventListener("click", () => {
        versionPopup.style.display = "none";
    });

    versionUpdatesToggle.addEventListener("click", () => {
        versionUpdatesDropdown.classList.toggle("show");
    });



    
});


const versionPopup = document.getElementById("version-popup");

if (versionPopup) {
    const versionHistory = versionPopup.dataset.versionHistory;
    localStorage.setItem("versionHistory", versionHistory);
}




const videoPopup = document.getElementById("video-popup");
const videoEmbed = document.getElementById("video-embed");
const closePopup = document.querySelector(".close-popup");
const mobileCloseVideo = document.getElementById("mobile-close-video");

// ... your existing code ...

mobileCloseVideo.addEventListener("click", () => {
    videoPopup.style.display = "none";
    videoEmbed.innerHTML = "";
});
