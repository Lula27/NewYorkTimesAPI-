// Linked to html page-tested! 

//  Retreiving NYT API using AJAX & JSON
// Creating variables to access data 

$(document).ready(function() { 

 


	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

	url += '?' + $.param({
		'api-key': "9f47960a4f5d4a55b1a483a4b1a9524d"
	});
	$.ajax({
		url: url, 
		method: 'GET',
	}).done(function(result) {
		console.log(result);
	}).fail(function(err) {
		throw err; 
	});
	
	
});
	

	