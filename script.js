

$(function () {

  // sets current date and time in header
  var nowDayOfWeek = dayjs().format('dddd');
  var nowDate = dayjs().format('MMMM D, YYYY');
  $("#currentDay").text(nowDayOfWeek + ", " + nowDate);
  function updateTime() {
    $("#currentTime").text(dayjs().format('h:mm:ss A'));
  }
  setInterval(function () { updateTime() }, 1000);

  // loops through time blocks and compare to current hour
  var currentHour = dayjs().format('H');

  $(".time-block").each(function () {

    let hour = $(this).attr("id");
    hour = hour.substring(5);
    console.log(hour + currentHour);
    console.log(typeof hour);
    console.log(typeof currentHour);

    if (currentHour < hour) {
      $(this).addClass("future");
    } else if (currentHour > hour) { $(this).addClass("past"); }
    else { $(this).addClass("present"); }

  })

  // local storage
  $("#hour-09 .description").val(localStorage.getItem("hour-09"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-1 .description").val(localStorage.getItem("hour-1"));
  $("#hour-2 .description").val(localStorage.getItem("hour-2"));
  $("#hour-3 .description").val(localStorage.getItem("hour-3"));
  $("#hour-4 .description").val(localStorage.getItem("hour-4"));
  $("#hour-5 .description").val(localStorage.getItem("hour-5"));

  // save button
  $(".saveBtn").on("click", function () {

    var hour = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();

    localStorage.setItem(hour, description);

  });
});
