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
    //  alert("Thank you!");

    }
  });

  $('#form .required').on('keyup', function() {
     if(allFilled()) button.addClass('active');
     else button.removeClass('active');
  });

});

window.onscroll = scroll1;

function scroll1()
{
    var toTop = document.getElementById('c-scroll');
    if (window.scrollY > 200){
      console.log(window.scrollY);
      // toTop.style.display='Block'
      toTop.classList.add("active")
    } else {
      console.log(window.scrollY);
        toTop.classList.remove("active");
    }

}

function scrollUp(){
  $("html,body").animate({scrollTop:0}, 300);
}
$(document).ready(function(){
  $("#c-scroll").click(function(){
    console.log("clicked");
    scrollUp();
    $(this).removeClass("active");
  });
});
