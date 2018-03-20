import {Component} from 'react';
import MainLayout from 'layout/MainLayout.js'
import style from './Video.css';

class Video extends Component {
  constructor(props){
    super(props);
    this.state={

    } 
  }

  render() {
    return (
      <MainLayout>
        <div className={style.container}>
          Video
        </div>
      </MainLayout>
    )
  }
}

export default Video;