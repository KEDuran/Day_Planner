// Global variable set to get the current date at time.
var day = moment();
var businessHRs = moment.duration(9, "hours");

// Used JQuery to target the <p> tag in the jumbortron header to include a dynamic date.
$("#currentDay").text(day.format("dddd MMMM Do YYYY"));
