class AudioPlayerUI {
	constructor() {
		// audio player
		this.audioPlayer = new AudioPlayer();

		// event listeners
		$('button.open-this-file').onclick = e => this.onClickOpenFileButton(e);
		$('button.play').onclick = e => this.onClickPlayButton(e);
		$('button.pause').onclick = e => this.onClickPauseButton(e);
		$('button.stop').onclick = e => this.onClickStopButton(e);
		$('.loop').onchange = e => this.onChangeLoopCheckbox(e);
		$('.playback-rate').onchange = e => this.onChangePlaybackRateNumber(e);
		$('.seek-bar').onmousedown = e => this.onMouseDownSeekBarProgress(e);

	}
	update() {
		$('.current-time').textContent = Misc.getHumanTime(this.audioPlayer.getCurrentTime());
		$('.seek-bar').value = this.audioPlayer.getCurrentTime();
	}
	startUpdating() {
		this.stopUpdating();
		this.updateTimeout = setTimeout(() => {
			this.update();
			this.startUpdating();
		}, 0);
	}
	stopUpdating() {
		if (this.updateTimeout) {
			clearTimeout(this.updateTimeout);
			this.updateTimeout = null;
		}
	}
	onClickOpenFileButton(e) {

		var file = $('input.file').files[0];

		if ($('input.file').files.length == 0) {
			$('.status').textContent = "Select a file first!";
			return;
		}

		$('.status').textContent = "Opening file...";
		$('.file-name').textContent = file.name;
		$('.file-size').textContent = Misc.getHumanSize(file.size);
		$('.file-type').textContent = file.type;
		$('.seek-bar').removeAttribute("value");

		this.audioPlayer.openFile(file)
		.then(() => {
			$('.status').textContent = "Stopped.";
			$('.duration').textContent = Misc.getHumanTime(this.audioPlayer.getDuration());
			$('.seek-bar').max = this.audioPlayer.getDuration();

			this.update();
		});
	}
	onClickPlayButton(e) {
		this.audioPlayer.play();
		$('.status').textContent = "Playing.";
		this.update();
		this.startUpdating();
	}
	onClickPauseButton(e) {
		this.audioPlayer.pause();
		$('.status').textContent = "Paused.";
		this.update();
		this.stopUpdating();
	}
	onClickStopButton(e) {
		this.audioPlayer.stop();
		$('.status').textContent = "Stop.";
		this.update();
		this.stopUpdating();
	}
	onChangeLoopCheckbox(e) {
		this.audioPlayer.setLoop(e.target.checked);
	}
	onChangePlaybackRateNumber(e) {
		this.audioPlayer.setPlaybackRate(e.target.value);
	}
	onMouseDownSeekBarProgress(e) {
		var time = e.offsetX * (this.audioPlayer.getDuration() / e.target.offsetWidth);
		this.audioPlayer.setCurrentTime(time);
		this.update();
	}
}