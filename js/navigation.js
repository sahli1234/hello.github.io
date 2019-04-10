var bw = $(window).innerWidth();
function scrollingDown(){
  $('.logo1').css('display', 'none');
  $('.logo2').css('display', 'block');
  $('.shadow').css('position', 'fixed');
}
function scrollingUp(){
  $('.logo1').css('display', 'block');
  $('.logo2').css('display', 'none');
  $('.shadow').css('position', 'relative');
}
function scroller(){
  var $window = $(window);
  if(bw>641){
    $window.scroll(function(){
      return false;
    });
  }
  else{
    if(bw<=641&&bw>481){
      $window.scroll(function(){
        if ($window.scrollTop() >= 50) {
          scrollingDown();
          $('.shadow').css('height', '5rem');
          $('.logo').css('width', '10%');
          $('.logo').css('padding-top', '0.6rem');
          $('.logo').css('padding-bottom', '0.6rem');
        }
        else{
          scrollingUp();
          $('.shadow').css('height', 'auto');
          $('.logo').css('width', '30%');
          $('.logo').css('padding-top', '1rem');
          $('.logo').css('padding-bottom', '1rem');
        }
      })
    }
    else if(bw<=481&&bw>321){
      $window.scroll(function(){
        if($window.scrollTop() >= 50){
          scrollingDown();
          $('.shadow').css('height', '5rem');
          $('.logo').css('width', '15%');
          $('.logo').css('margin-left', '-0.2rem');
        }
        else if($window.scrollTop()==0){
          scrollingUp();
          $('.shadow').css('height', '6rem');
          $('.logo').css('width', '25%');
          $('.logo').css('margin-left', '1rem');
        }
      });
    }
    else{
      $window.scroll(function(){
        if($window.scrollTop() >= 50){
          scrollingDown();
          $('.logo').css('width', '25%');
          $('.logo').css('margin-left', '-0.3rem');
        }
        else if($window.scrollTop()==0){
          scrollingUp();
          $('.logo').css('width', '35%');
          $('.logo').css('margin-left', '1rem');
        }
      });
    }
  }
}

$(document).ready(function(){
    scroller();
    $('.menu').click(function(){
      let menu = $('#sideNav').css('margin-right');
      let width = $('#sideNav').css('width');
      if(parseInt(menu)<0){
        //open
        $('#sideNav').css('margin-right', "0");
        $('.container-fluid').css('margin-right', "20rem");
      }
      else{
        //close
        $('#sideNav').css('margin-right', "-"+width);
        $('.container-fluid').css('margin-right', "0");
      }
      $('#menu-burger').toggleClass("active");
    });
});