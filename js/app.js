// Constructor function for cat instances
var Cat = function(name, imageURL, counterID) {
    this.name = name;
    this.imageURL = imageURL;
    this.counterID = counterID;
};

// Render the html for each cat instance
Cat.prototype.renderHTML = function() {
    var catDiv = document.createElement('div');
    catDiv.setAttribute('class', 'center');
    document.querySelector('.flex-container').appendChild(catDiv);
    var h2 = document.createElement('h2');
    var nameText = document.createTextNode(this.name);
    h2.appendChild(nameText);
    catDiv.appendChild(h2);
    var img = document.createElement('img');
    img.setAttribute('src', this.imageURL);
    img.setAttribute('id', this.name);
    img.setAttribute('alt', 'cat');
    catDiv.appendChild(img);
    var h3 = document.createElement('h3');
    var counterText = document.createTextNode('Click this Cat to Play!');
    h3.setAttribute('id', this.counterID);
    h3.appendChild(counterText);
    catDiv.appendChild(h3);
};

Cat.prototype.clickCounter = function () {
    var catImage = document.getElementById(this.name);
    var counter = document.getElementById(this.counterID);
    var numClicks = 0;

    catImage.addEventListener('click', function() {
        numClicks += 1;
        counter.textContent = 'Number of Clicks: ' + numClicks;
    });
};

var cutie = new Cat('Cutie', 'img/cat-1.jpg', 'cat-1');
cutie.renderHTML();
cutie.clickCounter();

var sneaky = new Cat('Sneaky', 'img/cat-2.jpg', 'cat-2');
sneaky.renderHTML();
sneaky.clickCounter();
