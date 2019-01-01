//Current Time Variables
var current_hour;
var current_minute;

//Alarm Time Variables
var alarm_hour;
var alarm_minute;
var alarm = 0;

//Youtube URL
var videoURLId = 'nfWlot6h_JM' ;
var isnewurl = 0;

function currenttime() {
	var time = new Date();
	var hours = current_hour = time.getHours();
	var minutes = current_minute = time.getMinutes();
	var seconds = time.getSeconds();
	hours = update(hours);
	minutes = update(minutes);
	second = update(seconds);
	$('#current-time').html(hours + " : " + minutes);

	if(alarm == 0) {
		$('#player').css("display","none");
		$('#youtube-video').css("display","none");
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
  videoId: videoURLId,
  autoplay: '0',
  loop: '1',
  controls: '0',
  disablekb: '1'
});
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

	$('#alarm-time-set').find('.alarm-time').text(hour + " : " + minutes);
	$('#alarm-time-set').css("display","block");

	$('#reset').css("display","block");
}

function check() {
	if(alarm == 1)
	{
		$('#youtube-video').css("display","block");

		if(current_hour == alarm_hour && current_minute == alarm_minute)
		{
			$('#player').css("display","block");
			$('#youtube-video').css("display","none");
			player.playVideo();
		}
	}
}

function changeurl() {
	var newurl = $('#youtube-url').val();

	var isid = 0;

	var newurlID = '';

	for(var i = 6; i < newurl.length; i++ ) {
		if(newurl[i]=='=' && newurl[i-1]=='v' && isid == 0)
		{
			isid = 1;
		}
		else if(isid == 1)
		{
			newurlID += newurl[i];
		}
	}

	videoURLId = new String(newurlID);

	isnewurl = 1;
	player.cueVideoById(videoURLId);

	var temp = new YT.Player('player', {
	  height: '390',
	  width: '640',
	  videoId: videoURLId,
	  autoplay: '0',
	  loop: '1',
	  controls: '0',
	  disablekb: '1'
	});
	
	//$('#Change-Video').find('#new-vid-title').text(temp.getVideoData().title);
	$('#Change-Video').find('img').attr('src', "https://img.youtube.com/vi/" + videoURLId + "/mqdefault.jpg")
	$('#Change-Video').modal();
}

setInterval(currenttime, 1000);
setInterval(check, 1000);