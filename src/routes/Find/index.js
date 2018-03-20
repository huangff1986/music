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
      payload: {
        goBack: ()=>{this.props.dispatch({
          type: 'app/showLayout'
        })}
      }
    })
  }

  onPlayerClick() {
    this.hiddenLayout();
    this.openMusicPanel();
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


export default withRouter(connect()(Find));