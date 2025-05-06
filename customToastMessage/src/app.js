// Gobal Variable
let div = null;

window.onload = () => {
  main();
};

const main = () => {
  const body = document.getElementById("body");
  const botton = document.getElementById("btn");
  const colorDisPlayBox = document.getElementById("colorDisPlayBox");
  const copyBtn = document.getElementById("copyBtn");

  botton.addEventListener("click", () => {
    const bgColor = hexColorGerator();
    body.style.backgroundColor = bgColor;
    colorDisPlayBox.value = bgColor;
  });
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(colorDisPlayBox.value);
    if (div !== null) {
        div.remove();
        div = null;
    }
    createToastMessage(`${colorDisPlayBox.value} copied`);
  });
};

// ceate toast message div

const createToastMessage = (msg) => {
   div = document.createElement("div");
  div.id = "toastBox";
  div.className = "toastMessageSlideIn";
  div.innerHTML = msg;
  document.body.appendChild(div);

  div.addEventListener("click", () => {
    div.classList.remove("toastMessageSlideIn");
    div.classList.add("toastMessageSlideOut");

    div.addEventListener("animationend", () => {
      div.remove();
      div = null;
    });
  });
};

const hexColorGerator = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
};
