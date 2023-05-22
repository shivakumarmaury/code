var video = document.querySelector('.videoPlayer');
var eMove = document.querySelector('.videoplayer-bar-played');
var btn = document.querySelector('.play-pause');
$(".video_duration").html(secondsToHms(video.duration));
function togglePlayPause(){
  if(video.paused){
    btn.className = 'pause';
    video.play();
  }else{
    btn.className = 'play';
    video.pause();
  }
}
btn.onclick = function(){
  togglePlayPause();
}
video.addEventListener('timeupdate', function(){
  var timerang = video.currentTime / video.duration;
  eMove.style.width = timerang * 100 +"%";
  $(".video_current_time").html(secondsToHms(video.currentTime));
  if(video.ended){
    btn.className = "play";
  }
})
function secondsToHms(d) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);
  if(h!=0 && m<10){
    m="0"+m;
  }
  if(s<10){
    s="0"+s;
  }
  var hDisplay = h + ":";
  var mDisplay = m + ":";
  var sDisplay = s;
  if(h==0){
    return mDisplay + sDisplay;
  }else{
    return hDisplay + mDisplay + sDisplay;
  }
}