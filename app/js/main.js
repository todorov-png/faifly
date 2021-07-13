'use strict';


function aboutShowVideo() {
  const background = document.querySelector('.about-video__background'),
        play = document.querySelector('.about-video__play'),
        video = document.querySelector('.about-video__video');

  background.style.display = 'none';
  play.style.display = 'none';
  video.style.display = 'block';   

}


function teamImageHeight() {
  const teamPerson = document.querySelector('.team-person');

  if (teamPerson) {
    const teamPersonItems = teamPerson.querySelectorAll('.team-person__item-img'),
          height = teamPersonItems[0].clientWidth / 218 * 229;

    teamPersonItems.forEach(item => {
      item.style.height = height + 'px';
    });
  }
}


teamImageHeight();


window.addEventListener("resize", () => {
  teamImageHeight();
});