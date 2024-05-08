"use strict";
// navbar menu js start 
$('.menu-trigger').on('click', function(){
  $('.navbar-area').addClass('active');
  $('.page-content-wrapper').addClass('active');
});
$('.navbar-closer , .nav-link').on('click', function(){
  $('.navbar-area').removeClass('active');
  $('.page-content-wrapper').removeClass('active');
});
// page-content-left js start
$(window).on("scroll", function(){
  if ($(this).scrollTop() > 50 ) {
    $(".page-content-left").addClass("active");
    $(".page-content-right").addClass("active");
  } else {
    $(".page-content-left").removeClass("active");
    $(".page-content-right").removeClass("active");
  }
});
// scroll-top btn start
$(".up-arrow").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});
// scroll-top btn end

//contact form start
window.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("my-form");
  var status = document.getElementById("status");
  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Send Succesfully !";
  }
  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});
function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
//contact form end