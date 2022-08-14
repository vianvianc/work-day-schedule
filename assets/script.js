var hour = moment();
// console.log(hour);
//moment object is not in right format for comparison
convertedHour = moment().hour();
console.log(convertedHour);

var today = moment();
var now = today.format("dddd, MMMM Do YYYY, h:mm a");
//shows date at top of page
$("#now").text(now);

//event handler for svatBtn, when clicked triggers callback function
$(".saveBtn").on("click", function () {
  //using (this) refers to the DOM element clicking on, .parent() method then
  //goes to immediate parent and constructs a jquery object then .attr() method
  //assigns that id to this object.
  var timeBox = $(this).parent().attr("id");
  //now make variable to hold value of text, use .sibling with textarea tag
  //then use .val to get the value of the textarea form element (will return an array)
  var textBox = $(this).siblings("textarea").val();
  //set these two into local storage so they persist on refresh
  localStorage.setItem(timeBox, textBox);
  //   console.log(timeBox, textBox);
});
//for the stored ids in previously constructed objects we use .getItem,
//then pass this as parameter to the .val jquery method which load the textBox
//content with matching id
// var eight = $("#8 textarea").val(localStorage.getItem("8"));
// console.log(eight);
$("#8 textarea").val(localStorage.getItem("8"));
$("#9 textarea").val(localStorage.getItem("9"));
$("#10 textarea").val(localStorage.getItem("10"));
$("#11 textarea").val(localStorage.getItem("11"));
$("#12 textarea").val(localStorage.getItem("12"));
$("#13 textarea").val(localStorage.getItem("13"));
$("#14 textarea").val(localStorage.getItem("14"));
$("#15 textarea").val(localStorage.getItem("15"));
$("#16 textarea").val(localStorage.getItem("16"));
$("#17 textarea").val(localStorage.getItem("17"));

function tense() {
  $(".time-block").each(function () {
    //the id of each time-block is looped over and assigned hourBox variable
    var hourBox = $(this).attr("id");

    // var hourCompare = hour;
    if (hourBox < convertedHour) {
      //the "past" class is assigned
      $(this).addClass("past");
    }

    if (hourBox == convertedHour) {
      //the "present" class is given
      $(this).addClass("present");
      //if the hour is "larger" than the variable...
    } else if (hourBox > convertedHour) {
      //the "future" class is given
      $(this).addClass("future");
    }
  });
}
tense();
