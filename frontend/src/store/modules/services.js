// import axios from 'axios'

const getDefaultState = () => {
  return {
  }
}
const state = getDefaultState()

const getters = {
  // isLogin: state => (!!state.address && !!state.address.length),
}

const mutations = {
  RESET_APP: state => {
    Object.assign(state, getDefaultState())
  }
}

const actions = {
  // BIPTOPHONE_CODE: async (context, payload) => {
  //   let { data } = await axios.post(context.rootState.api.reefApi + 'strategy/biptophone/code', payload)
  //   return data
  // },
  // BIPTOPHONE_VALIDATE: async (context, payload) => {
  //   let { data } = await axios.post(context.rootState.api.reefApi + 'strategy/biptophone/validate', payload)
  //   return data
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}
