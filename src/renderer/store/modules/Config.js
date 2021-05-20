// {role}_{prop}: { [property: string]: string }
const state = {
  roomId: 1,
  displayRoomId: 1,
  isConnected: false,
  isShowAvatar: true,
  isShowMemberShipIcon: true,
  isShowFanMedal: true,
  avatarSize: 24,
  combineSimilarTime: 3000,
  showGiftThreshold: 30,
  isShowInteractInfo: false,
  showGiftCardThreshold: 0,
  isShowSilverGift: false,
  guardNumber: 0,
  windowOpacity: 1,
  recordId: "",
  recordStartTime: 0,
  isRecording: false,
  recordDir: "",
  danmakuFont: 'unset',
  isWithCookie: false,
  isUseMiniGiftCard: false,
  isAutoRecord: false,

  optionstring: "{A}\n{B}\n{C}",
  container_style: {
    background: "rgba(0, 0, 0, 0.3)"
  },
  historyRooms: [],

  message_lv0: {
    background: 'rgba(0,0,0,0)'
  },
  name_lv0: {
    'font-size': '16px',
    '-webkit-text-stroke-width': '0px',
    '-webkit-text-stroke-color': 'white',
    color: 'white'
  },
  comment_lv0: {
    'font-size': '16px',
    color: 'white',
    "-webkit-text-stroke-color": 'rgba(0,0,0,0)'
  },

  message_lv3: {
    background: 'rgba(0,0,0,0)'
  },
  name_lv3: {
    'font-size': '16px',
    '-webkit-text-stroke-width': '0px',
    '-webkit-text-stroke-color': 'crimson',
    color: 'white'
  },
  comment_lv3: {
    'font-size': '16px',
    color: 'white',
    "-webkit-text-stroke-color": 'rgba(0,0,0,0)'
  },

  message_lv2: {
    background: 'rgba(0,0,0,0)'
  },
  name_lv2: {
    'font-size': '16px',
    '-webkit-text-stroke-width': '0.2px',
    '-webkit-text-stroke-color': 'crimson',
    color: 'white'
  },
  comment_lv2: {
    'font-size': '16px',
    color: 'white',
    "-webkit-text-stroke-color": 'rgba(0,0,0,0)'
  },

  message_lv1: {
    background: 'rgba(0,0,0,0)'
  },
  name_lv1: {
    'font-size': '16px',
    '-webkit-text-stroke-width': '0.2px',
    '-webkit-text-stroke-color': 'crimson',
    color: 'white'
  },
  comment_lv1: {
    'font-size': '16px',
    color: 'white',
    "-webkit-text-stroke-color": 'rgba(0,0,0,0)'
  },

}

const mutations = {
  UPDATE_STYLE(state, payload) {
    const objKey = `${payload.prop}_lv${payload.role}`
    state[objKey] = { ...state[objKey], ...payload.style }
  },

  UPDATE_CONTAINER_STYLE(state, payload) {
    state['container_style'] = { ...state['container_style'], ...payload.style }
  },

  UPDATE_CONFIG(state, payload) {
    for (const key in payload) {
      state[key] = payload[key]
    }
  },

  UPDATE_CONFIG_TEMP(state, payload) {
    for (const key in payload) {
      state[key] = payload[key]
    }
  }
}

const actions = {
  async UPDATE_STYLE({ commit }, payload) {
    commit('UPDATE_STYLE', payload)
  },

  async UPDATE_CONTAINER_STYLE({ commit }, payload) {
    commit('UPDATE_CONTAINER_STYLE', payload)
  },

  async UPDATE_CONFIG({ commit }, payload) {
    commit('UPDATE_CONFIG', payload)
  },

  async UPDATE_CONFIG_TEMP({ commit }, payload) {
    commit('UPDATE_CONFIG_TEMP', payload)
  }
}

export default {
  state,
  mutations,
  actions
}
