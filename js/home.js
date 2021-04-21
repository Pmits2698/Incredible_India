/* /////////////////////// charmi's work starts from here ////////////////////////////////////////// */
$(document).ready(function() {

$("#arrival_date").datepicker();
$("#departure_date").datepicker();

	$("form").submit(
 			function(event) {

var name = $("#name").val().trim();
if(name == "")
{
	$("#name").next().text("this field is required.");
	isValid = false;
}
else
{
	$("#name").val(name);
}


var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
 		var email = $ ("#email").val().trim();
 		if (email == "") {
 			$('#email').next().text("this field is requiered.");
 			isValid = false;
 		}
 		else if (!emailPattern.test(email)) {
 			$("#email").next().text("Must be a valid email address.");
 			isValid = false;
 		}
 		else {
 				$("#email").next().text("");
 			  }

 			$("#email").val(email);

	var phnno = /^\(?([0-9]{3})\)?[-.]?([0-9]{3})[-.]?([0-9]{4})$/;
 			var phn = $("#phone").val().trim();
 			if (phn == "") {
 				$('#phone').next().text("this field is requiered.");
 				isValid = false;
 			}
 			else if (!phnno.test(phn)) {
 				$ ('#phone').next().text("Must be a valid number.");
 				isValid = false;
 			}
 			else{
 				$("#phone").next().text("");
 			}
 			$("#phone").val(phn);

 				if(isValid == false) 
 			{
 				event.preventDefault();
 			}

var n =  /[0-9]|\./;
 			var self = $('#nights').val().trim();
   			 if (self == "") 
    			 {
	   				$('#nights').next().text("this field is requiered.");
 					isValid = false;
    			 }
    		else if (! n.test(self)) {
    				$("#nights").next().text("Must be a number.");
	   				isValid = false;
    		}
    		else {
    			$("#nights").val(self);
    		}

          if(isValid == true)
      {
        
        alert('Thanks for Subscribing');
      }
      else{
       event.preventDefault();
      }

    	}
    );
	});


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
/*////////////////////////////////////////////charmi's work ends here //////////////////////////////////////////////////////////////*/
