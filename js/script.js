/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/
// Remember to delete the comments that came with this file, and replace them with your own code comments.




//Create the 5 diferent quotes. 
var quotes = [
{
  quote: "May the Force be with you",
  source: "Han Solo",
  citation: "Star Wars",
  year: "1977",
  tags: "Science fiction"
},
{
  quote: "I'll be back ",
  source: "Terminator",
  citation: "The Terminator",
  year: "1984",
  tags: "Science fiction"
},
{
  quote: "Bond. James Bond",
  source: "James Bond",
  citation: "Dr. No",
  year: "1962",
  tags: "Action"
},
{
  quote: "Houston, we have a problem",
  source: "James A. Lovell",
  citation: "Apollo 13",
  year: "1995",
  tags: ""
},
{
  quote: "I'm the king of the world",
  source: "Jack Dawson",
  citation: "Titanic",
  year: "1997",
  tags: "Real"
},
];

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


//Auto-refresh the quote. The time is in miliseconds. 
setInterval(printQuote, 20000);


//Print the quote in the index.html
function print(quote) {
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = quote;
}


//The variable quote hold a random quote from the array quotes. 
function getRandomQuote() {
 var randomQuote = Math.floor(Math.random() * quotes.length);
 var quote = quotes[randomQuote];
 //We can check in the javascript console the random quote. 
 console.log(quote);
 return quote; 
}


//Get the background random color
function randomColorGenerator() {
	var randomColor;
	var red = Math.floor(Math.random() * 256 );
	var green = Math.floor(Math.random() * 256 );
	var blue = Math.floor(Math.random() * 256 );
	randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}

 
//Set the message to print it & set the new background color.
function printQuote(){
 var quoteGet = getRandomQuote();
 var message = "";
 var quote = quoteGet.quote;
 var source = quoteGet.source;
 var citation = quoteGet.citation;
 var year = quoteGet.year;
 var tag = quoteGet.tags; 

 message ='<p class="quote">' + quote + '</p>';
 message  += '<p class="source">' + source;

if (citation) { //Check if an object property exists
  message += '<span class="citation">' + citation + '</span>';
} else {
  message += '';
}

if (year) { //Check if an object property exists
  message += '<span class="year">' + year + '</span>';	
} else {
  message += '';
}

if (tag) { //Check if an object property exists
  message += '<span class="year">' + tag + '</span></p>';	
} else { 
  message += '';
}

//Set the new background color
randomColorGenerator();
document.getElementById('background').style.backgroundColor = randomColorGenerator();

print(message);
}








 