/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/*     1. Gebruik de           querySelector om een element in je html te selecteren
2. Koppel een eventListener aan het element om een mouse-event te detecteren
3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen 

 Voor wat complexere microinteracties waar verschillende states elkaar moeten opvolgen kun je aan het eind van een transition of animation weer iets laten gebeuren. Gebruik hiervoor in Javascript de
    1. eventlistener: transitionend
    2. eventlistener: animationend
*/

////maakt een variable aan voor de button
var button =
    document.querySelector('#rating');
console.log(button)

//geeft de functie
function star() {
    this.classList.toggle('#rating')
    console.log(this)
}

//zorgt dat de functie veranderd wanneer er op geklikt wordt
button.addEventListener('click', star)


/*
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
    this.textContent = (this.id + ' CHOSEN');
    document.querySelector("img").src = "images/" + this.id + '.png';
} */
