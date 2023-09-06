const video = document.querySelectorAll('.video-overlay--container video');
const bannerArticle = document.querySelectorAll('.content-overlay--container article');
let img;
let bannerCounter = 0;

const sliderTrack = document.querySelector('.slider--track');
let lastNode;
let firstNode;
let centerNode;
let dumpNode;
let cloneNode;



setInterval(() => {

  // every 5 second, do loop to find which element has fade in class and then remove it
  for(let i = 0; i < video.length; i++){
    video[i].classList.remove('fadeIn');
    bannerArticle[i].classList.remove('fadeIn');
  };

  //then added banner counter by 1
  bannerCounter = (bannerCounter + 1) % video.length;


  // set class fade in to element equal to banner counter
  video[bannerCounter].classList.add('fadeIn');
  bannerArticle[bannerCounter].classList.add('fadeIn');
  
  // play video equal to banner counter
  video[bannerCounter].play();

  // set time delays for previous video to be restarted
  setTimeout(() => {
    video[bannerCounter - 1].pause();
    video[bannerCounter - 1].currentTime = 0
  }, 5000)

}, 7000);

setInterval(() => {
  firstNode = document.querySelector('.img-first');
  centerNode = document.querySelector('.img-center');
  lastNode = document.querySelector('.img-last');
  cloneNode = document.querySelector('.img-clone');
  dumpNode = document. querySelector('.img-dump');

  firstNode.classList.replace('img-first', 'img-center');
  centerNode.classList.replace('img-center', 'img-last');
  lastNode.classList.replace('img-last', 'img-dump');
  dumpNode.classList.replace('img-dump', 'img-clone');
  cloneNode.classList.replace('img-clone', 'img-first');


}, 3000)