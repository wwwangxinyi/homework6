var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector('#volume').innerHTML="100%";
	document.querySelector('#volumeSlider').value="100";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down"); // log the new speed to the console
	video.playbackRate *= .9;
	console.log("New Speed", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up"); // log the new speed to the console
	video.playbackRate *= 1.1;
	console.log("New Speed", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead"); 
	video.currentTime += 5;
	
	if(video.currentTime>=video.duration){
		video.currentTime=0;
		video.play();
	}
	console.log("Current Time:",video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted != video.muted;
	if (video.muted){
		document.querySelector("#mute").innerHTML = "Unmute"
		console.log("Mute")
	}
	else{
		document.querySelector("#mute").innerHTML = "Mute"
		console.log("Ummute")
	}
});

document.querySelector("#volumeSlider").addEventListener("click", function () {
    console.log("Volume Slider");
    document.querySelector("#volume").innerHTML = document.querySelector("#volumeSlider").value + "%";
    video.volume = document.querySelector("#volumeSlider").value / 100.0;
    console.log("New Volume:", document.querySelector("#volumeSlider").value + "%");
});

document.querySelector("#old").addEventListener("click", function () {
    console.log("Old School")
    video.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function () {
    console.log("Original")
    video.classList.remove("oldTime");
});

