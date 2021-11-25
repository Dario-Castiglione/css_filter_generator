const image = document.querySelector("img")
const inputRange = document.querySelectorAll("li input")
const change = document.querySelector("#change-img")
const returnDefault = document.querySelector("#return-default")
const copy = document.querySelector("#copy")

let blur = 0;
let brightness = 100;
let contrast = 100;
let grayscale = 0;
let hue_rotate = 0;
let saturate = 100;
let sepia = 0;
let invert = 0;
function tournDefault(){
    inputRange[0].value="0";
    blur = 0;
    inputRange[1].value="100";
    brightness = 100;
    inputRange[2].value="100";
    contrast = 100;
    inputRange[3].value="0";
    grayscale = 0;
    inputRange[4].value="0";
    hue_rotate = 0;
    inputRange[5].value="0";
    invert = 0;
    inputRange[6].value="100";
    saturate = 100;
    inputRange[7].value="0";
    sepia = 0;
    changing()
}
returnDefault.addEventListener("click",tournDefault)

const addMod = () =>{
    filter=`blur(${blur}px) brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${hue_rotate}deg) invert(${invert}%) saturate(${saturate}%) sepia(${sepia}%)`
}
function changing(){
    addMod()
    image.style.filter = `${filter}`   
}
let filter = ""
for (x of inputRange){
    x.addEventListener("input", (event) =>{
    eval(`${event.target.id}`+ "=" + `${event.target.value}`)
    console.log(event.target.key)
    changing()
    })
}

change.addEventListener("click", ()=>{
    image.src= ""
    console.log(image.src)
    let newImg = prompt(`inserisci url`);
    image.parentElement.style.height = ""
    newImg == false ? image.src = "https://source.unsplash.com/random/900x1600" : image.src = newImg
})



addMod()
copy.addEventListener("click", ()=>{
    prompt("css = ",`filter: ${filter}`)
})