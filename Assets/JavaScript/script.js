// Global variable set to get the current date at time.
var m = moment();
// Used JQuery to target the <p> tag in the jumbortron header to include a dynamic date.
$("#currentDay").text(m.format("dddd MMMM Do YYYY"));
