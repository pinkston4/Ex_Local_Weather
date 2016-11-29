"use strict";

let $ = require('jquery'),
	db = require('./db-interaction');

function usaToday(data) {
	$('#weatherWrap').html("");
	$('.news').html('');
	for(var i = 0; i < 4; i++) {
			$('#recent').append(`<div class="three columns">
					<img class="newsImg" src=${data.articles[i].urlToImage}>
					<h6>${data.articles[i].title}</h6>
					<a href="${data.articles[i].url}">go to article</a>
				</div>`);
	}
}

function ap(data) {
	$('#weatherWrap').html("");
	$('.news').html('');
	for(var i = 0; i < 4; i++) {
			$('#recent').append(`<div class="three columns">
					<img class="newsImg" src=${data.articles[i].urlToImage}>
					<h6>${data.articles[i].title}</h6>
					<a href="${data.articles[i].url}">go to article</a>
				</div>`);
	}
}

function reuters(data) {
	$('#weatherWrap').html("");
	$('.news').html('');
	for(var i = 0; i < 4; i++) {
			$('#recent').append(`<div class="three columns">
					<img class="newsImg" src=${data.articles[i].urlToImage}>
					<h6>${data.articles[i].title}</h6>
					<a href="${data.articles[i].url}">go to article</a>
				</div>`);
	}
}

function newsweek(data) {
	$('#weatherWrap').html("");
	$('.news').html('');
	for(var i = 0; i < 4; i++) {
			$('#recent').append(`<div class="three columns">
					<img class="newsImg" src=${data.articles[i].urlToImage}>
					<h6>${data.articles[i].title}</h6>
					<a href="${data.articles[i].url}">go to article</a>
				</div>`);
	}
}
module.exports = {usaToday, ap, reuters, newsweek};