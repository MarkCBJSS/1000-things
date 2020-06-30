const output = document.querySelector(".output");
const button = document.querySelector("button");

let theName = document.querySelector("input");

console.log(button);
button.addEventListener("click",showMessage);
function showMessage(){
    output.innerHTML = `<p>Hello, ${theName.value}.</p>`;
}