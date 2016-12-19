// Linked to html page-tested! 

//  Retreiving NYT API using AJAX & JSON
// Creating variables to access data 

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; 
url += '?' + $.param({
	'api-key': "9f47960a4f5d4a55b1a483a4b1a9524d"
}); 

var article = $(this).data("article");

// AJAX call 
$.ajax({
	url: url,
	method: 'GET', 
}).done(function(result) {

// Log result 
console.log(result); 
// console.log(response); 
console.log(result.response.docs[4]); 
// Returns the following so we're in :) !
// copyright"Copyright (c) 2013 The New York Times Company.  All Rights Reserved." along with object arrays

// Prevent submit button from operating; allow user to hit enter instead of clicking button
event.preventDefault(); 

}); 

