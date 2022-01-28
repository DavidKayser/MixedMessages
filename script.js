//Array for subject of the story
const subject = [
    "David",
    "Melissa",
    "James",
    "Harry",
    "Jennifer",
    "A man",
    "A woman",
    "The president",
    "A clown",
    "Will",
    "Peter",
    "A test pilot",
    "A door to door fridge salesman",
    "A nerd",
    "A hero",
    "A judge"
];

//Array for action of the story
const action = [
    "walked into a bar",
    "ate a sandwhich",
    "looked across the street",
    "found a dollar",
    "went to the mountains",
    "flew to Alaska",
    "formed a research group",
    "ate some ramen",
    "went out for sushi"
]

//Array for end of the story
const end = [
    "and died.",
    "and had a geat time.",
    "and went into hiding",
    "and started a new company",
    "and found the love of their life",
    "and became a famous writer",
    "and regretting it immediatly.",
    "and became rich."
]

//Function to randomly select story elements and combine them
function messageGenerator() {
    //Randomly gnerate array index
    const subjectSelection = Math.floor(Math.random() * subject.length);
    const actionSelection = Math.floor(Math.random() * action.length);
    const endSelection = Math.floor(Math.random() * end.length);
    //Return combined message from randomly generated index
    return `${subject[subjectSelection]} ${action[actionSelection]} ${end[endSelection]}`
}

//Log full message to the console
console.log(messageGenerator());
