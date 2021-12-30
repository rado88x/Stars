document.getElementById("button").addEventListener("click", function(){
    stars(5);
});

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

stars(5);