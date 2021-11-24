const image = document.querySelector("img")
const inputRange = document.querySelectorAll("li input")
const change = document.querySelector("#change-img")
const returnDefault = document.querySelector("#return-default")



let blur = 0;
let brightness = 100;
let contrast = 100;
let grayscale = 0;
let hue_rotate = 0;
let saturate = 100;
let sepia = 0;
let invert = 0;
function tournDefault(){
    blur = 0;
    brightness = 100;
    contrast = 100;
    grayscale = 0;
    hue_rotate = 0;
    saturate = 100;
    sepia = 0;
    invert = 0;
    changing()
}

returnDefault.addEventListener("click",tournDefault)

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

inputRange[0].addEventListener("input", (event)=>{
    blur = event.target.value 
    changing()
})

inputRange[1].addEventListener("input", (event)=>{
    brightness = event.target.value 
    changing()    
})

inputRange[2].addEventListener("input", (event)=>{
    contrast = event.target.value 
    changing()    
})

inputRange[3].addEventListener("input", (event)=>{
    grayscale = event.target.value 
    changing()    
})

inputRange[4].addEventListener("input", (event)=>{
    hue_rotate = event.target.value 
    changing()    
})

inputRange[5].addEventListener("input", (event)=>{
    invert = event.target.value 
    changing()    
})

inputRange[6].addEventListener("input", (event)=>{
    saturate = event.target.value 
    changing()   
})

inputRange[7].addEventListener("input", (event)=>{
    sepia = event.target.value 
    changing()  
})
change.addEventListener("click", ()=>{
    image.src= ""
    console.log(image.src)
    let newImg = prompt(`inserisci url`);
    image.parentElement.style.height = ""
    newImg == false ? image.src = "https://source.unsplash.com/random/900x1600" : image.src = newImg
})
tournDefault()