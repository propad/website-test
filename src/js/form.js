$(document).ready(function(){

  var button=$("#form").find("button#send");

  function allFilled() {
    var filled = true;
    $('#form .required').each(function() {
      if($(this).val() == '') filled = false;
    });
    return filled;
  }

  button.on("click",function(){

    if (button.hasClass("active")) {

      alert("Thank you!");

    }
  });

  $('#form .required').on('keyup', function() {
     if(allFilled()) button.addClass('active');
     else button.removeClass('active');
  });

});
