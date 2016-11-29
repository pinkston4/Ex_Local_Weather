"use strict";

let $ = require('jquery'),
	db = require('./db-interaction');
	

function nashData(data) {
	let sunrise = new Date(data.sys.sunrise*1000);
	let sunset = new Date(data.sys.sunset*1000);
	$('#weatherWrap').html(`<h3>${data.name}</h3>
		<h5>Current Weather Conditions</h5>
		<ul><li>description: ${data.weather[0].description}</li>
		<li>Current Temp: ${data.main.temp} F</li>
		<li>Wind speed: ${data.wind.speed}mph</li>
		<li>Sunrise: ${sunrise}</li>
		<li>Sunset: ${sunset}</li>
		</ul>`);
} 

function memphData(data) {
	let sunrise = new Date(data.sys.sunrise*1000);
	let sunset = new Date(data.sys.sunset*1000);
	$('#weatherWrap').html(`<h3>${data.name}</h3>
		<h5>Current Weather Conditions</h5>
		<ul><li>description: ${data.weather[0].description}</li>
		<li>Current Temp: ${data.main.temp} F</li>
		<li>Wind speed: ${data.wind.speed}mph</li>
		<li>Sunrise: ${sunrise}</li>
		<li>Sunset: ${sunset}</li>
		</ul>`);
}

function knoxData(data) {
	let sunrise = new Date(data.sys.sunrise*1000);
	let sunset = new Date(data.sys.sunset*1000);
	$('#weatherWrap').html(`<h3>${data.name}</h3>
		<h5>Current Weather Conditions</h5>
		<ul><li>description: ${data.weather[0].description}</li>
		<li>Current Temp: ${data.main.temp} F</li>
		<li>Wind speed: ${data.wind.speed}mph</li>
		<li>Sunrise: ${sunrise}</li>
		<li>Sunset: ${sunset}</li>
		</ul>`);
}

function chattData(data) {
	let sunrise = new Date(data.sys.sunrise*1000);
	let sunset = new Date(data.sys.sunset*1000);
	$('#weatherWrap').html(`<h3>${data.name}</h3>
		<h5>Current Weather Conditions</h5>
		<ul><li>description: ${data.weather[0].description}</li>
		<li>Current Temp: ${data.main.temp} F</li>
		<li>Wind speed: ${data.wind.speed}mph</li>
		<li>Sunrise: ${sunrise}</li>
		<li>Sunset: ${sunset}</li>
		</ul>`);
}

function inputData(data) {
	let sunrise = new Date(data.sys.sunrise*1000);
	let sunset = new Date(data.sys.sunset*1000);
	$('#weatherWrap').html(`<h3>${data.name}</h3>
		<h5>Current Weather Conditions</h5>
		<ul><li>description: ${data.weather[0].description}</li>
		<li>Current Temp: ${data.main.temp} F</li>
		<li>Wind speed: ${data.wind.speed}mph</li>
		<li>Sunrise: ${sunrise}</li>
		<li>Sunset: ${sunset}</li>
		</ul>`);
}


module.exports = {nashData, memphData, knoxData, chattData, inputData};