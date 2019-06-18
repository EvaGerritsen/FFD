/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
//
//function werp() {
//
//    //variabele die een random getal aan je geeft
//    var randomNum = Math.floor((Math.random() * 3)) + 1;
//
//    //lijst met alle afbeeldingen
//    var imgArray = ["LIVINGROOM.jpg", "BEDROOM.jpg", "BATHROOM.jpg"];
//
//    //kiest de afbeelding uit de array om te laten zien
//    var artImg = imgArray[randomNum - 1];
//    console.log(artImg);
//
//    //vervangt de afbeelding wanneer de functie is aangeroepen
//    document.querySelector("img").src = "img/" + artImg;
//}
//
////laat de code lopen wanneer er een toets word ingedrukt
//document.querySelector("body").addEventListener("keydown", werp);


//functie wordt aangemaakt waarbij de tekst 'chosen' bij de tekst te voorschijn komt
function change() {

    //maakt een array van de buttons
    var buttons = document.querySelectorAll('#buttons div');

    //variable i wordt aangemaakt
    var i;

    //Loop om alle buttontekstjes terug te zetten naar orgineel
    for (i = 0; i < buttons.length; i++) {
        console.log(buttons[i]);
        buttons[i].textContent = buttons[i].id;
    }

    //Wanneer er geklikt zie je de juiste image en chosen staan
    this.textContent = ('This is the ' + this.id);
    document.querySelector("img").src = "img/" + this.id + '.jpg';
}


//maakt een array van de buttons
var buttons = document.querySelectorAll('#buttons div');

//variable i wordt aangemaakt
var i;

//loop die de functie 'change' laat lopen
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", change);
}
