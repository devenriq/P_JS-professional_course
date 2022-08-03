import MediaPlayer from "./../src/MediaPlayer.js";
import Autoplay from "../src/plugins/Autoplay.js";

const video = document.querySelector("video");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const unmute = document.querySelector(".unmute");

const player = new MediaPlayer({ el: video, plugins: [new Autoplay()] });

play.onclick = () => player.play();
pause.onclick = () => player.pause();
unmute.onclick = () => player.unmute();
