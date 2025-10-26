# 🧭 Interactive Storytelling Platform

Welcome to the Interactive Storytelling Platform — a dynamic web-based experience where users explore branching narratives through immersive visuals, animated transitions, and personalized choices. Whether you're escaping a haunted mansion or hiking to a lost city, each story unfolds based on your decisions.

## 🚀 Features

- **Dynamic Story Loading**: Load multiple stories from the `/storyData` folder or upload your own `.json` files.
- **Branching Choices**: Each story stage presents decisions that shape the narrative.
- **Image Integration**: Visuals update dynamically with each scene.
- **Save & Resume Progress**: Users can save their current stage and resume later.
- **Animations**: Smooth transitions enhance the storytelling experience.
- **User Story Uploads**: Upload custom JSON stories directly into the platform.

## 📁 Project Structure
/project-folder 
│── index.html 
│── style.css 
│── script.js 
│── /images │    
  ├── Forest.jpg │    
  ├── Temple.jpg │    
  └── ... (scene images) 
│── /storyData │    
  ├── story1.json │
  ├── story2.json |
  ├── story3.json |
  └── ... (additional stories)


## 🛠️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/storytelling-platform.git
cd storytelling-platform

2. Add Your Stories
Place your story JSON files in the /storyData folder. Each file should follow this structure:

{
  "start": {
    "text": "Your opening scene text...",
    "image": "images/Scene.jpg",
    "choices": [
      { "text": "Choice A", "next": "sceneA" },
      { "text": "Choice B", "next": "sceneB" }
    ]
  },
  "sceneA": {
    "text": "Next scene text...",
    "image": "images/SceneA.jpg",
    "choices": []
  }
}
  
3. Add Images
Place all referenced images in the /images folder. Ensure filenames match those in your JSON files.
4. Open in Browser
Simply open index.html in your browser to start exploring.
📦 Uploading Custom Stories
Users can upload their own .json files via the file input. The platform will parse and load the story instantly.
💾 Saving Progress
Click Save Progress to store your current stage in localStorage. Use Resume Progress to continue from where you left off.
🎨 Animations
CSS animations are applied to story transitions and images for a smoother experience. You can customize these in style.css.
🤝 Contributing
We welcome new stories, features, and improvements!
- Fork the repo
- Create your feature branch (git checkout -b feature/story-upload)
- Commit your changes (git commit -am 'Add new story')
- Push to the branch (git push origin feature/story-upload)
- Open a Pull Request
📖 License
This project is licensed under the MIT License.

Enjoy crafting your own adventures and sharing them with the world! 🌍✨

---

Let me know if you'd like this README tailored for a specific audience (e.g., educators, game devs) or if you want to include badges, demo links, or GitHub Pages setup!



🎨 Animations
CSS animations are applied to story transitions and images for a smoother experience. You can customize these in style.css.
