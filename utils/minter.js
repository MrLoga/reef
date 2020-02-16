import { Minter, TX_TYPE } from 'minter-js-sdk'
import { generateWallet } from 'minterjs-wallet'

const minterGate = new Minter({ apiType: 'gate', baseURL: 'https://gate-api.minter.network/api/v1/' })

export const sender = payload => {
  let txParams = {
    privateKey: payload.privateKey,
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
    minterGate.postTx(txParams).then(txHash => {
      console.log('Sender 1111')
      console.log(payload.type + ' created: ' + txHash)
      resolve(txHash)
    }).catch(error => {
      console.log('Sender 2222')
      // console.log(error)
      reject(error)
    })
  })
}

export const checkToWallet = async (check, password) => {
  const wallet = generateWallet()
  const privateKey = wallet.getPrivateKeyString()

  try {
    const txHash = await sender({
      privateKey: privateKey,
      type: 'check',
      data: { check, password }
    })
    return {
      txHash,
      privateKey
    }
  } catch (error) {
    return error
  }
}
