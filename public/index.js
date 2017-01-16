'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

//Exercice 1:
function getDays(date1, date2){
  //Calcul de la différence de jours
  var diff =  date2.getTime() - date1.getTime();
  var divD = 1000*60*60*24;
  var days = Math.ceil((diff/divD));

  //Test 1 jour
  var divH = 1000*60*60;
  if( days == 0){
    days = 1;
  }
  return days;
}

function setPriceEx1(){
  //Initialisation variable
  var priceFinal;
  var Ptime;
  var Pdistance;
  var priceD;
  var priceKm;

  //Parcours de rentals
  for (var i = 0; i < rentals.length; i++) {
    //Stock Car id
    var carId = rentals[i].carId;
    //Récupération des prix de la voiture
    for (var j = 0; j < cars.length; j++) {
      if(carId == rentals[j].carId){
        priceD = cars[j].pricePerDay;
        priceKm = cars[j].pricePerKm;
      }
    }
    //Récupération du temps
    var datePickup = new Date(rentals[i].pickupDate);
    var dateReturn = new Date(rentals[i].returnDate);
    var days = getDays(datePickup, dateReturn);
    //Calcul des prix séparer
    Pdistance = rentals[i].distance * priceKm;
    Ptime = days * priceD;
    //Calcul et Assignation du prix final
    rentals[i].price = Pdistance + Ptime;
    console.log("Price = " + rentals[i].price + "\u20AC");
  }
}

function displayPrice(){
  for (var i = 0; i < rentals.length; i++) {
    console.log(rentals[i].price);
  }
}

//Exercice 2:
function setPriceEx2(){
  //Initialisation variable
  var priceFinal;
  var Ptime;
  var Pdistance;
  var priceD;
  var priceKm;

  //Parcours de rentals
  for (var i = 0; i < rentals.length; i++) {
    //Stock Car id
    var carId = rentals[i].carId;
    //Récupération des prix de la voiture
    for (var j = 0; j < cars.length; j++) {
      if(carId == rentals[j].carId){
        priceD = cars[j].pricePerDay;
        priceKm = cars[j].pricePerKm;
      }
    }
    //console.log(priceD);
    //Récupération du temps
    var datePickup = new Date(rentals[i].pickupDate);
    var dateReturn = new Date(rentals[i].returnDate);
    var days = getDays(datePickup, dateReturn);
    //Calcul des prix séparer
    Pdistance = rentals[i].distance * priceKm;
    Ptime = days * priceD;
    //Calcul et Assignation du prix final
    if(days > 1 && days <= 4){
      rentals[i].price = (Pdistance + Ptime) - ((Pdistance + Ptime)*0.1);
      console.log("Price = " + rentals[i].price + "\u20AC");
    }
    else if (days > 4 && days <= 10) {
      rentals[i].price = (Pdistance + Ptime) - ((Pdistance + Ptime)*0.3);
      console.log("Price = " + rentals[i].price + "\u20AC");
    }
    else if (days > 10) {
      rentals[i].price = (Pdistance + Ptime) - ((Pdistance + Ptime)* 0.5);
      console.log("Price = " + rentals[i].price + "\u20AC");
    }
    else{
      rentals[i].price = Pdistance + Ptime;
      console.log("Price = " + rentals[i].price + "\u20AC");
    }

  }
}

//Exercice 3:
function Exercice3(){
  for (var i = 0; i < rentals.length; i++) {
    var com = rentals[i].price - (rentals[i].price * 0.3);
    console.log("Comission =" + com + "\u20AC");
    //Récupération du temps
    var datePickup = new Date(rentals[i].pickupDate);
    var dateReturn = new Date(rentals[i].returnDate);
    var days = getDays(datePickup, dateReturn);
    //Application des répartition
    var insurance = com /2;
    var assistance = days * 1;
    var rest = com - insurance - assistance;
    //Ajout des prix
    rentals[i].commission.insurance = insurance;
    rentals[i].commission.assistance = assistance;
    rentals[i].commission.drivy = rest;
    console.log(rentals[i].commission);
  }
}

