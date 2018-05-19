//	Script:			enable-table-filters.js
//	Authors:		Jeff Shurtliff, Gene Ledbetter
//	Modified Date:	04 Apr 2018
//	Description:	Enable the ability to filter Jive tables with a free-form search field

// Define the valid space names where the script can be executed
jiveInstance = window.location.hostname;
if (jiveInstance == "community.rsa.com") {	
	udmPageID = "182180";
	demoPageID = "60180";
	nwoPageID = "184424";
} else if (jiveInstance == "rsa-preview.jiveon.com") {	
	udmPageID = "182180";
	demoPageID = "60180";
	nwoPageID = "184424";
} else if (jiveInstance == "rsa-preview2.jiveon.com") {	
	udmPageID = "182180";
	demoPageID = "60180";
	nwoPageID = "184424";
} else {
	console.log("Invalid Jive Instance Found");
}

// Filtering functionality for the UDM page
if ( (placeID == udmPageID) ) {
	console.log("Identified a space with table filtering enabled.");
	var filterFocus = "0";
	
	// Function to identify the selected filter type
	function updateFilterType() {
		var currentFilterType = document.getElementById("filterOptionList").value;
		filterFocus = "4";
		if (currentFilterType == "default") {
			filterFocus = "4";
			console.log("No table filter has been selected. Setting filter to Meta Key.");
		} else if (currentFilterType == "metaClass") {
			filterFocus = "0";
			console.log("The Meta Class table filter has been selected.");
		} else if (currentFilterType == "metaConcept") {
			filterFocus = "1";
			console.log("The Meta Concept table filter has been selected.");
		} else if (currentFilterType == "parserKey") {
			filterFocus = "2";
			console.log("The Log Parser Key table filter has been selected.");
		} else if (currentFilterType == "keyFlag") {
			filterFocus = "3";
			console.log("The Log Parser Key Flag table filter has been selected.");
		} else if (currentFilterType == "metaKey") {
			filterFocus = "4";
			console.log("The Meta Key table filter has been selected.");
		} else if (currentFilterType == "metaType") {
			filterFocus = "5";
			console.log("The Meta Type table filter has been selected.");
		} else if (currentFilterType == "metaIndex") {
			filterFocus = "6";
			console.log("The Meta Index table filter has been selected.");
		} else if (currentFilterType == "notes") {
			filterFocus = "7";
			console.log("The Notes table filter has been selected.");
		}
		console.log('filterFocus from drop down function: ' + filterFocus);
		enableTableFilters();
	}
	updateFilterType();
	
	// Function to filter the results
	function enableTableFilters() {
	  // Declare variables 
	  var input, filter, table, tr, td, i;
	  input = document.getElementById("tableFilter");
	  filter = input.value.toUpperCase();
	  table = document.getElementsByClassName("filteredTable")[0];
	  mainTable = document.getElementsByClassName("filteredTable")[0];
	  tr = mainTable.getElementsByTagName("tr");	  

	  // Loop through all table rows, and hide those who don't match the search query
	  console.log('filterFocus in main function: ' + filterFocus);
	  for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[filterFocus];
		if (td) {
		  if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
			tr[i].style.display = "";
		  } else {
			tr[i].style.display = "none";
		  }
		} 
	  }
	}

	// Function to show/hide columns based on a checkbox
	function colDisplay() {
		var currentDisplaySet = document.getElementById("showAllCols").checked;
		console.log("Show All Columns: " + currentDisplaySet);
		if (currentDisplaySet === false) {
			// Hide optional columns
			jQuery('.optionalCol').css("display", "none");
			console.log("Hiding all optional columns and options.");
		} else if (currentDisplaySet === true) {
			// Show optional columns
			jQuery('.optionalCol').css("display", "table-cell");
			console.log("Displaying all optional columns and options.");
		}
	}
	colDisplay();	
}


// Filtering functionality for the UDM page
if ( (placeID == nwoPageID) ) {
	console.log("Identified a space with table filtering enabled.");
	
	// Function to filter the results
	function enableOrchestratorTableFilters() {
	  // Declare variables 
	  var input, filter, table, tr, td, i;
	  input = document.getElementById("tableFilter");
	  filter = input.value.toUpperCase();
	  table = document.getElementsByClassName("filteredTable")[0];
	  mainTable = document.getElementsByClassName("filteredTable")[0];
	  tr = mainTable.getElementsByTagName("tr");	  

	  // Loop through all table rows, and hide those who don't match the search query
	  for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
		  if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
			tr[i].style.display = "";
		  } else {
			tr[i].style.display = "none";
		  }
		} 
	  }
	}
	enableOrchestratorTableFilters();
}




