var dateAndTime = document.querySelector("#timeanddate");
var currentTime = moment();

dateAndTime.textContent = currentTime.format("dddd, Do MMMM YYYY, h:mm")


$(".saveBtn").on("click", function() {
    
    var task = $(this).siblings(".tasks").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, task );
    alert('Saved')
});


$("#9am .tasks").val(localStorage.getItem("9am"));

$("#10am .tasks").val(localStorage.getItem("#10am"));

$("#11am .tasks").val(localStorage.getItem("11am"));

$("#12pm .tasks").val(localStorage.getItem("12pm"));

$("#1pm .tasks").val(localStorage.getItem("1pm"));

$("#2pm .tasks").val(localStorage.getItem("2pm"));

$("#3pm .tasks").val(localStorage.getItem("3pm"));

$("#4pm .tasks").val(localStorage.getItem("4pm"));

$("#5pm .tasks").val(localStorage.getItem("5pm"));


var hr9 = 9;
var hr10 = 10;
var hr11 = 11;
var hr12 = 12;
var hr1 = 13;
var hr2 = 14;
var hr3 = 15;
var hr4 = 16;
var hr5 = 17;

var currentHour = moment().format('H');


if (currentHour < hr9) {
    $("#9am").addClass("future");
    $("#9amtxt").addClass("future");
    $("#9amtxt").next('button').addClass("future");
} else if (currentHour > hr9) {
    $("#9am").addClass("past");
    $("#9amtxt").addClass("past");
    $("#9amtxt").next('button').addClass("past");
} else if (currentHour = hr9) {
    $("#9am").addClass("present");
    $("#9txt").addClass("present");
    $("#9txt").next('button').addClass("present");
}


if (currentHour < hr10) {
    $("#10am").addClass("future");
    $("#10amtxt").addClass("future");
    $("#10amtxt").next('button').addClass("future");
} else if (currentHour > hr10) {
    $("#10am").addClass("past");
    $("#10amtxt").addClass("past");
    $("#10amtxt").next('button').addClass("past");
} else if (currentHour = hr10) {
    $("#10am").addClass("present");
    $("#10amtxt").addClass("present");
    $("#10amtxt").next('button').addClass("present");
}


if (currentHour < hr11) {
    $("#11am").addClass("future");
    $("#11amtxt").addClass("future");
    $("#11amtxt").next('button').addClass("future");
} else if (currentHour > hr11) {
    $("#11am").addClass("past");
    $("#11amtxt").addClass("past");
    $("#11amtxt").next('button').addClass("past");
} else if (currentHour = hr11) {
    $("#11am").addClass("present");
    $("#11amtxt").addClass("present");
    $("#11amtxt").next('button').addClass("present");
}


if (currentHour < hr12) {
    $("#12pm").addClass("future");
    $("#12pmtxt").addClass("future");
    $("#12pmtxt").next('button').addClass("future");
} else if (currentHour > hr12) {
    $("#12pm").addClass("past");
    $("#12pmtxt").addClass("past");
    $("#12pmtxt").next('button').addClass("past");
} else if (currentHour = hr12) {
    $("#12pm").addClass("present");
    $("#12pmtxt").addClass("present");
    $("#12pmtxt").next('button').addClass("present");
}


if (currentHour < hr1) {
    $("#1pm").addClass("future");
    $("#1pmtxt").addClass("future");
    $("#1pmtxt").next('button').addClass("future");
} else if (currentHour > hr1) {
    $("#1pm").addClass("past");
    $("#1pmtxt").addClass("past");
    $("#1pmtxt").next('button').addClass("past");
} else if (currentHour = hr1) {
    $("#1pm").addClass("present");
    $("#1pmtxt").addClass("present");
    $("#1pmtxt").next('button').addClass("present");
}


if (currentHour < hr2) {
    $("#2pm").addClass("future");
    $("#2pmtxt").addClass("future");
    $("#2pmtxt").next('button').addClass("future");
} else if (currentHour > hr2) {
    $("#2pm").addClass("past");
    $("#2pmtxt").addClass("past");
    $("#2pmtxt").next('button').addClass("past");
} else if (currentHour = hr2) {
    $("#2pm").addClass("present");
    $("#2pmtxt").addClass("present");
    $("#2pmtxt").next('button').addClass("present");
}


if (currentHour < hr3) {
    $("#3pm").addClass("future");
    $("#3pmtxt").addClass("future");
    $("#3pmtxt").next('button').addClass("future");
} else if (currentHour > hr3) {
    $("#3pm").addClass("past");
    $("#3pmtxt").addClass("past");
    $("#3pmtxt").next('button').addClass("past");
} else if (currentHour = hr3) {
    $("#3pm").addClass("present");
    $("#3pmtxt").addClass("present");
    $("#3pmtxt").next('button').addClass("present");
}


if (currentHour < hr4) {
    $("#4pm").addClass("future");
    $("#4pmtxt").addClass("future");
    $("#4pmtxt").next('button').addClass("future");
} else if (currentHour > hr4) {
    $("#4pm").addClass("past");
    $("#4pmtxt").addClass("past");
    $("#4pmtxt").next('button').addClass("past");
} else if (currentHour = hr4) {
    $("#4pm").addClass("present");
    $("#4pmtxt").addClass("present");
    $("#4pmtxt").next('button').addClass("present");
}


if (currentHour < hr5) {
    $("#5pm").addClass("future");
    $("#5pmtxt").addClass("future");
    $("#5pmtxt").next('button').addClass("future");
} else if (currentHour > hr5) {
    $("#5pm").addClass("past");
    $("#5pmtxt").addClass("past");
    $("#5pmtxt").next('button').addClass("past");
} else if (currentHour = hr5) {
    $("#5pm").addClass("present");
    $("#5pmtxt").addClass("present");
    $("#5pmtxt").next('button').addClass("present");
}