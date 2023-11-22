// Test the connection to index.html file.
console.log("Are we connected?")


// ----- Mad Libs ----- //

// Creating an object to house the user input for each respective key.
const words = {
    number: "",
    adjective: "",
    pluralNoun: "",
    adverb: "",
    anotherAdjective: ""
}

// Prompt user to enter a value for each key in the words object.
const startMadlib = () => {
    words.number = prompt("enter a number: ")
    words.adjective = prompt("enter an adjective: ")
    words.pluralNoun = prompt("enter a plural noun: ")
    words.adverb = prompt("enter an adverb: ")
    words.anotherAdjective = prompt("and another adjective: ")
}

// Envoke the function to start the game.
startMadlib();

// Log the results from the user input.
console.log(words)


// Incorporate the user input values to the provided story using interpolation.
const finalStory = 
`Once upon a time a group of ${words.number}(number) General Assembly graduates
got together and made a startup called ${words.adjective} (adjective) Technologies.
Their goal was to create smart ${words.pluralNoun}(plural noun).
They approached the challenge ${words.adverb} (adverb)
which ultimately lead them to ${words.anotherAdjective}(another adjective) fame.`

// Alert the user of the results of their input in the story.
alert(finalStory);
