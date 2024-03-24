const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'There was a knock at the door. Since it was roughly 14 fahrenheit outside, Bob wasn\'t expecting any vistors. There at the door, however, was a :insertx: wearing a :inserty:. ":insertz:," said the :insertx:. "I\'m surprised your porch was able to handle 700 pounds."';
const insertX = ["walrus", "sea lion", "manatee"];
const insertY = ["top hat", "trenchcoat", "fake mustache"];
const insertZ = ["Good day", "Greetings", "Salutations"];

randomize.addEventListener('click', result);

function result() {
  var newStory = storyText;
  var itemX = randomValueFromArray(insertX);
  var itemY = randomValueFromArray(insertY);
  var itemZ = randomValueFromArray(insertZ);

  newStory = storyText.replace(":insertx:", itemX);
  newStory = newStory.replace(":insertx:", itemX);
  newStory = newStory.replace(":inserty:", itemY);
  newStory = newStory.replace(":insertz:", itemZ);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(700 / 14) + " stone";
    const temperature =  Math.round(((14-32) *5)/9) + " centigrade";

    newStory = newStory.replace("700 pounds", weight);
    newStory = newStory.replace("14 fahrenheit", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}