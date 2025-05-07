// Global Variable
let toastDiv = null;

window.onload = () => {
  main();
};

const main = () => {
  const body = document.getElementById("body");
  const button = document.getElementById("btn");
  const colorDisplayBox = document.getElementById("colorDisPlayBox");
  const copyBtn = document.getElementById("copyBtn");

  // Generate color and update UI
  button.addEventListener("click", () => {
    const bgColor = hexColorGenerator();
    body.style.backgroundColor = bgColor;
    colorDisplayBox.value = bgColor;
  });

  // Copy color to clipboard and show toast
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(colorDisplayBox.value);
    if (toastDiv !== null) {
      toastDiv.remove();
      toastDiv = null;
    }
    if(isValidHex(colorDisplayBox.value)){
      createToastMessage(`${colorDisplayBox.value} copied`);
    }else{
      alert("Invalid Color Code!!")
    }
  });

  // Update background when valid hex is typed
  colorDisplayBox.addEventListener("keyup", (e) => {
    const color = e.target.value;
    if (isValidHex(color)) {
      body.style.backgroundColor = color;
    }
  });
};

// Create toast message div
const createToastMessage = (msg) => {
  toastDiv = document.createElement("div");
  toastDiv.id = "toastBox";
  toastDiv.className = "toastMessageSlideIn";
  toastDiv.innerText = msg;
  document.body.appendChild(toastDiv);

  toastDiv.addEventListener("click", () => {
    toastDiv.classList.remove("toastMessageSlideIn");
    toastDiv.classList.add("toastMessageSlideOut");

    toastDiv.addEventListener("animationend", () => {
      toastDiv.remove();
      toastDiv = null;
    });
  });
};

// Generate a valid hex color
const hexColorGenerator = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `#${red.toString(16).padStart(2, '0')}${green
    .toString(16)
    .padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
};

// Validate hex color string
const isValidHex = (color) => {
  if (color.length !== 7) return false;
  if (color[0] !== "#") return false;

  const hexPart = color.slice(1);
  return /^[0-9A-Fa-f]{6}$/.test(hexPart);
};
