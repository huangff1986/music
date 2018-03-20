import {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva'
import style from './MainLayout.css';
import Footer from 'components/Footer';

class MainLayout extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className={ this.props.isHidden ? `${style.container} ${style.hidden}` : `${style.container}`}>
				{this.props.children}
				<Footer/>
			</div>
		)
	}
}


MainLayout.propTypes = {
	children: PropTypes.element.isRequired
}

function mapStateToProps(state) {
	return {
		isHidden: state.app.isLayoutHidden
	}
}

export default connect(mapStateToProps)(MainLayout);