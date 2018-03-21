import {Component} from 'react';
import {connect} from 'dva';
import { withRouter } from 'dva/router';
import MainLayout from 'layout/MainLayout.js';
import Header from 'components/Header/';
import Tab from './Tab/'
import style from './Find.css';

class Find extends Component {
  constructor(props){
    super(props);
    console.log(this.props)
  }

  hiddenLayout() {
    this.props.dispatch({
      type: 'app/hiddenLayout'
    })
  }

  openMusicPanel() {
    this.props.dispatch({
      type: 'app/openMusicPanel',
    })
  }

  onPlayerClick() {
    this.hiddenLayout();
    this.openMusicPanel();
    window.history.pushState(['showLayout','closeMusicPanel'],'','')
    window.history.pushState('','','')
    // window.history.pushState(['abc','bbc'],'','')

    // window.history.pushState(['a2','b2'],'','')
    // window.history.pushState(['a3','b3'],'','')

    // setTimeout(()=>{console.log(window.history.state)},1000)
    
  }

  render() {
    return (
      <MainLayout>
        <div className={style.container}>
          <Header onPlayerClick={this.onPlayerClick.bind(this)}/>
          <Tab/>
        </div>
      </MainLayout>
    )
  }
}


export default withRouter(connect((state)=>(state))(Find));