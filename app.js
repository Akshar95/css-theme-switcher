const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");
const solarButton = document.getElementById("solar");
const body = document.body;

//Button Event Handlers

darkButton.onClick = () => {
  body.classList.replace("light", "dark");
};

lightButton.onClick = () => {
  body.classList.replace("dark", "light");
};

solarButton.onClick = () => {};
