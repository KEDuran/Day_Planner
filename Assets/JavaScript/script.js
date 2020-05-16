// Global variable set to get the current date at time.
var day = moment();
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

console.log(businessHRs);

// Used JQuery to target the <p> tag in the jumbortron header to include a dynamic date.
$("#currentDay").text(day.format("dddd MMMM Do YYYY"));
