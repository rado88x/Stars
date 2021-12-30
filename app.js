// document.getElementById("button").addEventListener("click", function(){
//     stars(5);
// });

function stars (n){
    let result = "";
      for (let i = 0 ; i < n ; i++){
          let line = "";
          let whiteSpace = (n - i - 1);
          line += " ".repeat(whiteSpace)
          let starsCount = 2 * i + 1;
          line += "*".repeat(starsCount);
          result += line + "\n";
          console.log(line);
      }
      console.log(result);
      let htmlResult = result.replaceAll("\n","<br>");
      console.log("HTML result = " + htmlResult)
      document.getElementById("divStars").innerHTML = htmlResult;
}

// stars(5);

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
        if (counter >= currentMax){
            currentMax = counter;
            letterMax = charArray[i];
        }
    }
    console.log("Result = " + letterMax + " x " + currentMax);
}
// countLetters("szxzshpswsp");
// countLetters("szxzshpswwwxx  wwww xx wsp");

countLetters("szxzshpswsppp");