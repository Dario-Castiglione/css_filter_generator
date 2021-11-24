const image = document.querySelector("img")
const inputRange = document.querySelectorAll("li input")
const change = document.querySelector("#change-img")
const returnDefault = document.querySelector("#return-default")
const copy = document.querySelector("#copy")


let blurs = 0;
let brightness = 100;
let contrast = 100;
let grayscale = 0;
let hue_rotate = 0;
let saturate = 100;
let sepia = 0;
let invert = 0;
function tournDefault(){
    inputRange[0].value="-1";
    blurs = -1;
    inputRange[1].value="100";
    brightness = 100;
    inputRange[2].value="100";
    contrast = 100;
    inputRange[3].value="0";
    grayscale = 0;
    inputRange[4].value="0";
    hue_rotate = 0;
    inputRange[5].value="100";
    saturate = 100;
    inputRange[6].value="0";
    sepia = 0;
    inputRange[7].value="0";
    invert = 0;
    changing()
}

returnDefault.addEventListener("click",tournDefault)

const addMod = () =>{
    filter=`blur(${blurs}px) brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${hue_rotate}deg) invert(${invert}%) saturate(${saturate}%) sepia(${sepia}%)`
}
function changing(){
    image.style.filter = `${filter}`   
    addMod()
}
let filter = ""

inputRange[0].addEventListener("input", (event)=>{
    blurs = event.target.value 
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

copy.addEventListener("click", ()=>{
    prompt("css = ",`filter: ${filter}`)
})
