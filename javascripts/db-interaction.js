"use strict";

let $ = require('jquery'),
	weather = require('./weatherGetter'),
	firebase = require('./firebaseConfig'),
	weatherData = require('./dom.js');

function getWeathNash() {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: `http://api.openweathermap.org/data/2.5/weather?zip=37203,usa&units=imperial&APPID=${weather().key}`
		}).done(function(data){
			resolve(data);
			console.log(data);
			weatherData.nashData(data);
		});
	});
}

function getWeathMemph() {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: `http://api.openweathermap.org/data/2.5/weather?zip=38103,usa&units=imperial&APPID=${weather().key}`
		}).done(function(data){
			resolve(data);
			console.log(data);
			weatherData.memphData(data);
		});
	});
}

function getWeathKnox() {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: `http://api.openweathermap.org/data/2.5/weather?zip=37909,usa&units=imperial&APPID=${weather().key}`
		}).done(function(data){
			resolve(data);
			console.log(data);
			weatherData.knoxData(data);
		});
	});
}

function getWeathChatt() {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: `http://api.openweathermap.org/data/2.5/weather?zip=37402,usa&units=imperial&APPID=${weather().key}`
		}).done(function(data){
			resolve(data);
			console.log(data);
			weatherData.chattData(data);
		});
	});
}
	
module.exports = {getWeathNash, getWeathMemph, getWeathKnox, getWeathChatt};
