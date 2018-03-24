class player {
	constructor(){
		this.audio = new Audio;
	}

	loadMusic(src){
		this.audio.src = src
	}

	play(){
		this.audio.play();
	}

	pause(){
		this.audio.pause();
	}

}

export default player;