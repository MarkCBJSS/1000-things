
const button = document.querySelector("button");
const output = document.querySelector(".output");

button.addEventListener("click", showOutput);

function showOutput(){
    const date = new Date();
    let cur = date.getHours();
    let message;
    
    if (cur > 17 ) {
        message = "Good evening";
        output.style.backgroundColor = "black";
    } else if (cur > 12) {
        message = "Good Afternoon";
        output.style.backgroundColor = "yellow";
    } else if (cur > 0) {
        message = "Good Morning";
        output.style.backgroundColor = "blue";
    } else {
        message = "Something is wrong";
        output.style.backgroundColor = "red";
    }
    
    output.innerHTML = `<p>${message}</p>`;
}