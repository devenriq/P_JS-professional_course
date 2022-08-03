const video = document.querySelector("video");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");

function MediaPlayer(config) {
  this.media = config.el;
}
MediaPlayer.prototype.play = function () {
  this.media.play();
};
MediaPlayer.prototype.pause = function () {
  this.media.pause();
};

const player = new MediaPlayer({ el: video });

play.onclick = () => player.play();
pause.onclick = () => player.pause();
