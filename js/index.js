const image = document.querySelector("img")
const inputRange = document.querySelectorAll("li input")
const change = document.querySelector("#change-img")








inputRange[0].addEventListener("input", (event)=>{
    image.style.filter =`blur(${event.target.value}px)`
    
})
inputRange[1].addEventListener("input", (event)=>{
    image.style.filter =`brightness(${event.target.value}%)`
    
})
inputRange[2].addEventListener("input", (event)=>{
    image.style.filter =`contrast(${event.target.value}%)`
    
})
inputRange[3].addEventListener("input", (event)=>{
    image.style.filter =`grayscale(${event.target.value}%)`
    
})
inputRange[4].addEventListener("input", (event)=>{
    image.style.filter =`hue-rotate(${event.target.value}deg)`
    
})
inputRange[5].addEventListener("input", (event)=>{
    image.style.filter =`invert(${event.target.value}%)`
    
})
inputRange[6].addEventListener("input", (event)=>{
    image.style.filter =`saturate(${event.target.value}%)`
    
})
inputRange[7].addEventListener("input", (event)=>{
    image.style.filter =`sepia(${event.target.value}%)`
    
})

change.addEventListener("click", ()=>{
    const newImg = prompt("inserisci url");
    image.src = newImg
})

