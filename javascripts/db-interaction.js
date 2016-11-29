"use strict";

let $ = require('jquery'),
	weather = require('./weatherGetter'),
	firebase = require('./firebaseConfig'),
	weatherData = require('./dom'),
	newsData = require('./domNews'),
	news = require('./newsGetter');

//-------------------------------------------------
//getting current weather
//-------------------------------------------------
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

//-------------------------------------------
//user zip code search
//--------------------------------------------
function getWeathInput(input) {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: `http://api.openweathermap.org/data/2.5/weather?zip=${input},usa&units=imperial&APPID=${weather().key}`
		}).done(function(data){
			resolve(data);
			console.log(data);
			weatherData.inputData(data);
		});
	});
}


//------------------------------------------------------------
//getting news
//--------------------------------------------------------
function getUSA() {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: `https://newsapi.org/v1/articles?source=usa-today&sortBy=latest&apiKey=${news().key}`
		}).done(function(data) {
			resolve(data);
			console.log(data);
			newsData.usaToday(data);
		});
	});
}

function getAP() {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: `https://newsapi.org/v1/articles?source=associated-press&sortBy=latest&apiKey=${news().key}`
		}).done(function(data) {
			resolve(data);
			console.log(data);
			newsData.ap(data);
		});
	});
}

function getNewsweek() {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: `https://newsapi.org/v1/articles?source=newsweek&sortBy=latest&apiKey=${news().key}`
		}).done(function(data) {
			resolve(data);
			console.log(data);
			newsData.reuters(data);
		});
	});
}

function getReuters() {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: `https://newsapi.org/v1/articles?source=reuters&sortBy=latest&apiKey=${news().key}`
		}).done(function(data) {
			resolve(data);
			console.log(data);
			newsData.newsweek(data);
		});
	});
}

	
module.exports = {getWeathNash, getWeathMemph, getWeathKnox, getWeathChatt, getWeathInput, getUSA, getAP, getReuters, getNewsweek};
