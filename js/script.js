$(document).ready(function() {
  $('.nav-link').on('click', function(e) {
    e.preventDefault();
    var pageRef = $(this).attr('href');

    callPage(pageRef, '.content');
  });
  $('.modal-link').on('click',function(e) {
    e.preventDefault();
    var pageRef = $(this).attr('href');

    callPage(pageRef, '.modal');
  });
  $('.close').on('click', function(e) {
    $(this).toggleClass('active');
    $('nav').toggleClass('closed');
  });
  v = $(window).width();
  if (v < 768) {
    mobileClasses();
  }
  function callPage(pageRefInput, element) {
    $.ajax({
      url: pageRefInput,
      type: "GET",
      dataType: "text",
      success: function( response ) {
        //console.log("it worked", response);
        $(element).html(response);
      },
      // error: function ( error) {
      //   console.log("it didn't work", error);
      // },
      // complete: function( xhr, status ) {
      //   console.log("There request was completed");
      // }
    });
  }
  function mobileClasses() {
    $('nav').addClass('closed');
    $('.button').removeClass('active');
  }
});
