const body = document.querySelector("body");

function setTheme(theme) {
  body.classList.remove("light", "dark");
  body.classList.add(theme);
  localStorage.setItem("theme", theme);
}

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

prefersDark.addEventListener("change", function () {
  setTheme(this.matches ? "dark" : "light");
});

function toggleTheme(theme) {
  setTheme(theme);
}

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("theme-buttons");

const lightButton = document.createElement("button");
lightButton.textContent = "Light";
lightButton.addEventListener("click", () => toggleTheme("light"));

const darkButton = document.createElement("button");
darkButton.textContent = "Dark";
darkButton.addEventListener("click", () => toggleTheme("dark"));

const systemButton = document.createElement("button");
systemButton.textContent = "System";
systemButton.addEventListener("click", () => {
  setTheme(prefersDark.matches ? "dark" : "light");
});

buttonContainer.appendChild(lightButton);
buttonContainer.appendChild(darkButton);
buttonContainer.appendChild(systemButton);

document.body.appendChild(buttonContainer);

let theme = localStorage.getItem("theme");
theme = theme ? theme : prefersDark.matches ? "dark" : "light";
setTheme(theme);
