import {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import style from './App.css';
import MusicPanel from './MusicPanel';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {
	constructor(props){
		super(props);
		console.log(props)
	}

	render() {
		return (
			<div className={style.container}>
					{this.props.children}
					<ReactCSSTransitionGroup
						transitionName='pageAnimation'
						component='div'
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
					>
						{this.props.musicPanel.isOpen && <MusicPanel/> }
					</ReactCSSTransitionGroup>
			</div>
		)
	}
}

App.propTypes = {
	children: PropTypes.element.isRequired
}


function mapStateToProps(state) {
	return {
		musicPanel: state.app.musicPanel
	}
}

export default connect(mapStateToProps)(App);

