window.onload  =() => {
 main()
}

const main = () => {

    const body = document.getElementById("body")
    const botton = document.getElementById("btn")
    const colorDisPlayBox = document.getElementById("colorDisPlayBox")

    botton.addEventListener("click", function(){
        const bgColor = hexColorGerator()
        body.style.backgroundColor = bgColor;
        colorDisPlayBox.value = bgColor;
    })
}

const hexColorGerator = () => {

    const red = Math.floor(Math.random() * 255); 
    const green = Math.floor(Math.random() * 255); 
    const blue = Math.floor(Math.random() * 255);
    
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

