import {Component} from 'react';
import MainLayout from 'layout/MainLayout.js'
import style from './Account.css'

class Account extends Component {
	constructor(props){
		super(props);
		this.state={

		} 
	}

	render() {
		return (
			<MainLayout>
				<div className={style.container}>
					Account
				</div>
			</MainLayout>
		)
	}
}

export default Account;