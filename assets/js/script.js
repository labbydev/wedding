//
// @file
// Custom JavaScript File
// Copyright Lauren A Byrwa 2015
//

// set the date we're counting down to
var target_date = new Date('Sat Oct 08 2016 16:30:00 GMT-0600 (CST)').getTime();

// variables for time units
var days, hours, minutes, seconds;

// get tag element
var countdown = document.getElementById('countdown');

// update the tag with id "countdown" every 1 second
setInterval(function () {

  // find the amount of "seconds" between now and target
  var current_date = new Date().getTime();
  var seconds_left = (target_date - current_date) / 1000;

  // do some time calculations
  days = parseInt(seconds_left / 86400);
  seconds_left = seconds_left % 86400;

  hours = parseInt(seconds_left / 3600);
  seconds_left = seconds_left % 3600;

  minutes = parseInt(seconds_left / 60);
  seconds = parseInt(seconds_left % 60);

  // format countdown string + set tag value
  countdown.innerHTML = '<p class="center"><span class="countdown__days">' + days +  ' Days</span> <span class="countdown__hours">' + hours + ' Hours</span> <span class="countdown__minutes">'
    + minutes + ' Minutes</span> <span class="countdown__seconds">' + seconds + ' Seconds</span></p>';

}, 1000);
