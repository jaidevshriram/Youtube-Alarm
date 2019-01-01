function time() {
	var time = new Date();
	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();
	hours = update(hours);
	minutes = update(minutes);
	second = update(seconds);
	$("#current-time").html(hours + " : " + minutes);
}

function update(time)
{
	if(time<10)
		time="0"+time;
	return time;
}

setInterval(time, 1000);

var player;
function Activate( jQuery ) {
  player = new YT.Player('player', {
  height: '390',
  width: '640',
  videoId: 'nfWlot6h_JM',
  autoplay: '0',
  loop: '0',
  events: {
    'onReady': onPlayerReady
  }
});
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function setalarm() {
	var hour = $("#hour").val();
	var minutes = $("#minutes").val();
	hour = update(hour);
	minutes = update(minutes);
	$('#Set-Alarm-Modal').find('.time').text(hour + " : " + minutes);
	$('#Set-Alarm-Modal').modal();
	$('#set-alarm').css("display","none");
}