/*mayank-mitali-charmi*/
$(document).ready(function () {
    document.getElementById("arrival_date");
    $("#arrival_date").datepicker();
    $("form").submit(function (event) {
        var number = /[0-9]|\./;
        var night = $('#nights').val().trim();
        if (night == "") {
            $('#nights').next().text("This field is required");
            isValid = false;
        } else if (!number.test(night)) {
            $("#nights").next().text("Must be a number");
            isValid = false;
        } else {
            $("#nights").val(night);
        }
        var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        var emails = $("#email").val().trim();
        if (emails == "") {
            $('#email').next().text("This field is required");
            isValid = false;
        } else if (!emailPattern.test(emails)) {
            $("#email").next().text("Enter valid email");
            isValid = false;
        } else {
            $("#email").next().text("");
        }
        $("email").val(emails);
        var name = $('#name').val().trim();
        if (name == "") {
            $('#name').next().text("This field is required")
            isValid = false;
        } else {
            $('#name').val(name);
        }
        var phoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        var phon = $("#phone").val().trim();

        if (phon == "") {
            $('#phone').next().text("This field is required");
            isValid = false;

        } else if (!phoneNumber.test(phon)) {
            $('#phone').next().text("Enter valid number");
            isValid = false;
        } else {
            $("#phone").next().text("");
        }

        $("#phone").val(phon);

        if (isValid == false) {
            event.preventDefault();
        }
    });
});

const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let countDown = new Date('May 1, 2020 00:00:00').getTime(),
    x = setInterval(function () {

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById('days').innerText = Math.floor(distance / (day)),
            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        //if (distance < 0) {
        //  clearInterval(x);
        //  'IT'S MY BIRTHDAY!;
        //}

    }, second)
