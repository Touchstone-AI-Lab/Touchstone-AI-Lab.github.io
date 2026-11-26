# Touchstone-AI-Lab.github.io

GitHub Pages for Touchstone AI, served at https://touchstone-ai-lab.github.io/.

- `index.html` + `assets/`: the project index (plain HTML/CSS, no build). Add a card per new project.
- `bench-gamecua/`: built by `.github/workflows/pages.yml` from the `website` branch of
  [Touchstone-AI-Lab/GameCUA](https://github.com/Touchstone-AI-Lab/GameCUA) on every push here and every 15 minutes.
  Run `gh workflow run pages.yml -R Touchstone-AI-Lab/Touchstone-AI-Lab.github.io` to publish at once.
