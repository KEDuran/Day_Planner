// Global variable set to retreive the current date the day planner app is opened.
var m = moment({ hour: 10 });
/* Global variable with an empty array that will allow the business hours populated in the for-loop below to 
be pushed into this businesHrs array variable.*/
var businessHRs = [];
// Global variable with an empty array to store text area comments saved in local storage for each timeblock.
var toDoItems = ["", "", "", "", "", "", "", "", "", ""];

// Invoking the retain() function here to make sure all saved toDoItems re-populate upon  page refresh.
retain();

// Used JQuery to target <p> tag in the jumbortron header to include a dynamic date.
$("#currentDay").text(m.format("dddd, MMMM Do YYYY"));

/*Created a for-loop to add moment objects to the businessHRs array and bind the comment text areas with the 
save button for each business hour.*/
for (var i = 0; i < 10; i++) {
	// Adds a new moment object to the businessHRs array to reflect an 8am - 5pm business day.
	businessHRs.push(moment({ hour: i + 8 }));
	// This targets the timeInterval ID to apply each businessHRs array index to each matching timeblock.
	$("#timeInterval" + i).text(businessHRs[i].format("hA"));

	/* This if statement adds the coloration for past, present, and future business hours based on the time 
	assigned to each timeblock.*/
	// Applies the past class CSS selector where applicable by using .isAfter() moment.js function.
	if (m.isAfter(businessHRs[i])) {
		$("#comment" + i).addClass("past");
	} else if (
		// Applies the present class CSS selector where applicable by using .isBetween() moment.js function.
		m.isBetween(businessHRs[i], moment({ hour: i + 9 }), undefined, "[]")
	) {
		$("#comment" + i).addClass("present");
	} else {
		// Applies the future class CSS selector where applicable if other parameters in this statement are not met.
		$("#comment" + i).addClass("future");
	}

	// In this line, the button ID are targetted using the following anonymous function.
	$("#button" + i).click(function () {
		//This variable targets the assigned value for each button.
		var buttonIndex = $(this).val();
		//This variable is used to target each entered comment text per timeblock based on the related save button.
		var commentText = $("#comment" + buttonIndex).val();
		/*Each entered comment text is appended to the global toDoItems array by passing throughout the buttonIndex, 
		which is bound via the previously declared commentText variable.*/
		toDoItems[buttonIndex] = commentText;
		/*This uses local storage to store any comment entries appended into the toDoItems array. This will allow each 
		comment entry per timeblock to save once the save button per timeblock is clicked.*/
		localStorage.setItem("toDoItems", JSON.stringify(toDoItems));
	});

	/* This statement targets each timeblock's text area and will populate the saved to-do item in the toDoItems array 
	that has a matching index value.*/
	$("#comment" + i).val(toDoItems[i]);
}

/* The retain() function is parsing out the toDoItems items that are saved in local storage and reassigning them back to the 
appropriate timeblock, which ensures that the saved toDoItems populate after the a page refresh. This function is called at the 
beginning of the this code.*/
function retain() {
	var storedtoDoItems = JSON.parse(localStorage.getItem("toDoItems"));
	if (storedtoDoItems !== null) {
		toDoItems = storedtoDoItems;
	}
}
