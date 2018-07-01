$(document).ready(function() {
  //resizeDiv();
  $('.modal-link').on('click', function(e) {
    e.preventDefault();
    var pageRef = $(this).attr('href');

    if(pageRef.indexOf('.jpg') > 0 || pageRef.indexOf('.jpeg') > 0 || pageRef.indexOf('.png') > 0) // or any other extension
    {
        callPhoto(pageRef);
    }
    else {
      callPage(pageRef);
    }
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
        // console.log("it worked", response);
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
  function callPhoto(photoInput) {
    $('.modal').html('<div class="container--fluid"><div class="container__row"><div class="container__col-sm-12 img" id="container__left"><img class="photo" src="' + photoInput + '" /><button class="button close modal-link"><span class="bar bar2"></span><span class="bar bar3"></span></button></div></div></div>').show();
    close();
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
function close() {
  $('.close').on('click', function (e) {
    $('.modal').hide().html('');
    $('body').removeClass('modal-active');
  });
}

