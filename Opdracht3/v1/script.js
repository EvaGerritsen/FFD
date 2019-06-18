var url = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';

var request = new XMLHttpRequest();
console.log("request", request);

var main = document.querySelector("main");
request.open('GET', url);
request.responseType = 'json';
request.send();

////////////////////////////////////////////////

// //functie wordt aangemaakt waarbij de tekst 'chosen' bij de tekst te voorschijn komt
// function change() {
//
//     //maakt een array van de buttons
//     var buttons = document.querySelectorAll('#buttons div');
//
//     //variable i wordt aangemaakt
//     var i;
//
//     //Loop om alle buttontekstjes terug te zetten naar orgineel
//     for (i = 0; i < buttons.length; i++) {
//         console.log(buttons[i]);
//         buttons[i].textContent = buttons[i].id;
//     }
//
//     //Wanneer er geklikt zie je de juiste image en chosen staan
//     this.textContent = ('You choose ' + this.id);
//     document.querySelector("img").src = "img/" + this.id + '.jpg';
// }
//
// //maakt een array van de buttons
// var buttons = document.querySelectorAll('#buttons div');
//
// //variable i wordt aangemaakt
// var i;
//
// //loop die de functie 'change' laat lopen
// for (i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", change);
// }

////////////////////////////////////////////////////


//load listener van het XMLHttpRequest
//wordt uitgevoerd als de json data geladen is
request.addEventListener("load", function(){

  var data = request.response;
  for(var i = 0; i < data.length; i++) {
      var film = data[i];

      var div = document.createElement("div");
      var filmCover = document.createElement('img');
      var titel = document.createElement("h2");
      var simplePlot = document.createElement("p");


      filmCover.src = film.cover;
      titel.textContent = film.title;
      simplePlot.textContent = film.simple_plot;

 //zorgt dat de elementen in een div komen te staan
      div.appendChild(filmCover);
      div.appendChild(titel);
      div.appendChild(simplePlot);

  //zet de divs in de DOM
      main.appendChild(div);
  }

});

// var showHorror = document.getElementById("Horror");
// var showThriller = document.getElementById("Thriller");
// var showDrama = document.getElementById("Drama");

function showMore(e) {
  let allDivs = document.querySelectorAll("div");
  for (let i = 0; i < allDivs.length; i++) {
    if (e.keyCode === 32 || e.target.id === "Thriller") {
      e.preventDefault();
    }
  }
}
