// Linked to html page-tested! 

//  Retreiving NYT API using AJAX & JSON
// Creating variables to access data 

$(document).ready(function() { 


// Log result 
// console.log(result); 
// console.log(response); 
// console.log(result.response.docs[0]);


	// With click on search button 
	$("#searchButton").on("click", function() { 
			
		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; 
		url += '?' + $.param({
		'api-key': "9f47960a4f5d4a55b1a483a4b1a9524d"
		}); 


	// AJAX call 
		$.ajax({ 
			url: url,
			method: 'GET', 
		}).done(function(result) {  


			var article = result.response.docs[0, 1, 2]; 

			// $("#output").append(article); 

			 console.log(article);
			 // console log works with button push!  

			 $("<div>").attr("src", url);
			 // results in Error 429 

			 $("#output").prepend(article); 

		});

	});  
	
});
	

	