import {Component} from 'react';
import {connect} from 'dva';
import { withRouter } from "dva/router";
import style from './MusicPanel.css';
import Header from './Header/';
import Disc from './Disc/';
import Operation from './Operation/';
import Progressbar from './Progressbar/';
import Control from './Control/';

class MusicPanel extends Component {
	constructor(props) {
		super(props);
	}

	handleBackClick() {	
		window.history.back();
	}

	handlePlayPrev() {
		this.props.dispatch(
			{type: 'musicPlayer/playPrev'}
		)
	}

	handlePlayNext() {
		this.props.dispatch(
			{type: 'musicPlayer/playNext'}
		)
	}
	handlePlay() {
		this.props.dispatch(
			{type: 'musicPlayer/play'}
		)
	}

	handlePause() {
		this.props.dispatch(
			{type: 'musicPlayer/pause'}
		)
	}

	handleChangeMode() {
		console.log('已经执行')
		this.props.dispatch(
			{type: 'musicPlayer/changeMode'}
		)
	}
	render() {
		return (
			<div className={style.container}>	
				<div className={style.bg}
					style={{
						backgroundImage: `url(${this.props.cover})`,
						backgroundSize: 'cover',
						backgroundPosition: 'fixed'
					}}
				></div>
				<div className={style.wraper}>
					<Header {...this.props.header}/>
					<div className={style.content}>
						<Disc {...this.props.disc}/>
					</div>
					<div className={style.bottom}>
						<Operation/>
						<Progressbar {...this.props.progressbar}/>
						<Control 
							{...this.props.control}
							handlePlayPrev={this.handlePlayPrev.bind(this)}
							handlePlay={this.handlePlay.bind(this)}
							handlePause={this.handlePause.bind(this)}
							handlePlayNext={this.handlePlayNext.bind(this)}
							handleChangeMode={this.handleChangeMode.bind(this)}
						/>
					</div>	
				</div>
			</div>
		) 
	}
}

function mapStateToProps(state){
	const currentMusic = state.musicPlayer.currentMusic;
	return {
		musicPanel: state.app.musicPanel,
		cover: state.musicPlayer.musicList[currentMusic].img,
		header: {
			song: state.musicPlayer.musicList[currentMusic].name,
			artist: state.musicPlayer.musicList[currentMusic].artist
		},
		disc: {
			cover: state.musicPlayer.musicList[currentMusic].img
		},
		progressbar: {
			totalTime: state.musicPlayer.totalTime,
			playedTime: state.musicPlayer.playedTime,
		},
		control: {
			mode: state.musicPlayer.playMode,
			isPlay: state.musicPlayer.isPlay
		}
	}
}

export default connect(mapStateToProps)(MusicPanel);


{/*<button onClick={this.handlePlayPrev.bind(this)}>上一首</button>
<button onClick={this.handlePlay.bind(this)}>播放</button>
<button onClick={this.handlePause.bind(this)}>暂停</button>
<button onClick={this.handlePlayNext.bind(this)}>下一首</button>
<br/>
<div>总时长:{this.props.totalTime}</div>
<div>当前时长:{this.props.playedTime}</div>*/}