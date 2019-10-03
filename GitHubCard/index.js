/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/MelodyRackham').then(response => {
  console.log(response.data);
  const myInfo = response.data;
  const cards = document.querySelector('.cards');
  const newCard = gitCard(myInfo);
  cards.appendChild(newCard);
});

// .catch(err => {console.log("oops! You got an error", error)});

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

const cards = document.querySelector('.cards');

function gitCard(myInfo) {
  // define new elements
  const card = document.createElement('div');
  const newImage = document.createElement('img');
  const cardInfo = document.createElement('div');
  const usersName = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const gitHubHandle = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  // set up structure of elements
  card.appendChild(newImage);
  card.appendChild(cardInfo);
  cardInfo.appendChild(usersName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(gitHubHandle);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  // set class names
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  usersName.classList.add('name');
  userName.classList.add('username');

  // set text content
  newImage.src = myInfo.avatar_url;
  usersName.textContent = myInfo.name;
  userName.textContent = myInfo.login;
  location.textContent = `Location: ${myInfo.location}`;
  profile.textContent = `Profile: ${myInfo.html_url}`;
  followers.textContent = `Followers: ${myInfo.followers}`;
  following.textContent = `Following: ${myInfo.following}`;
  bio.textContent = `Bio: ${myInfo.bio}`;

  return card;
}

// followers array

const followersArray = [
  'HarrisonMS',
  'LoganMReber',
  'bradzickafoose',
  'normabunton',
  'SeeStephSay',
  'jasminekh96',
  'JustinTrombley96',
  'nattroj',
];

followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`).then(response => {
    console.log(response.data);
    const homieInfo = response.data;
    const cards = document.querySelector('.cards');
    const newCard = gitCard(homieInfo);
    cards.appendChild(newCard);
  });
});
