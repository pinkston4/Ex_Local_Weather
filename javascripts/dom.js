"use strict";

let $ = require('jquery'),
	db = require('./db-interaction');

function nashData(data) {
	$('#weatherWrap').html(`<h3>${data.name}</h3>
		<ul><li>description: ${data.weather[0].description}</li>
		<li>Temp: ${data.main.temp} degrees Fahrenheit</li>
		<li>Wind speed: ${data.wind.speed}mph</li></ul>`);
} 

function memphData(data) {
	$('#weatherWrap').html(`<h3>${data.name}</h3>
		<ul><li>description: ${data.weather[0].description}</li>
		<li>Temp: ${data.main.temp} degrees Fahrenheit</li>
		<li>Wind speed: ${data.wind.speed}mph</li></ul>`);
}

function knoxData(data) {
	$('#weatherWrap').html(`<h3>${data.name}</h3>
		<ul><li>description: ${data.weather[0].description}</li>
		<li>Temp: ${data.main.temp} degrees Fahrenheit</li>
		<li>Wind speed: ${data.wind.speed}mph</li></ul>`);
}

function chattData(data) {
	$('#weatherWrap').html(`<h3>${data.name}</h3>
		<ul><li>description: ${data.weather[0].description}</li>
		<li>Temp: ${data.main.temp} degrees Fahrenheit</li>
		<li>Wind speed: ${data.wind.speed}mph</li></ul>`);
}

module.exports = {nashData, memphData, knoxData, chattData};