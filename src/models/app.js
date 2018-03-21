
export default {

  namespace: 'app',

  state: {
    layout: {
      isShow: true,
    },
    musicPanel: {
      isOpen: false
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    showLayout(state, action) {
      return {
        ...state,
        layout: {
          isShow: true,
        }
      }
    },
    hiddenLayout(state, action) {
      return {
        ...state,
        layout: {
          isShow: false,
        }
      }
    },
    openMusicPanel(state, action){
      return {
        ...state,
        musicPanel: {
          isOpen: true,
        }
      }
    },
    closeMusicPanel(state, action){
      return {
        ...state,
        musicPanel: {
          isOpen: false,
        }
      }
    }

  },

};
