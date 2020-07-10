var aVariableOutsideACodeBlock = 10;

if (aVariableOutsideACodeBlock == 10) {
    var aVariableINSIDE = 20;
    console.log("(aVariableOutsideACodeBlock) equals " + aVariableOutsideACodeBlock);
    console.log("(aVariableINSIDE) equals " + aVariableINSIDE);
}
// The below works if we use var, change the var keywords to let and it will fail
// This demonstrates the better scope control of let 
console.log("(aVariableINSIDE) called from outside equals " + aVariableINSIDE);