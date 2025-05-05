window.onload  =() => {
 main()
}

const main = () => {

    const body = document.getElementById("body")
    const botton = document.getElementById("btn")
    const colorDisPlayBox = document.getElementById("colorDisPlayBox")
    const copyBtn = document.getElementById("copyBtn")

    botton.addEventListener("click", () => {
        const bgColor = hexColorGerator()
        body.style.backgroundColor = bgColor;
        colorDisPlayBox.value = bgColor;
    })
    copyBtn.addEventListener("click",  () => {
        navigator.clipboard.writeText(colorDisPlayBox.value)
    })
}

const hexColorGerator = () => {

    const red = Math.floor(Math.random() * 255); 
    const green = Math.floor(Math.random() * 255); 
    const blue = Math.floor(Math.random() * 255);
    
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

