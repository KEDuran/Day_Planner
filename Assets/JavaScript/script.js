// Global variable set to get the current date at time.
var m = moment();
// Global variable that has total number of business hours per day.
var businessHRs = [];
// Global variable to store text area comments.
var toDoItems = ["", "", "", "", "", "", "", "", "", ""];

// Invoking the retain() function here to make sure all saved toDoItems populate upon a page refresh.
retain();

// Used JQuery to target the <p> tag in the jumbortron header to include a dynamic date.
$("#currentDay").text(m.format("dddd, MMMM Do YYYY"));

// Created a for-loop to add moment objects to businessHRs array and bind the comment text areas with the save button for each business hour.
for (var i = 0; i < 10; i++) {
	// Adds a new moment object to the businessHRs array to include a 8am - 5pm business day.
	businessHRs.push(moment({ hour: i + 8 }));
	// This targets the timeInterval ID to apply a business hour to each timeblock.
	$("#timeInterval" + i).text(businessHRs[i].format("hA"));

	if (m.isAfter(businessHRs[i])) {
		$("#comment" + i).addClass("past");
	} else if (
		m.isBetween(businessHRs[i], moment({ hour: i + 9 }), undefined, "[]")
	) {
		$("#comment" + i).addClass("present");
	} else {
		$("#comment" + i).addClass("future");
	}

	// In this in line, I am targetting the button ID to the following anonymous function.
	$("#button" + i).click(function () {
		//This variable targets the assigned value for each button.
		var buttonIndex = $(this).val();
		//This variable is used to target entered comment text for each timeblock based on the related save button.
		var commentText = $("#comment" + buttonIndex).val();
		/*Here were are appending all entered comment text to the global toDoItems array by passing throughout the 
		the index per save button bound to each related comment text ID in the index.html file. */
		toDoItems[buttonIndex] = commentText;
		/*Using local storage to store any comment entries appended into the toDoItems array. This will allow each 
		comment entry per timeblock to save after a refresh once the save button per timeblock is clicked.*/
		localStorage.setItem("toDoItems", JSON.stringify(toDoItems));
	});

	/* This JQuery selector statement targets each timeblock's text area and will populate the to do item in the toDoItems 
	array with a matching index value.*/
	$("#comment" + i).val(toDoItems[i]);
}

/* The retain() function is parsing out the toDoItems items that are saved in local storage and reassigning them back to the 
associated timeblock, which ensures that the saved toDoItems populate after the a page refresh. */
function retain() {
	var storedtoDoItems = JSON.parse(localStorage.getItem("toDoItems"));
	if (storedtoDoItems !== null) {
		toDoItems = storedtoDoItems;
	}
}
