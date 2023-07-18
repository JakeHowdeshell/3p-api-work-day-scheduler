// adding (document).ready and wraping all code that interacts with the DOM inside that jQuery ensures that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
  // code to display the current date in the header of the page.
  var now = dayjs().format("MMMM D, YYYY");
  var currentDate = document.getElementById("currentDay");
  currentDate.innerHTML = now;
  var currentHour = dayjs().format("HH");

  // added a listener for click events on the save button.
  // use the id in the containing time-block as a key to save the user input in
  // local storage. used `this` to reference content under the svaeBtn id in the click listener
  // used DOM traversal to get the sibling class and parent id.
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var input = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, input);
  });

  // added code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.

  $(".time-block").each(function () {
    var timeBlock = $(this).attr("id").split("-")[1];

    if (currentHour === timeBlock) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text");
    } else if (currentHour < timeBlock) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > timeBlock) {
      $(this).removeClass("future");
      $(this).addClass("past");
      $(this).children(".hour").addClass("time-display");
    }
  });
  // added code to get user input saved in localStorage and set
  // the values of the corresponding textarea elements.

  $("#hour-09 .description").val(localStorage.getItem("09"));
  $("#hour-10 .description").val(localStorage.getItem("10"));
  $("#hour-11 .description").val(localStorage.getItem("11"));
  $("#hour-12 .description").val(localStorage.getItem("12"));
  $("#hour-13 .description").val(localStorage.getItem("13"));
  $("#hour-14 .description").val(localStorage.getItem("14"));
  $("#hour-15 .description").val(localStorage.getItem("15"));
  $("#hour-16 .description").val(localStorage.getItem("16"));
  $("#hour-17 .description").val(localStorage.getItem("17"));
});
