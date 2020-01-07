"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Tutorial Case

   Author: Kofi
   Date: 12/18/19 

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/

// Set the date displayed in the calendar
var thisDay = new Date();

//Write the calendar to the element with the id "calendar"
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

//Function to generate the calemdar table
function createCalendar(calDate) {
   var calendarHTML = "<table id='calendar_table'>";
    calendarHTML += calCaption(calDate);
    calendarHTML += calWeekdayRow();
    calendarHTML += calDays(calDate);
    calendarHTML += "</table>";
   return calendarHTML;
}

//Function to write the calendar's caption
function calCaption(calDate) {
   //monthName array contains the list of month names
   var monthName=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

   //Determine the current month
   var thisMonth = calDate.getMonth();


   //Determine the current year
   var thisYear = calDate.getFullYear();

   //Write the caption
   return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";
}

//Function to write a table row of weekday abbreviations
function calWeekdayRow() {

//Array of weekdays abbreviations
var dayName = ["SUN", "MON","TUES", "WED", " THUR", "FRI", "SAT"];
var rowHTML = "<tr>";

//Loop through the dayName array
for(var i = 0; i < dayName.length; i++) {
   rowHTML += "<th class='calendar_weekdays'>" + dayName[i] + "</th>";
   }

//Write the caption
   rowHTML += "</tr>";
   return rowHTML;
}

//Function to calculate the number of days in the month
function daysInMonth(calDate) {
   //Arra of days in each month 
   var dayCount = [31,28,31,30,31,30,31,31,30,31,30,31]


   //Extract the four digit year and month value
   var thisYear = calDate.getFullYear();
   var thisMonth = calDate.getMonth();

   //Revise the days in febrauary for leap years
   if (thisYear % 4 === 0) {
      if ((thisYear % 100 != 0) || (thisYear % 400 === 0)) {
      dayCount[1] = 29;
      }
   }

//Return the number of days for the current month
   return dayCount[thisMonth];
}

// Function to write table cells for each day of the month
function calDays(calDate) {

   //Determine the starting day of the month
   var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
   var weekday = day.getDay();

   //Write blank cells preceding the starting day
   var htmlCode = "<tr>";
   for(var i = 0; i < weekday; i++) {
      htmlCode += "<td></td>";
   }

   //Write cells for each day of the month
   var totalDays = daysInMonth(calDate);

   //Stores the current day in a new variable
   var highlightDay = calDate.getDate();

   for(var i = 1; i <= totalDays; i++) {
      day.setDate(i);
      weekday = day.getDay();

   //Check if the day of the week is now
   if (weekday === 0) htmlCode += "<tr>";

   if(i === highlightDay) {
         htmlCode += "<td class='calendar_dates' id ='calendar_today'>"+ i + dayEvent[i] + "</td>"; 
   } else {
         htmlCode += "<td class='calendar_dates'>" + i + dayEvent[i] + "</td>";
   }
   //End the table row if we just wrote the cell for Sat
   if (weekday === 6) htmlCode += "</tr>";
   }

   return htmlCode;
}





      
      
 







