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

function tournDefault() {
    for (x of inputRange) {
        x.value = eval(`${x.dataset.default}`)
        eval(`${x.id}` + "=" + `${x.dataset.default}`)
    }
    changing()
}

returnDefault.addEventListener("click", tournDefault)

const addMod = () => {
    filter = `blur(${blur}px) brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${hue_rotate}deg) invert(${invert}%) saturate(${saturate}%) sepia(${sepia}%)`
}
function changing() {
    addMod()
    image.style.filter = `${filter}`
}
let filter = ""
for (x of inputRange) {
    x.addEventListener("input", (event) => {
       eval(`${event.target.id}` + "=" + `${event.target.value}`)
        changing()
    })
}
change.addEventListener("click", () => {
    image.src = ""
    let newImg = prompt(`inserisci url`);
    image.parentElement.style.height = ""
    newImg == false ? image.src = "https://source.unsplash.com/random/900x1600" : image.src = newImg
})
addMod()
copy.addEventListener("click", () => {
    prompt("css = ", `filter: ${filter}`)
})

document.querySelector('#save').addEventListener('click', function() {
    html2canvas(document.body, {
        onrendered: function(canvas) {
          return Canvas2Image.saveAsPNG(canvas);
        }
    });
});