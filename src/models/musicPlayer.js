const player = new Audio();
function getRandomNum(length, currentMusic){
  let randomNum = Math.ceil(Math.random()*length-1);
  if (randomNum == currentMusic) {getRandomNum()};
  return randomNum;
}

// let eventTester = function(e){
//   player.addEventListener(e,function(){
//       console.log((new Date()).getTime(),e);
//   });
// }

// eventTester("loadstart");      //客户端开始请求数据
// eventTester("progress");       //客户端正在请求数据
// eventTester("suspend");        //延迟下载
// eventTester("abort");          //客户端主动终止下载（不是因为错误引起），
// eventTester("error");          //请求数据时遇到错误
// eventTester("stalled");        //网速失速
// eventTester("play");           //play()和autoplay开始播放时触发
// eventTester("pause");          //pause()触发
// eventTester("loadedmetadata"); //成功获取资源长度
// eventTester("loadeddata");     //
// eventTester("waiting");        //等待数据，并非错误
// eventTester("playing");        //开始回放
// eventTester("canplay");        //可以播放，但中途可能因为加载而暂停
// eventTester("canplaythrough"); //可以播放，歌曲全部加载完毕
// eventTester("seeking");        //寻找中
// eventTester("seeked");         //寻找完毕
// eventTester("timeupdate");     //播放时间改变
// eventTester("ended");          //播放结束
// eventTester("ratechange");     //播放速率改变
// eventTester("durationchange"); //资源长度改变
// eventTester("volumechange");   //音量改变


