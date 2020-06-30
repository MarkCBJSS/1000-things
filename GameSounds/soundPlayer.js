const inventoryItems = document.querySelectorAll(".inventory");
console.log(inventoryItems);
for(let i=0; i<inventoryItems.length; i++) {
    inventoryItems[i].addEventListener("click", function(){
        let inventory = this.innerHTML;
        let lowerInventory = inventory.toLowerCase();
        makeSound(lowerInventory);
        addStyle(lowerInventory);
    })
}

function addStyle(name) {
    let activeElement = 
        document.querySelector("."+name);
    activeElement.classList.add("active");
    setTimeout(function(){
        activeElement.classList.remove("active");
    },300)
}

function makeSound(name){
    console.log(name);
    switch(name){
        case "ring":
            let sound1 = new Audio("sounds/"+name+".wav");
            sound1.play();
            break;
        case "page":
            let sound2 = new Audio("sounds/"+name+".wav");
            sound2.play();
            break;
        case "sell":
            let sound3 = new Audio("sounds/"+name+".wav");
            sound3.play();
            break;
    }
}