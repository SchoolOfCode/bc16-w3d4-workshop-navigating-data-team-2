// Print out into the console the entire SOCBook object
console.log(SOCBook);

// Take a look at it in the console
// Notice the shape of the data, and all of the different information contained in it
// Try and play to print out the different parts of the data into the console

// For all the following tasks, access/select the data required through the SOCBook object

// For the Tasks 1, 2, and 3 you will look at the object and find your desired data manually. Then, simply select it from the object
// e.g. object.path[2].data.I.want

// Task 1
// Complete the function so it returns Liz Rios' favourite fruit

function lizRiosFavFruit() {
  return SOCBook.data.people[10].favoriteFruit
  // Your code goes here... 
  /* Find a way to Look up Liz Rios
     Yes, we ould you click person manually but what if there is 1000s of people?
     lizRios.path[2].data.favouritefruit */
  
}

console.log("Liz Rios' favourite fruit is:", lizRiosFavFruit());

// Task 2
// Complete the function so it returns Marie David's 2nd friend's name

function marieDavid2ndFriend() {
  return SOCBook.data.people[15].friends[1].name
  // Your code goes here...
}

console.log("Marie David's 2nd friend is:", marieDavid2ndFriend());

// Task 3
// Complete the function so it Cooper Brady's greeting message is shown in the p tag with the id of "message"
// We've helped start breaking down the plan!

function cooperBradyGreeting() {
  document.getElementById("message").textContent = SOCBook.data.people[18].greeting
  // Your code goes here...
  // Select Cooper Brady's greeting message from the object
  // Select the p tag with the id of message
  // Set the text of the p tag to be the greeting message
}

cooperBradyGreeting();

// For Tasks 4, 5, 6, and 7 you will be getting much more programmatic with how you interact with the data, rather than manually finding and selecting

// Task 4
// Complete the following function
// In it, we want to take in an email as a parameter, and loop through search for the person who has that email
// If we find them, return the person
// If we don't, return null

function findPersonByEmail(email) {
  let foundEmail = null
  for (let i=0; i<SOCBook.data.people.length; i++) {
    // check the email against the argument
    if (email === SOCBook.data.people[i].email) {
      foundEmail = SOCBook.data.people[i].name;
    }
  };
  return foundEmail
  // Your code goes in here...
}

const found = findPersonByEmail("carversalinas@comtent.com");
console.log("What I found:", found);

// Task 5
// Make a list containing only the people's names who's favourite fruit is a mango
// people who's faocuite fruit === mango 

function getMangoLovers() {
  let mangoLovers = [];
  for (let i=0; i<SOCBook.data.people.length; i++) {
    if (SOCBook.data.people[i].favoriteFruit === "mango") {
      mangoLovers.push (SOCBook.data.people[i].name) 
    }
  };

  return mangoLovers;
}

console.log("Who loves mango?", getMangoLovers());

// Task 6
// Complete the function. Try and return the address of the person in the position in the array we've been handed

function getAddress(positionInArray) {
  // Your code goes here...
  let peopleIndex = SOCBook.data.people[positionInArray];
  return peopleIndex["full address"]
}

console.log(getAddress(0));

// Task 7
// Show a profile for each person in the ul with id "profiles"
// A profile should include their name, age, and their image >>>> pull objects from the array and display them in the webpage 
// >>>> Finding the object and place it in the DOM
// Remember, break this down and tackle it step by step!
// use their IDs as a starting point.

a

function displayUsers () {
  const people = document.getElementById("profiles");

  for (let i=0; i<SOCBook.data.people.length; i++){
    const person = SOCBook.data.people[i];

    const profile = document.createElement("div");
    
    const name = document.createElement("p");
    name.textContent = `Name: ${person.name}`

    const age  = document.createElement("p");
    age.textContent = `Age: ${person.age}`;

    const image = document.createElement("img");
    image.src = person.picture;

    profile.appendChild(name);
    profile.appendChild(age);
    profile.appendChild(image);

    people.appendChild(profile);
   }
  }
displayUsers();