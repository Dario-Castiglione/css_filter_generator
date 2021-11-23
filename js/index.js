const image = document.querySelector("img")
const inputRange = document.querySelectorAll("li input")
const change = document.querySelector("#change-img")

const addMod = () =>{
    filter=`blur(${blur}px) 
    brightness(${brightness}%)
    contrast(${contrast}%)
    grayscale(${grayscale}%)
    hue-rotate(${hue_rotate}deg)
    invert(${invert}%)
    saturate(${saturate}%)
    sepia(${sepia}%)`
}
function changing(){
    image.style.filter = `${filter}`   
    addMod()
}
let filter = ""
let blur = 0;
inputRange[0].addEventListener("input", (event)=>{
    blur = event.target.value 
    changing()
})
let brightness = 100;
inputRange[1].addEventListener("input", (event)=>{
    brightness = event.target.value 
    changing()    
})
let contrast = 100;
inputRange[2].addEventListener("input", (event)=>{
    contrast = event.target.value 
    changing()    
})
let grayscale = 0;
inputRange[3].addEventListener("input", (event)=>{
    grayscale = event.target.value 
    changing()    
})
let hue_rotate = 0;
inputRange[4].addEventListener("input", (event)=>{
    hue_rotate = event.target.value 
    changing()    
})
let invert = 0;
inputRange[5].addEventListener("input", (event)=>{
    invert = event.target.value 
    changing()    
})
let saturate = 100;
inputRange[6].addEventListener("input", (event)=>{
    saturate = event.target.value 
    changing()   
})
let sepia = 0;
inputRange[7].addEventListener("input", (event)=>{
    sepia = event.target.value 
    changing()  
})
change.addEventListener("click", ()=>{
    const newImg = prompt("inserisci url");
    image.src = newImg
})
