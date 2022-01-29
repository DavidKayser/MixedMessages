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
    "and went into hiding.",
    "and started a new company.",
    "and found the love of their life.",
    "and became a famous writer.",
    "and regretted it immediatly.",
    "and became rich."
]

//Function to generate a random number
let randomNumber = maxNum => Math.floor(Math.random() * maxNum);

//Function to randomly select story elements and combine them
function messageGenerator() {
    //Randomly generate array index
    const subjectSelection = randomNumber(subject.length);
    const actionSelection = randomNumber(action.length);
    const endSelection = randomNumber(end.length);
    //Return combined message from randomly generated index
    return `"${subject[subjectSelection]} ${action[actionSelection]} ${end[endSelection]}"`;
}

//Generate a story to #generateStory element and animate story box color
const generateStory = document.getElementById('generateStory');
let counter = 0;
generateStory.addEventListener('click', function(){
    counter++;
    const storyBox = document.getElementById('story');
    const story = messageGenerator();
    
    
    if (counter <= 1) {
        storyBox.innerHTML = story;
        storyBox.classList.add('fadeIn');
        storyBox.classList.add('colorChange');
        console.log('initial add in');   
    } else{
        storyBox.classList.remove('colorChange');
        setTimeout(() => {
            storyBox.classList.add('colorChange');
            storyBox.innerHTML = story;
        }, 500);
    }
    
});