//Exercice 4
function Exercice4(){
  //Initialisation variable
  var priceFinal;
  var Ptime;
  var Pdistance;
  var priceD;
  var priceKm;

  //Parcours de rentals
  for (var i = 0; i < rentals.length; i++) {
    //Stock Car id
    var carId = rentals[i].carId;
    //Stock the deductible
    var arrayReduction = [];
    //Récupération des prix de la voiture
    for (var j = 0; j < cars.length; j++) {
      if(carId == rentals[j].carId){
        priceD = cars[j].pricePerDay;
        priceKm = cars[j].pricePerKm;
      }
    }
    //console.log(priceD);
    //Récupération du temps
    var datePickup = new Date(rentals[i].pickupDate);
    var dateReturn = new Date(rentals[i].returnDate);
    var days = getDays(datePickup, dateReturn);
    //Calcul des prix séparer
    Pdistance = rentals[i].distance * priceKm;
    Ptime = days * priceD;
    //Vérification de deductibleReduction
    var deductible = 0;
    if(rentals[i].options.deductibleReduction == true){
      deductible = 4 * days;
    }
    //Calcul et Assignation du prix final
    if(days > 1 && days <= 4){
      rentals[i].price = (Pdistance + Ptime) - ((Pdistance + Ptime)*0.1) + deductible;
      console.log("Price = " + rentals[i].price + "\u20AC");
    }
    else if (days > 4 && days <= 10) {
      rentals[i].price = (Pdistance + Ptime) - ((Pdistance + Ptime)*0.3) + deductible;
      console.log("Price = " + rentals[i].price + "\u20AC");
    }
    else if (days > 10) {
      rentals[i].price = (Pdistance + Ptime) - ((Pdistance + Ptime)* 0.5) + deductible;
      console.log("Price = " + rentals[i].price + "\u20AC");
    }
    else{
      rentals[i].price = Pdistance + Ptime;
      console.log("Price = " + rentals[i].price + "\u20AC") + deductible;
    }
    arrayReduction[i] = deductible;
  }
  return arrayReduction;
}

//Exercice 5
function Exercice5(){
  //Stock Reduction
  var arrayReduction = [];
  arrayReduction = Exercice4();

  for (var i = 0; i < rentals.length; i++) {
    //Test de la bonne location
    if(rentals[i].id == actors[i].rentalId){
      //Parcour de l'objet payement contenu dans actors
      for (var j = 0; j < actors[i].payment.length; j++) {
        //Debit driver
        if(actors[i].payment[j].who == "driver" && actors[i].payment[j].type == "debit" ){
          actors[i].payment[j].amount = rentals[i].price;
        }
        //Credit Owner
        else if (actors[i].payment[j].who == "owner" && actors[i].payment[j].type == "credit"){
          actors[i].payment[j].amount = rentals[i].price - (rentals[i].price*0.3); //minus com
        }
        //Insurance credit
        else if(actors[i].payment[j].who == "insurance" && actors[i].payment[j].type == "credit"){
          actors[i].payment[j].amount = rentals[i].commission.insurance;
        }
        //Assistance credit
        else if(actors[i].payment[j].who == "assistance" && actors[i].payment[j].type == "credit"){
          actors[i].payment[j].amount = rentals[i].commission.assistance;
        }
        //Drivy credit
        else if(actors[i].payment[j].who == "drivy" && actors[i].payment[j].type == "credit"){
          actors[i].payment[j].amount = rentals[i].commission.drivy; //+ arrayReduction[i]; // plus reductionAssusrance
        }
      }
      //Affichage des acteurs pour UNE reservation
      console.log(actors[i].payment);
    }
  }
}

//Exercice 6
function Exercice6(){

}


/*console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);*/

console.log(rentals);
console.log("\nExercice 1:");
setPriceEx1();
console.log("\nExercice 2:");
setPriceEx2();
console.log("\nExercice 3:");
Exercice3();
console.log("\nExercice 4:");
Exercice4();
console.log("\nExercice 5:");
Exercice5();
