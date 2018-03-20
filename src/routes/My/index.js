import {Component} from 'react';
import MainLayout from 'layout/MainLayout.js'
import style from './My.css';

class My extends Component {
  constructor(props){
    super(props);
    this.state={

    } 
  }

  render() {
    return (
    	<MainLayout>
	      <div className={style.container}>
	        My
	      </div>
	     </MainLayout>
    )
  }
}

export default My;