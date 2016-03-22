'use strict'
var days = {0: "Sunday", 1: "Monday", 2: "Tuesday", 3: "Wednesday",
			4: "Thursday", 5: "Friday", 6: "Saturday"};
var months = {0: "January", 1: "February", 2: "March", 3: "April",
			  4: "May", 5: "June", 6: "July", 7: "August", 8: "September",
			  9: "October", 10: "November", 11: "December"};
function cs142FormatTime(date) {
	var result = "";
	var dayOfWeek = days[date.getDay()];
	var monthOfYear = months[date.getMonth()];
	var hour = date.getHours();
	var minute = date.getMinutes();
	result += dayOfWeek + ", ";
	result += monthOfYear + " ";
	result += date.getDate() + ", ";
	result += date.getFullYear() + " ";
	var tempHour = "" + ((hour > 12) ? hour - 12 : hour);
	if (hour == 0) tempHour = "12";
	result += ((tempHour < 10) ? "0" : "") + tempHour;
	result += ((minute < 10) ? ":0" : ":") + minute + " ";
	result += ((hour < 12) ? "AM" : "PM");
	return result;
}