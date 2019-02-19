'use strict'



var salmonTable = document.getElementById("Monster")

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
salmonTable.storeHours = [];


//pike sales
function Salmon(location, min, max, avgCookies,) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.totalCookiesPerDay = 0;
  this.cookiesPerHour = [];
  this.dailyTotals = 0;
  salmonTable.storeHours.push(this);

}
salmonTable.storeHours = []; 

Salmon.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);
  salmonTable.appendChild(trEl);

  for(var i = 0; i < hours.length; i++) {
  var randomNumberCookies = Math.round( (Math.round( Math.random() * (this.max - this.min) + this.min )) * this.avgCookies);

  tdEl = document.createElement('td');
  tdEl.textContent = randomNumberCookies;
  trEl.appendChild(tdEl);
  this.cookiesPerHour.push(randomNumberCookies);
  }
}

//create header 
Salmon.renderHeader = function() {
  var headerRow = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = '';
  headerRow.appendChild(thEl);
  for(var i = 0; i < hours.length; i++) {
  var thEl = document.createElement('th');
  thEl.textContent = hours[i];
  headerRow.appendChild(thEl);
  } 
  salmonTable.prepend(headerRow);
};

//create Footer
Salmon.renderFooter = function() {
  var footerFow = document.createElement('tr');
  var dailyTotals = [];
  for( var i = -1; i < hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = footerFow[i];
    footerFow.appendChild(thEl);
  }
  salmonTable.append(footerFow);
};

//placing values
var pike = new Salmon('1st and Pike', '23', '65', '6.3');
var seatac = new Salmon('SeaTac', '3', '24', '1.2');
var seattleCenter = new Salmon('Seattle Center', '11', '24', '3.7');
var capHill = new Salmon('Capitol Hill', '20', '38', '2.3');
var alki = new Salmon('Alki', '2', '16', '4.6');


//calling rules
Salmon.renderHeader();
pike.render();
seatac.render();
seattleCenter.render();
capHill.render();
alki.render();
Salmon.renderFooter();







