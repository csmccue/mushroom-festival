// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './render-utils.js';

const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');
// initialize state

let mushroomCount = 3;

const friendData = [
    {
        name: 'Erich',
        satisfaction: 2,
    },
    {
        name: 'Sarah',
        satisfaction: 3,
    },
    {
        name: 'Missael',
        satisfaction: 1,
    },
    {
        name: 'Soraya',
        satisfaction: 2,
    },
];

addMushroomButton.addEventListener('click', () => {
    if (Math.random() > 0.5) {
        alert('found a mushroom!');

        mushroomCount++;
        displayMushrooms();
    } else {
        alert('no luck!');
    }
});

addFriendButton.addEventListener('click', () => {
    // get the name from the input
    const friendName = friendInputEl.value;
    // create a new friend object
    const newFriend = {
        name: friendName,
        satisfaction: 1,
    };
    // push it into the friends state array, passed in as an argument
    friendData.push(newFriend);
    // reset the input
    friendInputEl.textContent = '';
    // display all the friends (use a function here)
    displayFriends();
});

function displayFriends() {
    // clear out the friends in DOM
    friendsEl.textContent = '';
    // for each friend in state . . .
    for (let friend of friendData) {
        // use renderFriend to make a friendEl
        const newFriendEl = renderFriend(friend);
    //  add an event listener to each friend
    //  and if the friend's satisfaction level is below 3 and you have mushrooms left

        // this is a clickable list, so . . .
        // add an event listener to each friend
        newFriendEl.addEventListener('click', () => {
        // and if the friend's satisfaction level is below 3 and you have mushrooms left
            if (mushroomCount > 0 && friend.satisfaction < 3) {
        // increment the friends satisfaction and decrement your mushrooms
                mushroomCount--;
                friend.satisfaction++;
            }
        // then display your friends and mushrooms with the updated state     
            displayFriends();
            displayMushrooms();
        });
        // append the friendEl to the friends list in DOM
        friendsEl.append(newFriendEl);
    }
}

function displayMushrooms() {
    // clear out the mushroom div
    mushroomsEl.textContent = '';
    for (let i = 0; i < mushroomCount; i++) {
        // for each mushroom in your mushroom state, render and append a mushroom
        const newMush = renderMushroom(mushroomsEl);
        mushroomsEl.append(newMush);

    }
}

displayFriends();
displayMushrooms();