export default {

  namespace: 'musicPlayer',

  state: {
    currentMusic: 4,
    playedTime:0,
    totalTime:0,
    isMusicEnd:true,
    playMode: 2,
    isPlay: false,
    musicList: [
      {
          src:"http://qqma.tingge123.com:83/123/2016/10/青蛙乐队 - 小跳蛙.mp3",
          artist:"青蛙乐队",
          name:"小跳蛙",
          img:"http://singerimg.kugou.com/uploadpic/softhead/400/20160913/20160913140233132.jpg",
          id:"66575568441"
      },
      {
          src:"http://qqma.tingge123.com:83/20081119/甜甜的.mp3",
          artist:"周杰伦",
          name:"甜甜的",
          img:"http://singerimg.kugou.com/uploadpic/softhead/400/20171026/20171026100450393.jpg",
          id:"66575568442"
      },
      {
          src:"http://qqma.tingge123.com:83/20081120/不得不爱.mp3",
          artist:"潘玮柏",
          name:"不得不爱",
          img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=781787101,1026788150&fm=27&gp=0.jpg",
          id:"66575568443"
      },
      {
          src:"http://qqma.tingge123.com:83/123/2016/07/张韶涵 - 再见之前.mp3",
          artist:"张韶涵",
          name:"再见之前",
          img:"http://games.enet.com.cn/jzimages/201009/s1283410316.jpg",
          id:"66575568444"
      },
      {
          src:"http://qqma.tingge123.com:83/123/2016/05/G.E.M.邓紫棋 - 画.mp3",
          artist:"邓紫棋",
          name:"画",
          img:"http://img.18183.com/uploads/allimg/140510/41-140510145612.jpg",
          id:"66575568445"
      },
      {
          src:"http://qqma.tingge123.com:83/123/2014/12/无字碑-张靓颖.mp3",
          artist:"张靓颖",
          name:"无字碑",
          img:"http://singerimg.kugou.com/uploadpic/softhead/400/20170628/20170628110356447.jpg",
          id:"66575568446"
      },
      {
          src:"http://qqma.tingge123.com:83/123/2010/09/叶子-阿桑.mp3",
          artist:"阿桑",
          name:"叶子",
          img:"http://star.kuwo.cn/star/starheads/180/66/26/1776695622.jpg",
          id:"66575568447"
      },
      {
          src:"http://qqma.tingge123.com:83/20081117/认真的雪.mp3",
          artist:"薛之谦",
          name:"认真的雪",
          img:"http://img14.3lian.com/201512/02/9478d19283ce6f990741fbac92203132.jpg",
          id:"66575568449"
      },

      {
          src:"http://qqma.tingge123.com:83/20081117/杀手.mp3",
          artist:"林俊杰",
          name:"杀手",
          img:"http://wenwen.soso.com/p/20070621/20070621060503-1458706809.jpg",
          id:"66575568448"
      },
    ]
  },

  subscriptions: {
    // 播放器初始化
    setup({ dispatch, history }) { 
      // 加载初始化音乐
      dispatch({
        type: 'loadMusic'
      })
      player.addEventListener('play',function(){
        dispatch({
          type: 'isPlay'
        })
      })
      player.addEventListener('pause',function(){
        dispatch({
          type: 'isPause'
        })
      })
      player.addEventListener('timeupdate',function(){
        let currentTime = this.currentTime;
        let duration = this. duration;
        dispatch({
          type: 'updataTime',
          payload: {
            playedTime: currentTime || 0,
            totalTime: duration || 0
          }
        })
        // 如果播放结束，播放一首
        if (player.ended) {
          dispatch({
            type: 'playNext'
          })
        }
      })
    },
  },

  effects: {

    *loadMusic({payload}, {select, call, put}) {
      const { currentMusic, musicList } = yield select((state)=> {
        return {
          currentMusic: state.musicPlayer.currentMusic,
          musicList: state.musicPlayer.musicList
        }
      })
      player.src=musicList[currentMusic].src;
    },

    *play(){
      yield player.play();
    },

    *pause(){
      yield player.pause();
    },

    *replay(){
      yield player.currentTime = 0;
    },

    *playNext({payload},{ select, call, put }) {
      const {currentMusic, musicList, playMode } = yield select((state) => {
        return {
          currentMusic: state.musicPlayer.currentMusic,
          musicList: state.musicPlayer.musicList,
          playMode: state.musicPlayer.playMode
        }
      })

      let nextMusic;

      switch(playMode) {
        case 0: 
          if(currentMusic >= musicList.length - 1) {
            nextMusic = 0
          } else {
            nextMusic = currentMusic + 1
          }
          break;
        case 1:
          yield put({
            type: 'replay'
          })

          return 
          break;
        case 2: 
          nextMusic = getRandomNum(musicList.length, currentMusic);
          break;
      }



      yield put({
        type: 'updataCurrentMusic',
        payload: {
          currentMusic: nextMusic
        }
      });

      yield put({
        type: 'loadMusic'
      })

      yield put({
        type: 'play'
      })
    },

    *playPrev({payload}, { select, call, put }) {
      const {currentMusic, musicList, playMode } = yield select((state) => {
        return {
          currentMusic: state.musicPlayer.currentMusic,
          musicList: state.musicPlayer.musicList,
          playMode: state.musicPlayer.playMode
        }
      })

      let prevMusic;

      switch(playMode) {
        case 0: 
          if(currentMusic <= 0) {
            prevMusic = musicList.length - 1
          } else {
            prevMusic = currentMusic - 1
          }
          break;
        case 1:
          yield put({
            type: 'replay'
          })
          return 
          break;
        case 2: 
          prevMusic = getRandomNum(musicList.length, currentMusic);
          break;
      }


      yield put({
        type: 'loadMusic'
      })

      yield put({
        type: 'play'
      })

      yield put({
        type: 'updataCurrentMusic',
        payload: {
          currentMusic: prevMusic
        }
      })
    },
    *changeMode({payload}, { select, call, put }) { 
      const {mode} = yield select((state)=> {
        return {
          mode: state.musicPlayer.playMode
        }
      })

      if (mode === 2) {
        yield put({
          type: 'setMode',
          payload: 0
        })
      } else {
        yield put({
          type: 'setMode',
          payload: mode + 1
        })
      }
    }
  },

  reducers: {
    updataTime(state, {payload}) {
      return {
        ...state,
        totalTime: payload.totalTime,
        playedTime: payload.playedTime
      }
    },
    updataCurrentMusic(state, {payload}) {
      return {
        ...state,
        currentMusic: payload.currentMusic
      }
    },
    isPlay(state) {
      return {
        ...state,
        isPlay: true
      }
    },
    isPause(state) {
      return {
        ...state,
        isPlay: false
      }
    },
    setMode(state, {payload}) {
      return {
        ...state,
        playMode: payload
      }
    }
  },

};

/*
 * playnext有3中情况
 * 1. 顺序
 * 2. 随机
 * 3. 单曲
 */

// random