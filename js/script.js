document.addEventListener("DOMContentLoaded", () => {
    const storyText = document.getElementById("story-text");
    const storyImage = document.getElementById("story-image");
    const choicesContainer = document.getElementById("choices-container");
    const storyContainer = document.getElementById("story-container");
    const saveBtn = document.getElementById("save-btn");
    const loadBtn = document.getElementById("load-btn");
    const uploadBtn = document.getElementById("upload-btn");
    const fileInput = document.getElementById("upload-file");
    const controls = document.getElementById("controls");

    let storyData = {};
    let currentStage = "start"; // Track current stage for saving progress

    // Function to load a story dynamically
    function loadStory(fileName) {
        fetch(`storyData/${fileName}`)
            .then(response => response.json())
            .then(data => {
                storyData = data; // Load story data
                storyContainer.style.display = "block"; // Show story content
                controls.style.display = "block"; // Show controls
                document.getElementById("story-selection").style.display = "none"; // Hide story selection
                startStory(); // Start the loaded story
            })
            .catch(error => console.error("Error loading story:", error));
    }

    // Function to update the story stage
    function updateStory(stage) {
        const scene = storyData[stage];
        currentStage = stage; // Update current stage
        storyText.innerText = scene.text;
        storyImage.src = scene.image;
        storyImage.style.display = "block";
        storyContainer.style.animation = "slideIn 1s ease-in-out"; // Apply animation

        choicesContainer.innerHTML = ""; // Clear old choices
        scene.choices.forEach(choice => {
            const button = document.createElement("button");
            button.innerText = choice.text;
            button.onclick = () => updateStory(choice.next);
            choicesContainer.appendChild(button);
        });
    }

    // Start the story
    function startStory() {
        updateStory("start");
    }

    // Save progress
    saveBtn.onclick = () => {
        localStorage.setItem("savedStage", currentStage);
        alert("Progress saved!");
    };

    // Resume progress
    loadBtn.onclick = () => {
        const savedStage = localStorage.getItem("savedStage");
        if (savedStage) {
            updateStory(savedStage);
        } else {
            alert("No saved progress found.");
        }
    };

    // Upload user story
    uploadBtn.onclick = () => {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                try {
                    storyData = JSON.parse(event.target.result); // Parse uploaded story
                    alert("Story uploaded successfully!");
                    updateStory("start");
                } catch (error) {
                    alert("Invalid JSON file.");
                }
            };
            reader.readAsText(file);
        } else {
            alert("No file selected.");
        }
    };

    // Expose functions to global scope
    window.loadStory = loadStory;
});
