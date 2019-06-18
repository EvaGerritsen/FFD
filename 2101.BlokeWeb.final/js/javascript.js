/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//code voor het sorteer en filter uitschuiven
//maakt een variable aan voor de button
var button = document.querySelector('#start');
console.log(button)

//maakt een variable aan voor het uitschuiven
var form = document.getElementById('uitschuif');
console.log(form)

//haalt de function uit de code
function klapUit() {
    form.classList.toggle('groei');
    console.log('function')
}

//zorgt dat de functie uitklapt wanneer er op geklikt wordt
button.addEventListener('click', klapUit);


//code voor de download button
//maakt een variable aan voor de button
var uploadbutton = document.querySelector('.upload');
console.log(uploadbutton)

//geeft de functie
function downloaden() {
    this.classList.toggle('uploadoff')
    console.log(this)
}

//zorgt dat de functie veranderd wanneer er op geklikt wordt
uploadbutton.addEventListener('click', downloaden);

