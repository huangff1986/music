import {Component} from 'react';
import {connect} from 'dva';
import { withRouter } from "dva/router";
import style from './MusicPanel.css';

class MusicPanel extends Component {
	constructor(props) {
		super(props);
		this.state={};
	}

	handleBackClick() {	
		window.history.back();
	}

	render() {
		return (
			<div className={style.container}>
				<button onClick={this.handleBackClick.bind(this)}>back</button>
			</div>
		) 
	}
}

function mapStateToProps(state){
	return {
		musicPanel: state.app.musicPanel
	}
}

export default connect(mapStateToProps)(MusicPanel);