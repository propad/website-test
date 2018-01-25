$(document).ready(function(){

  var button=$("#form").find("input#send");

  function allFilled() {
    var filled = true;
    $('#form .required').each(function() {
      if($(this).val() == '') filled = false;
    });
    return filled;
  }

  button.on("click",function(){

    if (button.hasClass("active")) {
      ga('send', 'event', { eventCategory: 'form', eventAction: 'submit'});
    //   alert("Thank you!");

    }
  });

  $('#form .required').on('keyup', function() {
     if(allFilled()) button.addClass('active');
     else button.removeClass('active');
  });

});
