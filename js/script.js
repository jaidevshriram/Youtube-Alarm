//Current Time Variables
var current_hour;
var current_minute;

//Alarm Time Variables
var alarm_hour;
var alarm_minute;
var alarm = 0;

function currenttime() {
	var time = new Date();
	var hours = current_hour = time.getHours();
	var minutes = current_minute = time.getMinutes();
	var seconds = time.getSeconds();
	hours = update(hours);
	minutes = update(minutes);
	second = update(seconds);
	$("#current-time").html(hours + " : " + minutes);

	if(alarm == 0) {
		$('#player').css("display","none");
	}
}

function update(time)
{
	if(time<10)
		time="0"+time;
	return time;
}

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

  player.pauseVideo();
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function setalarm() {
	var hour = alarm_hour = $("#hour").val();
	var minutes = alarm_minute = $("#minutes").val();
	hour = update(hour);
	minutes = update(minutes);
	$('#Set-Alarm-Modal').find('.time').text(hour + " : " + minutes);
	$('#Set-Alarm-Modal').modal();
	$('#set-alarm').css("display","none");

	alarm = 1;
}

function check() {
	if(alarm == 1)
	{
		if(current_hour == alarm_hour && current_minute == alarm_minute)
		{
			$('#player').css("display","block");
			player.playVideo();
		}
	}
}

setInterval(currenttime, 1000);
setInterval(check, 1000);