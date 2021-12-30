function countLetters (input){

    let currentLetter = "";
    let currentMax = 0;
    let letterMax = "";
    let charArray = input.split("");
    console.log(charArray)
    for (let i = 0 ; i < input.length; i ++){
        currentLetter = charArray[i];
        let counter = 0;
        for (let j = 0; j < input.length ; j ++){
            if (charArray[i] == charArray[j]){
                counter++;
            }
        }
        if (counter >= currentMax){ // "sspp"  with ">" result is "s" ;  with ">=" result is "p" 
            currentMax = counter;
            letterMax = charArray[i];
        }
    }
    console.log("Result = " + letterMax + " x " + currentMax);
}
// countLetters("szxzshpswsp");
// countLetters("szxzshpswwwxx  wwww xx wsp");

// countLetters("szxzshpswsppp");