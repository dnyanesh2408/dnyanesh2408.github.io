// Script for when click nav toggler outside on screen then navbar collapse
window.onload = function () {
	document.addEventListener("click", function (event) {
		// if the clicked element isn't child of the navbar, you must close it if is open
		if (!event.target.closest("#navbar") && document.getElementById("navbarNav").classList.contains("show")) {
			document.getElementById("menu_button").click();
		}
	});
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// Back to Top Button
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// End Back to Top Button


// Email Js
// function validate() {
//   let name = document.querySelector(".name");
//   let email = document.querySelector(".email");
//   let msg = document.querySelector(".message");
//   let sendBtn = document.querySelector(".send-btn");

//   sendBtn.addEventListener('click', (e) => {
//       e.preventDefault();
//       if (name.value == "" || email.value == "" || msg.value == ""){
//           emptyerror();
//       } else {
//           sendmail (name.value, email.value, msg.value);
//           success();
//       }
//   });
// }
// validate();

// function sendmail(name,email,msg){
//   emailjs.send("service_gw8ecli","template_wtg6f5w",{
//       from_name: email,
//       to_name: name,
//       message: msg,
//       });
// }

// function emptyerror() {
//   swal({
//       title: "Oh No....!",
//       text: "Fields can not be empty!",
//       icon: "error",
//       // icon: "success",
//       // button: "error!",
//     });
// }

// function success() {
//   swal({
//       title: "Email sent sucessfully!",
//       // text: "We try to replay in 24 hours!",
//   text: "Thanks for connecting, I try to replay asap!",
//       icon: "success",
//     });
// }

// Email Js End

// // preloader
// $(document).ready(function() {
//     setTimeout(()=>{
//         $('#Preloader').addClass('loader');
//     },1000);
//     setTimeout(()=>{
//         $('#Preloader').remove('loader');
//     },500);
//   })


// preloader
// $(document).ready(function() {
//   setTimeout(()=>{
//       $('#Preloader').addClass('loader');
//   },300);
//   setTimeout(()=>{
//       $('#Preloader').remove('loader');
//   },150);
// })

// $('.navbar-nav>li>a').on('click', function(){
//   $('.navbar-collapse').collapse('hide');
// });



// $(document).ready(function() {
//   setTimeout(()=>{
//       $('#Preloader').addClass('loader');
//   },500);
//   setTimeout(()=>{
//       $('#Preloader').remove('loader');
//   },250);
// })

// $('.navbar-nav>li>a').on('click', function(){
//   $('.navbar-collapse').collapse('hide');
// });


$(document).ready(function() {
  setTimeout(()=>{
      $('#Preloader').addClass('loader');
  },220);
  setTimeout(()=>{
      $('#Preloader').remove('loader');
  },110);
})

$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});

// End preloader


// function email() {
//   window.location.href ='mailto:dnyaneshkolhe1@gmail.com';
// }

// function myFunction() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
// }

function darkmode(){
  var SetTheme = document.body;

  SetTheme.classList.toggle("dark-mode");

  var theme;

  if(SetTheme.classList.contains("dark-mode")){
    console.log("Dark mode");
    theme = "DARK";
  } else {
    console.log("Light mode");
    theme = "LIGHT";
  }

  // save to localstorage
  localStorage.setItem("PageTheme", JSON.stringify(theme));
}
let GetTheme = JSON.parse(localStorage.getItem("PageTheme"))
console.log(GetTheme);

if(GetTheme == "DARK"){
  document.body.classList = "dark-mode";
}
// =========================================================

// <!-- Last Update 20/3/23-->