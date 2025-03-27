//madLibs.js


document.addEventListener("DOMContentLoaded", function () {
const location = "bathroom"; //this is the string
const mathResult = 1 + 1; //this is the number
const booleanValue = location.includes("bathroom"); //this is the boolean expression
const person = { name: "Mario", age: 25 }; //this is an object with properties
const owner = person.name; //this is accessing the object with properties via dot notation

    const story = `
    "In a hidden ${location}, I stumbled upon a hidden robot factory. The shiny machines were assembling gadgets endlessly. One robot, named ${owner}, handed me a metallic keycard. The robot was ${person.age} years old. It beeped and said, 'Access Granted!' Did you know 8 ÷ 4 equals ${mathResult}? Fascinating, right?" The bathroom is ${booleanValue}.
    `;

    document.getElementById("madlibs-output").textContent = story ;
    console.log(story);

    })