/*
var pike = {
  location: '1st and pike',
  minCrust: 23,
  maxCrust: 65,
  avgCookies: 6.3,
  randomNumber: 0,
  avgCookieSoldPerHour: [],
  totalDailySales: 0,
  randomCust: function() {
    return Math.round(Math.random() * (this.maxCrust - this.minCrust) + this.minCrust);
  },
  calcAvgCookiesSold: function() {
    for (var i = 0; i < hours.length; i++) {
      var avgCookiesSold = Math.floor(this.randomCust() * this.avgCookies);
      this.avgCookieSoldPerHour.push(avgCookiesSold);
    }
  },
  createPikeTotalDailySales: function() {
    for (var i = 0; i < this.avgCookieSoldPerHour.length; i++) {
      this.totalDailySales += this.avgCookieSoldPerHour[i];
    }
    console.log(this.totalDailySales);
  
},
render: function() {
  var pikeElement = document.getElementById("pike");
  for (var i = 0; i < hours.length; i++) {
   //debugger;
    var liEl = document.createElement('li');
    liEl.textContent = `${hours[i]}: ${this.avgCookieSoldPerHour[i]} cookies`;
    pikeElement.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = `total: ${this.totalDailySales} cookies`;
  pikeElement.appendChild(liEl);
  }
};
pike.calcAvgCookiesSold();
pike.createPikeTotalDailySales();
pike.render();
console.log(pike.avgCookieSoldPerHour);


//Seatac sales
var seaTac = {
  location: 'SeaTac Airport',
  minCrust: 3,
  maxCrust: 24,
  avgCookies: 1.2,
  randomNumber: 0,
  avgCookieSoldPerHour: [],
  totalDailySales: 0,
  randomCust: function() {
    return Math.round(Math.random() * (this.maxCrust - this.minCrust) + this.minCrust);
  },
  calcAvgCookiesSold: function() {
    for (var i = 0; i < hours.length; i++) {
      var avgCookiesSold = Math.floor(this.randomCust() * this.avgCookies);
      this.avgCookieSoldPerHour.push(avgCookiesSold);
    }
  },
  createSeaTacDailySales: function() {
    for (var i = 0; i < this.avgCookieSoldPerHour.length; i++) {
      this.totalDailySales += this.avgCookieSoldPerHour[i];
    }
    console.log(this.totalDailySales);
  },
  render: function() {
    var seatacElement = document.getElementById('sea-tac');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.avgCookieSoldPerHour[i]} cookies`;
      seatacElement.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalDailySales} cookies`;
    seatacElement.appendChild(liEl);
  }
};
seaTac.calcAvgCookiesSold();
seaTac.createSeaTacDailySales();
seaTac.render();
console.log(seaTac.avgCookieSoldPerHour);


//seacenter 

var seattleCenter = {
  location: 'Seattle Center',
  minCrust: 11,
  maxCrust: 24,
  avgCookies: 3.7,
  randomNumber: 0,
  avgCookieSoldPerHour: [],
  totalDailySales: 0,
  randomCust: function() {
    return Math.round(Math.random() * (this.maxCrust - this.minCrust) + this.minCrust);
  },
  calcAvgCookiesSold: function() {
    for (var i = 0; i < hours.length; i++) {
      var avgCookiesSold = Math.floor(this.randomCust() * this.avgCookies);
      this.avgCookieSoldPerHour.push(avgCookiesSold);
    }
  },
  createSeaCenterTotalDailySales: function() {
    for (var i = 0; i < this.avgCookieSoldPerHour.length; i++) {
      this.totalDailySales += this.avgCookieSoldPerHour[i];
    }
    console.log(this.totalDailySales);
  },
  render: function() {
    var seacenElement = document.getElementById('seattle-center');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.avgCookieSoldPerHour[i]} cookies`;
      seacenElement.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalDailySales} cookies`;
    seacenElement.appendChild(liEl);
  }
};
seattleCenter.calcAvgCookiesSold();
seattleCenter.createSeaCenterTotalDailySales();
seattleCenter.render();
console.log(seattleCenter.avgCookieSoldPerHour);

//capital Hill
var capHill = {
  location: 'Seattle Center',
  minCrust: 20,
  maxCrust: 38,
  avgCookies: 2.3,
  randomNumber: 0,
  avgCookieSoldPerHour: [],
  totalDailySales: 0,
  randomCust: function() {
    return Math.round(Math.random() * (this.maxCrust - this.minCrust) + this.minCrust);
  },
  calcAvgCookiesSold: function() {
    for (var i = 0; i < hours.length; i++) {
      var avgCookiesSold = Math.floor(this.randomCust() * this.avgCookies);
      this.avgCookieSoldPerHour.push(avgCookiesSold);
    }
  },
  createCapHillTotalDailySales: function() {
    for (var i = 0; i < this.avgCookieSoldPerHour[i]; i++) {
      this.totalDailySales += this.avgCookieSoldPerHour[i];
    }
    console.log(this.totalDailySales);
  },
  render: function() {
    var capHillElement = document.getElementById('CapHill');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.avgCookieSoldPerHour[i]} cookies`;
      capHillElement.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalDailySales} cookies`;
    capHillElement.appendChild(liEl);
  }
};
capHill.calcAvgCookiesSold();
capHill.createCapHillTotalDailySales();
capHill.render();
console.log(capHill.avgCookieSoldPerHour);


//Alki

var alki = {
  location: 'Alki',
  minCrust: 2,
  maxCrust: 16,
  avgCookies: 4.6,
  randomNumber: 0,
  avgCookieSoldPerHour: [],
  totalDailySales: 0,
  randomCust: function() {
    return Math.round(Math.random() * (this.maxCrust - this.minCrust)+ this.minCrust);
  },
  calcAvgCookiesSold: function() {
    for (var i = 0; i < hours.length; i++) {
      var avgCookiesSold = Math.floor(this.randomCust() * this.avgCookies);
      this.avgCookieSoldPerHour.push(avgCookiesSold);
    }
  },
  createAlkiTotalDailySales: function() {
    for (var i = 0; i < this.avgCookieSoldPerHour.length; i++) {
      this.totalDailySales += this.avgCookieSoldPerHour[i];
    }
    console.log(this.totalDailySales);
  },
  render: function() {
    var alkiElement = document.getElementById('alki');
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.avgCookieSoldPerHour[i]} cookies`;
      alkiElement.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalDailySales} cookies`;
    alkiElement.appendChild(liEl);
  }
};
alki.calcAvgCookiesSold();
alki.createAlkiTotalDailySales();
alki.render();
console.log(alki.avgCookieSoldPerHour);
*/