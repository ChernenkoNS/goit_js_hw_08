
import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STOREGE_KEY_ITEM = "videoplayer-current-time"


function onPlay(time) {
    localStorage.setItem(STOREGE_KEY_ITEM, String(time.seconds));
}

player.setCurrentTime(localStorage.getItem(STOREGE_KEY_ITEM) || 0 )

player.on('timeupdate', throttle((onPlay), 1000 )); 

