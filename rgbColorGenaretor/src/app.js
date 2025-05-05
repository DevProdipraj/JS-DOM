window.onload  =() => {
 main()
}

const main = () => {

    const body = document.getElementById("body")
    const botton = document.getElementById("btn")

    botton.addEventListener("click", function(){
        const bgColor = rgbColorGerator()
        body.style.backgroundColor = bgColor
    })
}

const rgbColorGerator = () => {

    const red = Math.floor(Math.random() * 255); 
    const green = Math.floor(Math.random() * 255); 
    const blue = Math.floor(Math.random() * 255);
    
    return `rgb(${red},${green},${blue}`
}

