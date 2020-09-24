function fibonacci(){
    let first = 1;
    var second = first+first;
    alert(first);
    alert(second);
    for(let i = 0; i<5; i++){
        first = second + first;
        alert(first);
        second = first + second;
        alert(second)
    }
}
fibonacci();

function stringReverse(){
    let userinput = prompt("What is the string you would like to reverse?");
    var reverseString = "";
    for(let i = userinput.length - 1; i >= 0; i--){
        reverseString = reverseString+userinput[i];
    }
    alert(reverseString)
}
stringReverse();

function capLetter(){
    let userinput = prompt("Give me a couple of words");
    userinput = userinput.toLowerCase();
    var splitString = userinput.split(' ');
    for(let i = 0; i < splitString.length; i++){
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1)
    }
    splitString = splitString.join(' ');
    alert(splitString);
}
capLetter();

function compressString(){
    let userinput = prompt("Input a string of random letters please.");
    var compressedString = '';
    var count = 0;
    for(let i = 0; i < userinput.length; i++){
        count++;
        if(userinput[i] != userinput[i+1]){
            compressedString = compressedString + userinput[i] + count;
            count = 0;
        }
        
        
    }
    alert(compressedString);
}
compressString();