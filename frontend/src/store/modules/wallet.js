import { Minter, TX_TYPE } from 'minter-js-sdk'
// import { Loading, QSpinnerFacebook } from 'quasar'

const getDefaultState = () => {
  return {
    urlKey: null,
    seedkey: null,
    address: null,
    publicKey: null,
    privateKey: null,
    mnemonic: null,
    minterGate: null,
    sending: false,
    txError: false,
    txErrorData: ''
  }
}

const state = getDefaultState()

const getters = {
}

const mutations = {
  RESET_WALLET: state => {
    Object.assign(state, getDefaultState())
  },
  SAVE_URLKEY: (state, payload) => {
    state.urlKey = payload
  },
  SAVE_WALLET: (state, payload) => {
    state.seedkey = payload.seedkey
    state.address = payload.address
    state.privateKey = payload.privateKey
    state.mnemonic = payload.mnemonic
  },
  SAVE_GATE: (state) => {
    state.minterGate = new Minter({ apiType: 'gate', baseURL: 'https://gate-api.minter.network/api/v1/' })
    // state.minterGate = new Minter({ apiType: API_TYPE_NODE, baseURL: 'https://api.minter.stakeholder.space/' })
  },
  SET_SENDING: (state, payload) => {
    state.sending = payload
    // if (payload) {
    //   Loading.show({
    //     QSpinnerFacebook,
    //     spinnerColor: 'white',
    //     spinnerSize: 120,
    //     backgroundColor: 'indigo-10',
    //     message: 'Transaction is being sent, please wait',
    //     messageColor: 'white'
    //   })
    // } else {
    //   Loading.hide()
    // }
  },
  SET_TXERROR: (state, payload) => {
    if (payload instanceof Error) {
      state.txError = true
      state.txErrorData = payload
    } else {
      state.txError = false
      state.txErrorData = ''
    }
  }
}

const actions = {
  SENDER: (context, payload) => {
    context.commit('SET_SENDING', true)
    let txParams = {
      chainId: 1,
      data: payload.data,
      gasCoin: payload.gasCoin || 'BIP',
      payload: payload.payload || ''
    }
    switch (payload.type) {
      case 'send':
        txParams.type = TX_TYPE.SEND
        break
      case 'multisend':
        txParams.type = TX_TYPE.MULTISEND
        break
      case 'delegate':
        txParams.type = TX_TYPE.DELEGATE
        break
      case 'check':
        txParams.type = TX_TYPE.REDEEM_CHECK
        break
      case 'sell':
        txParams.type = TX_TYPE.SELL
        break
      case 'buy':
        txParams.type = TX_TYPE.BUY
        break
      default:
        txParams.type = TX_TYPE.SEND
        break
    }
    return new Promise((resolve, reject) => {
      context.state.minterGate.postTx(txParams, { privateKey: context.state.privateKey }).then(txHash => {
        console.log(payload.type + ' created: ' + txHash)
        resolve(txHash)
        context.commit('SET_SENDING', false)
      }).catch(error => {
        console.log(error)
        context.commit('SET_SENDING', false)
        reject(error)
      })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
