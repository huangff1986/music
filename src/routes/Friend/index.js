import {Component} from 'react';
import MainLayout from 'layout/MainLayout.js'
import style from './Friend.css';

class Friend extends Component {
  constructor(props){
    super(props);
    this.state={

    } 
  }
  render() {
    return (
      <MainLayout>
        <div className={style.container}>
          Friend
        </div>
      </MainLayout>
    )
  }
}

export default Friend;