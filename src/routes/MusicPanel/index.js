import {Component} from 'react';
import {connect} from 'dva';
import style from './MusicPanel.css';

class MusicPanel extends Component {
	constructor(props) {
		super(props);
		this.state={};
	}

	handleBackClick() {	
		this.props.musicPanel.goBack();
		this.props.dispatch({
			type: 'app/closeMusicPanel'
		})
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