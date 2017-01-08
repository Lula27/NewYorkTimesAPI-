// Linked to html page-tested! 

//  Retreiving NYT API using AJAX & JSON
// Creating variables to access data 



$(document).ready(function(nytapi) { 

	

	$("#searchButton").click(function(search) {

		search.preventDefault()

		// Pick up search terms written in form 
		var searchTerm = $("#searchTerm").val().trim(); 

		// Pick up number of results selected by user
		nResults = $("#recordsRetrieve").val(); 

		// Pick up start/end year
		startYear = $("#startYear").val().trim();

		endYear = $("#endYear").val().trim();

		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

		url += '?' + $.param({
			'api-key': "9f47960a4f5d4a55b1a483a4b1a9524d",
			'q': "searchTerm"
			
		});
		$.ajax({
			url: url, 
			method: 'GET',
		}).done(function(result) {
			console.log(result);
		// $('#output').html(JSON.stringify(result)); prints object onto page
		}).fail(function(err) {
			throw err; 
		});

		// Test to see if values are working 
		// $("#output").html(searchTerm);  
		// $("#output").html(nResults);
		// $("#output").html(endYear);  
		console.log(url); 




	}); 
	

	// Create search query using dog as main parameter
	// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

	// url += '?' + $.param({
	// 	'api-key': "9f47960a4f5d4a55b1a483a4b1a9524d",
	// 	'q': "dogs",
	// 	'begin_date': "20000917",
	// 	'end_date': "20161229",
	// 	'sort': "newest"
	// });
	// $.ajax({
	// 	url: url,
	// 	method: 'GET',
	// }).done(function(result) { 
	// 	console.log(result);
	// }).fail(function(err) {
	//   throw err; 
	// });

	



});
	

