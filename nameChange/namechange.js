let yourname = prompt("Enter your name");
            
const names = document.querySelectorAll(".para");

for(let i=0; i<names.length; i++) {
    names[i].addEventListener("click", function(){
        names[i].innerHTML = yourname;
    });
}