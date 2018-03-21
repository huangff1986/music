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
			<div className={ this.props.isShow ? `${style.container}` : `${style.container} ${style.hidden}`}>
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
		isShow: state.app.layout.isShow
	}
}

export default connect(mapStateToProps)(MainLayout);