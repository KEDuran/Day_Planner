// Global variable set to get the current date at time.
var day = moment();
// Global variable that has total number of business hours per day.
var businessHRs = [
	"8AM",
	"9AM",
	"10AM",
	"11AM",
	"12PM",
	"1PM",
	"2PM",
	"3PM",
	"4PM",
	"5PM",
];
// Global variable to store text area comments.
var toDoItems = ["", "", "", "", "", "", "", "", "", ""];

// Used JQuery to target the <p> tag in the jumbortron header to include a dynamic date.
$("#currentDay").text(day.format("dddd, MMMM Do YYYY"));

// Created a for-loop to iterate through the businessHRs array variable.
for (var i = 0; i < businessHRs.length; i++) {
	// This targets the timeInterval ID and concatenates var i to apply a business hour to each timeblock.
	$("#timeInterval" + i).text(businessHRs[i]);
}
// Created a for-loop to bind the comment text areas with the save button for each business hour.
for (var i = 0; i < 10; i++) {
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
}
