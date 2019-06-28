class AudioPlayer {
	constructor() {
		this.audioContext = null;
		this.audioBuffer = null;
		this.audioSource = null;

		this.audioPlaying = false;
		this.audioCurrentTime = 0;
		this.playbackRate = 1;
		this.loop = false;

		this.audioEndTimeout = null;

		this.lastTimeCheckTime = null;
	}

	// public methods
	openFile(file) {
		return Misc.readFileAsArrayBuffer(file)
		.then(arrayBuffer => {
			var ctx = this.getAudioContext();
			return ctx.decodeAudioData(arrayBuffer);
		})
		.then(buffer => {
			this.audioBuffer = buffer;
		});
	}
	play() {
		if (this.audioBuffer && !this.audioSource) {
			var ctx = this.getAudioContext();

			this.audioSource = ctx.createBufferSource();

			this.audioSource.buffer = this.audioBuffer;
			this.audioSource.playbackRate.value = this.playbackRate;
			this.audioSource.connect(ctx.destination);
			this.audioSource.start(0, this.getCurrentTime());

			this.audioPlaying = true; // this should be below, right?

			this.startAudioEndTimeout();

			return true;
		}
		return false;
	}
	pause() {
		if (this.audioSource) {
			this.audioSource.stop();
			this.audioSource = null;
			this.stopAudioEndTimeout();
		}
		this.audioPlaying = false;
	}
	stop() {
		this.pause();
		this.setCurrentTime(0);
	}
	getCurrentTime() {
		if (this.audioSource) {
			var ctx = this.getAudioContext();
			if (this.audioPlaying) {
				this.audioCurrentTime += (ctx.currentTime - this.lastTimeCheckTime) * this.playbackRate;
			}
			this.lastTimeCheckTime = ctx.currentTime;
		}
		return this.audioCurrentTime;
	}
	setCurrentTime(seconds) {
		this.audioCurrentTime = seconds;
		// reset player so it can move
		if (this.audioPlaying) {
			this.pause();
			this.play();
		}
	}
	getDuration() {
		return this.audioBuffer.duration;
	}
	setLoop(value) {
		this.loop = value;
	}
	setPlaybackRate(value) {
		this.playbackRate = value;
		if (this.audioSource) {
			this.audioSource.playbackRate.value = value;
		}
		this.stopAudioEndTimeout();
		this.startAudioEndTimeout();
	}

	// private methods
	getAudioContext() {
		if (!this.audioContext) {
			this.audioContext = new AudioContext();
		}
		return this.audioContext;
	}
	startAudioEndTimeout() {
		var timeUntilEnd = ((this.getDuration() - this.getCurrentTime()) / this.playbackRate) * 1000;
		if (timeUntilEnd != Infinity) {
			this.audioEndTimeout = setTimeout(() => this.end(), timeUntilEnd);
		}
	}
	stopAudioEndTimeout() {
		clearTimeout(this.audioEndTimeout);
	}

	end() {
		this.stop();
		if (this.loop) {
			this.play();
		}
	}
}