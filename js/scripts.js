$(document).ready(function(){
  var puzzleSentence = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  // var puzzleArray = puzzleSentence.split("");
  //
  // console.log(puzzleSentence);
  // console.log(puzzleArray);
  // for (i = 0; i < puzzleArray.length; i += 1) {
  //   if ((puzzleArray[i] === "a") ||(puzzleArray[i] === "e") ||(puzzleArray[i] === "i") ||(puzzleArray[i] === "o") ||(puzzleArray[i] === "u")) {
  //     puzzleArray[i] = "-";
  //   }
  // }
  //   var codedPuzzle = puzzleArray.join("");
  //
  //   $(".wordPuzzle").append("<h1>"+codedPuzzle+"</h1>");
  //  var puzzleA = puzzleSentence.replace(/a/gi, "-");
  //  puzzleSentence = puzzleA;
  //  var puzzleE = puzzleSentence.replace(/e/gi, "-");
  //  puzzleSentence = puzzleE;
  //  var puzzleI = puzzleSentence.replace(/i/gi, "-");
  //  puzzleSentence = puzzleI;
  //  var puzzleO = puzzleSentence.replace(/o/gi, "-");
  //  puzzleSentence = puzzleO;
  //  var puzzleU = puzzleSentence.replace(/u/gi, "-");
  //  puzzleSentence = puzzleU;
  // $(".wordPuzzle").append("<h1>"+puzzleSentence+"</h1>");
  //
  //  var factorialAnswer = 1;
  //  for (i = 100; i > 0; i--) {
  //    factorialAnswer *= i;
  //    console.log(factorialAnswer);
  //  }
  // $("form#palindrome").submit(function() {
  //   var userInput = $("input#userInput").val();
  //   var inputArray = userInput.split(" ");
  //   var inputString = inputArray.join("");
  //   var inputStringArray = inputString.split("");
  //   console.log(inputStringArray);
  //   var reversedString = inputStringArray.reverse();
  //   var joinedArray = reversedString.join("");
  //   console.log(joinedArray);
  //
  // if (inputString === joinedArray) {
  //   $(".wordPuzzle").html("<h3>Yay, it's a palindrome</h3>");
  // }
  // else {
  //   $(".wordPuzzle").text("It's not a palindrome");
  // }
  // event.preventDefault();
  //   });

  var prime = 2;
  var numbers = [];

  for (i = 2; i < 101; i++) {
    numbers.push(i);
  }

  var notPrime = function(number) {
    var index = numbers.indexOf(number);
    var getRidOf = numbers.splice(index, 1);
    return getRidOf.pop();
  }

  function primeFunction(){
    numbers.forEach(function(number){

      if ((number % prime) === 0) {
        if (number != prime) {
          notPrime(number);
        }
      }
    });
  };

  while (prime < 101) {
    primeFunction();
    prime++;
    console.log(prime);
  }

  console.log(numbers);
});
