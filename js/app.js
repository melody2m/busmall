'use strict';

Prod.allProds = [];
var slideCount = 0;
var foundNumbers = [];

function Prod(name, filepath) {
    this.name = name;
    this.filepath = filepath;
    this.displays = 0;
    this.clicks = 0;
    Prod.allProds.push(this);
} 

new Prod('bag', 'img/bag.jpg');
new Prod('banana', 'img/banana.jpg');
new Prod('bathroom', 'img/bathroom.jpg');
new Prod('boots', 'img/boots.jpg');
new Prod('breakfast', 'img/breakfast.jpg');
new Prod('bubblegum', 'img/bubblegum.jpg');
new Prod('chair', 'img/chair.jpg');
new Prod('cthulhu', 'img/cthulhu.jpg');
new Prod('dog-duck', 'img/dog-duck.jpg');
new Prod('dragon', 'img/dragon.jpg');
new Prod('pen', 'img/pen.jpg');
new Prod('pet-sweep', 'img/pet-sweep.jpg');
new Prod('scissors', 'img/scissors.jpg');
new Prod('shark', 'img/shark.jpg');
new Prod('sweep', 'img/sweep.png');
new Prod('tauntaun', 'img/tauntaun.jpg');
new Prod('unicorn', 'img/unicorn.jpg');
new Prod('usb', 'img/usb.gif');
new Prod('water-can', 'img/water-can.jpg');
new Prod('wine-glass', 'img/wine-glass.jpg');

var prod1 = document.getElementById('prod1');
var prod2 = document.getElementById('prod2');
var prod3 = document.getElementById('prod3');

function renderList(){
    clickArea.removeEventListener('click', randomProd);

    var list = document.getElementById('list');

    for (var i = 0; i < Prod.allProds.length; i++){
        var newLi = document.createElement('li');
        newLi.textContent = Prod.allProds[i].name + ": " + Prod.allProds[i].displays + " displays, " + Prod.allProds[i].clicks + " clicks";
        console.log(list)
        list.appendChild(newLi);
    }
}

function randomProd(event) {
    if (foundNumbers.length === 6){
        foundNumbers.splice(0, 3);
    }

    var randomProd = Math.floor(Math.random() * Prod.allProds.length);
    for (var i = 0; i < foundNumbers.length; i++){
        while (randomProd === foundNumbers[i]){
            randomProd = Math.floor(Math.random() * Prod.allProds.length);
        }
    }
    foundNumbers.push(randomProd);
    Prod.allProds[randomProd].displays++;

    prod1.src = Prod.allProds[randomProd].filepath;
    prod1.title = Prod.allProds[randomProd].name;
    prod1.alt = Prod.allProds[randomProd].name;

    var randomProd2 = Math.floor(Math.random() * Prod.allProds.length);
    for (var i = 0; i < foundNumbers.length; i++){
        while (randomProd2 === foundNumbers[i]){
            randomProd2 = Math.floor(Math.random() * Prod.allProds.length);
        }
    }
    foundNumbers.push(randomProd2);
    Prod.allProds[randomProd2].displays++;

    prod2.src = Prod.allProds[randomProd2].filepath;
    prod2.title = Prod.allProds[randomProd2].name;
    prod2.alt = Prod.allProds[randomProd2].name;

    var randomProd3 = Math.floor(Math.random() * Prod.allProds.length);
    for (var i = 0; i < foundNumbers.length; i++){
        while (randomProd3 === foundNumbers[i]){
            randomProd3 = Math.floor(Math.random() * Prod.allProds.length);
        }
    }
    foundNumbers.push(randomProd3);
    Prod.allProds[randomProd3].displays++;

    prod3.src = Prod.allProds[randomProd3].filepath;
    prod3.title = Prod.allProds[randomProd3].name;
    prod3.alt = Prod.allProds[randomProd3].name;

    if (slideCount > 0) {
        for (var i = 0; i < Prod.allProds.length; i++){
            if (event.target.title === Prod.allProds[i].name){
                Prod.allProds[i].clicks++;
            }  
        }
    }
    slideCount++;
    if (slideCount > 25){
        renderList();
    }
}


randomProd();

clickArea.addEventListener('click', randomProd);

