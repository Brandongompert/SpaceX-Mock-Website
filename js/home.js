//RANDOM QUOTE GENERATOR
let quote = document.getElementsByClassName("quote-generator");
let randomChoice;
//function that returns random quote into each quote-generator class element
for (let i = 0; i < quote.length; i++) {
  jsonData = fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((data) => (randomChoice = choose(data)))
    .then(
      () =>
        (quote[i].innerHTML =
          randomChoice.text +
          `<br> -` +
          //replaces "Null" with "Unknown" for semantic purposes
          (randomChoice.author ? randomChoice.author : "Unknown"))
    );
}
//random choice function ** used to randomly generate a quote from quote JSON data **
function choose(choices) {
  jsonData = choices;
  let index = Math.floor(Math.random() * choices.length);
  return choices[index];
}
