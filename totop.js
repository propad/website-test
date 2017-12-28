window.onscroll = scroll1;

function scroll1()
{
    var toTop = document.getElementById('arrow');
    if (window.scrollY > 400){
      console.log(window.scrollY);
      // toTop.style.display='Block'
      toTop.classList.add("visible");
    } else {
      console.log(window.scrollY);
        toTop.classList.remove("visible");
    }
    $("#arrow").animate({scrollTop:0}, 300);
    // window.scrollY>400 ? toTop.style.display='Block' :  toTop.style.display='none';
}

function scrollUp(){
  $("html,body").animate({scrollTop:0}, 300);
}
$(document).ready(function(){
  $("#arrow").click(function(){
    console.log("clicked");
    scrollUp();
  });
});
