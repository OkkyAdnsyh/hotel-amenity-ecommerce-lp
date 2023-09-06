import './css/style.css';

const menuOpen = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-toggle-close');
const mobileNav = document.querySelector('.mobile-nav');

menuOpen.addEventListener('click', () => {
  mobileNav.classList.add('isActive')
})

menuClose.addEventListener('click', () => {
  mobileNav.classList.remove('isActive')
})



let a, b, c,
    submitContent,
    captcha,
    locked,
    validSubmit = false,
    timeoutHandle;

  // Generating a simple sum (a + b) to make with a result (c)
function generateCaptcha(){
  a = Math.ceil(Math.random() * 10);
  b = Math.ceil(Math.random() * 10);
  c = a + b;
  
  $('.questionA').html(a);
  $('.questionB').html(b);
  $('.alert').html('field cannot left blank');

  init();
}


// Check the value 'c' and the input value.
function checkCaptcha(){
  if(captcha === c){
    // Pop the green valid icon
    $('.answer').removeClass('wrong');
    $('.answer').addClass('correct');
    $('.alert').html("answer is correct");
    $('.alert').removeClass('wrong');
    $('.alert').addClass('correct');

    $('.main-cta--btn').removeAttr('disabled');
    validSubmit = true;
  }
  else if(captcha !== c){
    // Pop the red unvalid icon
    $('.answer').addClass('wrong');
    $('.answer').removeClass('correct');
    $('.alert').html("answer is wrong");
    $('.alert').addClass('wrong');
    $('.main-cta--btn').attr('disabled');
    validSubmit = false;
  }
  return validSubmit;
}

function unlock(){ locked = false; }


// Refresh button click - Reset the captcha
$('.refresh--button i.fa-refresh').on('click', function(){
  if (!locked) {
    locked = true;
    setTimeout(unlock, 500);
    generateCaptcha();
    setTimeout(checkCaptcha, 0);
  }
});


// init the action handlers - mostly useful when 'c' is refreshed
function init(){
  $('form').on('submit', function(e){
    e.preventDefault();
    if($('.submit__generated').hasClass('valid')){
      // var formValues = [];
      captcha = $('.submit__input').val();
      if(captcha !== ''){
        captcha = Number(captcha);
      }

      checkCaptcha();

      if(validSubmit === true){
        validSubmit = false;
        // Temporary direct 'success' simulation
        submitted();
      }
    }
    else {
      return false;
    }
  });


  // Captcha input result handler
  $('.answer').on('propertychange change keyup input paste', function(){
    // Prevent the execution on the first number of the string if it's a 'multiple number string'
    // (i.e: execution on the '1' of '12')
    window.clearTimeout(timeoutHandle);
    timeoutHandle = window.setTimeout(function(){
      captcha = $('.answer').val();
      if(captcha !== ''){
        captcha = Number(captcha);
      }
      checkCaptcha();
    },150);
  });
  // Submit white overlay click
  $('.main-cta--btn').on('click', function(){
    checkCaptcha();
  });
}

generateCaptcha();


document.querySelector('.open--letter').addEventListener('click', () => {
  document.querySelector('.letter--popup-outer').classList.add('isActive')
});
document.querySelector('.close--letter').addEventListener('click', () => {
  document.querySelector('.letter--popup-outer').classList.remove('isActive')
});

