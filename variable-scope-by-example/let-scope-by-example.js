let aVariableOutsideACodeBlock = 10;

    if (aVariableOutsideACodeBlock == 10) {
        let aVariableINSIDE = 20;
        console.log("aVariableOutsideACodeBlock called from INSIDE the code block is : " + aVariableOutsideACodeBlock);
        console.log("aVariableINSIDE called inside and set inside is: " + aVariableINSIDE);
    }
// The below works if we use var, change the var keywords to let and it will fail
// This demonstrates the better scope control of let
console.log("## We now call a let set inside a block, but from the outside, so should see an error");
console.log("aVariableINSIDE called from OUTSIDE a code block, but set INSIDE that code block is: " + aVariableINSIDE);