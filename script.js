let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
]

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  //DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-titleID element. Remember there are a couple of ways to query id. Change the text of the title to something shorter.

  let mainTitle = document.querySelector('#main-title')
  mainTitle.innerText = "Hi, I'm Dom :)"

  // Part 2
  //Select the body and change the background-color to a new color of your choice.

  document.body.style.backgroundColor = '#ff80ed'
  

  // Part 3
  //Select DOM's Favorite Things list and remove the last list item.
    
  let favThings = document.querySelector('#favorite-things')
  let lastItem = favThings.lastElementChild
  lastItem.remove()

  // for(let i = favThings.length - 1; i = favThings.length; i++) {
  //     favThings.removeChild(favThings[i])
  // }
  // favThings.forEach(thing => {
  //   if (indexOf(thing) === favThings.length -1) {
  //     favThings.removeChild()
  //   }
  // })

  // Part 4
  // Select all .special-title class elements and change their font-sizeto 2rem. Remember you might have to iterate through the list of elements

  // let specialTitles = document.querySelectorAll('.special-title')
  // specialTitles.style.fontSize = "2rem"


  // Part 5
  // Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
  let pastRaces = document.getElementById("past-races")
  for (let i = 0; i < pastRaces.childElementCount; i++) {
    if (pastRaces.children[i].textContent === 'Chicago') {
      pastRaces.removeChild(pastRaces.children[i])
    }
  }


  // Part 6
  // Let's add to DOM's Past Races list. Create a new <li>element, change the new <li>text to the name of a city, and append it to the Past Races list.

  const li = document.createElement('li')
  li.innerText = 'NYC'
  pastRaces.append(li)

  // Part 7

  // Create a new .blog-post corresponding to the new city added in Part 6. You will have to create a new <div> with class of .blog-post, a new <h2> with text, and a new <p> with some text. Think about what order you want to create the elements, and what order you want to append them in.

  let nycDiv = document.createElement('div')
  nycDiv.className = 'blog-post purple'
  document.querySelector('.main').appendChild(nycDiv)
  let nycH2 = document.createElement('h2')
  nycH2.innerText = 'NYC!!'
  nycH2.style.color = 'white'
  let nycP = document.createElement('p')
  nycP.innerText ='I went 45 mph on the BQE'
  nycDiv.append(nycH2)
  nycDiv.append(nycP)

  // Part 8

  // Query select the #quote-titleID element and add a click event handler. That event handler should use the function randomQuotewhenever #quote-titleis clicked.

  let quoteTitle = document.querySelector('#quote-title')
  quoteTitle.addEventListener('click', randomQuote)



  // Part 9

  // Select all .blog-postclass elements. Iterate through the list of .blog-postclass elements and apply two event handlers to each node. The first event handler should be listening for mouseoutevents while the second handler should be listening for mouseenterevents.

  // The mouseouthandler should toggle the class .purple
  // The mouseenterhandler should toggle the class .red
  // Test it out!
  
  // Hint:
  
  // Remember the document node property .classListand the document node method .toggle().


})
