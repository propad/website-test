$(document).ready(function(){
  $("#form").validate();
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
