import {Component} from 'react'
import style from './Disc.css'
class Disc extends Component {
	constructor(props){
		super(props);	
		this.state={
			rotate: style.bg1
		}	
	}

	render(){
		return (
			<div className={style.container}>
				<div className={`${style.bg1} rotate`}>
					<div className={style.bg2}>
						<img src={this.props.cover}/>
					</div>
				</div>
			</div>
		)
	}
}

export default Disc;