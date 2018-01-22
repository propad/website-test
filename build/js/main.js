$(document).ready(function(){
  $("#form").validate({});
  // var first_name=$("#form").find("input#first_name");
  // var last_name=$("#form").find("input#last_name");
  // var button=$("#form").find("input#send");
  // var inputs=$("#form input[type='text']");
  //
  // $.each(inputs,function(){
  //   $(this).on("blur",function(){
  //     if ($(this).val() != "") {
  //       button.addClass("active");
  //     }
  //   });
  // });
  // if (first_name.hasClass("valid") && last_name.hasClass("valid")) {
  //     button.addClass("active");
  // }
});

function thankYou() {
  if ($("#send").hasClass("active")) {
    alert("Thank you!");
  }
}

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
