
export default {

  namespace: 'app',

  state: {
    isLayoutHidden: false,
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
        isLayoutHidden: false
      }
    },
    hiddenLayout(state, action) {
      return {
        ...state,
        isLayoutHidden: true
      }
    },
    openMusicPanel(state, action){
      return {
        ...state,
        musicPanel: {
          isOpen: true,
          goBack: action.payload.goBack
        }
      }
    },
    closeMusicPanel(state, action){
      return {
        ...state,
        musicPanel: {
          isOpen: false,
          goBack: null
        }
      }
    }

  },

};
