import React from 'react';
import style from './Progressbar.css';

const Progressbar = (props) => {
	return (
		<div className={style.container}>
			<span className={style.playedTime}>{props.playedTime ? getTime(parseInt(props.playedTime)) : '00:00'}</span>
			<div className={style.progress}>
				<div className={style.played} style={{width: `${props.playedTime/props.totalTime*100}%`}}>
				</div>
			</div>
			<span className={style.totalTime}>{props.totalTime ? getTime(parseInt(props.totalTime)) : '00:00'}</span>
		</div>
	)
}

function getTime(musicTime){
    if(musicTime){
        if(musicTime<60){
            musicTime = `00:${musicTime<10?`0${musicTime}`:musicTime}`
        }else{
            musicTime = `${parseInt(musicTime/60)<10?`0${parseInt(musicTime/60)}`:parseInt(musicTime/60)}:${musicTime%60<10?`0${musicTime%60}`:musicTime%60}`
        }
        return musicTime

    }else{
        return `00:00`
    }
}

export default Progressbar;