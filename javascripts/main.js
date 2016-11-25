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

$('#nashville').click( () => {db.getWeathNash();});
$('#memphis').click( () => {db.getWeathMemph();}); 
$('#knox').click( () => {db.getWeathKnox();});
$('#chatt').click( () => {db.getWeathChatt();});