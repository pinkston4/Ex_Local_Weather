"use strict";
let $ = require('jquery'),
	db = require("./db-interaction"),
	user = require('./userLogin');


$("#auth-btn").click( () => {
  console.log("clicked auth");
  user.logInGoogle()
  .then(function(result) {
    let user = result.user;
    console.log("logged in user", user.uid);
  });
});

$('#logout').click( () => {
  console.log("clicked logout");
  user.logOut();
});

$('#nashville').click( () => { $('.news').hide(); db.getWeathNash();});
$('#memphis').click( () => { $('.news').hide(); db.getWeathMemph();}); 
$('#knox').click( () => {$('.news').hide(); db.getWeathKnox();});
$('#chatt').click( () => {$('.news').hide();db.getWeathChatt();});

$('#zip').click( () => {
  let input = $('#input').val();
  if (input !== '') {
    $('.news').hide();
    db.getWeathInput(input);
  } 
});

$('#usa').click( () => {
  $('.news').show();
  db.getUSA();
});
$('#AP').click( () => {
   $('.news').show();
   db.getAP();
});
$('#reuters').click( () => {
   $('.news').show();
   db.getReuters();
});
$('#newsweek').click( () => {
   $('.news').show();
   db.getNewsweek();
});