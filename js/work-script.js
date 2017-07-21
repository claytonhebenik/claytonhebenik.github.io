$(document).ready(function() {
  //resizeDiv();
  $('.modal-link').on('click', function(e) {
    e.preventDefault();
    var pageRef = $(this).attr('href');

    callPage(pageRef);
    $('body').toggleClass('modal-active');
  });
  $('.close').on('click', function(e) {
    $('.modal').hide();
  });
  function callPage(pageRefInput) {
    $.ajax({
      url: pageRefInput,
      type: "GET",
      dataType: "text",
      success: function( response ) {
        //console.log("it worked", response);
        $('.modal').html(response).show();

      },
      // error: function ( error) {
      //   console.log("it didn't work", error);
      // },
      // complete: function( xhr, status ) {
      //   console.log("There request was completed");
      // }
    });
  }
  window.onresize = function(event) {
    //resizeDiv();
  };
  function resizeDiv() {
    var vpw = $(window).width() * 0.9;
    var vph = $(window).height() * 0.9;
    $('.modal').css({
      'height': vph + 'px',
      'width' : vpw + 'px',
      'left' : '50%',
      'margin-left' : vpw / 2,
      'top' : '50%',
      'margin-top' : vph / 2
    });
  }
  // function displayModal() {
  //     $('.modal').toggle();
  //     $('.overlay').toggle();
  // }
});