var header = document.querySelector('header');
var section = document.querySelector('section');

//store URL of the JSON we want to retrieve in a variable
var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

//To create a request, we need to create a new request object instance from the XMLHttpRequest constructor, using the new keyword
var request = new XMLHttpRequest();

//Now we need to open a new request using the open() method
request.open('GET', requestURL);

//setting the responseType to JSON, so that XHR knows that the server will be returning JSON
request.responseType = 'JSON';
request.send();

//waiting for the response to return from the server, then dealing with it.
request.onload = function() {
  var superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}
//Here we are storing the response to our request (available in the response property) in a variable called superHeroes;

function populateHeader(jsonObj) {
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['squadName'];
  header.appendChild(myH1);

  var myPara = document.createElement('p');
  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
  header.appendChild(myPara);
}

//creates and displays the superhero cards
//store the members property of the JavaScript object in a new variable.
//This array contains multiple objects that contain the information for each hero.
function showHeroes(jsonObj) {
  var heroes = jsonObj['members'];

//use a for loop to loop through each object in the array
  for (var i = 0; i < heroes.length; i++) {
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myList = document.createElement('ul');

//Fill the three paragraphs with their secretIdentity, age, and a line saying "Superpowers:" to introduce the information in the list
    myH2.textContent = heroes[i].name;
    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
    myPara2.textContent = 'Age: ' + heroes[i].age;
    myPara3.textContent = 'Superpowers:';

//Store the powers property in another new variable called superPowers
//this contains an array that lists the current hero's superpowers
    var superPowers = heroes[i].powers;
    //Use another for loop to loop through the current hero's superpowers
    //put the listItem inside the <ul> element (myList) using appendChild()
    for (var j = 0; j < superPowers.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
