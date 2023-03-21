let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  //DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-titleID element. Remember there are a couple of ways to query id. Change the text of the title to something shorter.

  document.querySelector('#main-title') = "Hi, I'm Dom :)"

  // Part 2
  //Select the body and change the background-color to a new color of your choice.

  this.body.backgroundColor = '#ff80ed'

  // Part 3
  //Select DOM's Favorite Things list and remove the last list item.
    
  let list = document.querySelector('#favorite-things')
  for(let i= list.length - 1; i = list.length; i++) {
      list.removeChild(li)
  }

  // Part 4
  // Select all .special-title class elements and change their font-sizeto 2rem. Remember you might have to iterate through the list of elements

  let specialTitles = document.querySelectorAll('.special-title')
  specialTitles.forEach(title => {
    title.style.font = '2rem'
  })


  // Part 5


  // Part 6


  // Part 7


  // Part 8


  // Part 9




});
