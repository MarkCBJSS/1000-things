const button = document.querySelectorAll("button");
const added = document.querySelector(".added");
const removed = document.querySelector(".removed");

button[0].addEventListener("click",function(){
    const cost = document.querySelectorAll("input")[0];
    
    let grossAmount = ((cost.value - 1)+1).toFixed(2);
    let netAmount = (grossAmount / 1.2).toFixed(2); 
    let removedVatAmount = (grossAmount - netAmount).toFixed(2);
    
    let resultRemove = `<p>
                    Gross: £${grossAmount}</br>
                    Net: £${netAmount}</br>
                    VAT: £${removedVatAmount}</p>`;
    
    removed.innerHTML = resultRemove;
})

button[1].addEventListener("click",function(){
    const costAdd = document.querySelectorAll("input")[1];
    
    let grossAmountAdd = ((costAdd.value - 1)+1).toFixed(2);
    let netAmountAdd = (grossAmountAdd * 1.2).toFixed(2); 
    let vatAmountAdd = (netAmountAdd - grossAmountAdd).toFixed(2);
    
    let resultAdd = `<p>
                    Gross: £${grossAmountAdd}</br>
                    Net: £${netAmountAdd}</br>
                    VAT: £${vatAmountAdd}</p>`;
    
    added.innerHTML = resultAdd;
})