import MyAlgo from '@randlabs/myalgo-connect';
import algosdk from 'algosdk';

const baseServer = "https://testnet-algorand.api.purestake.io/ps2";
const port = "";
const token = {
    "X-API-Key": "cfoNpaCzsF9xJRTOO39rF78aJRbK4fqj4W8LNv6k",
};
const algodClient = new algosdk.Algodv2(token, baseServer, port);

export default class MyAlgoConnect {
  static init() {
    return new MyAlgo()
  }

  static async balance(address) {
    const indexerURL = 'https://algoexplorerapi.io/idx2/v2/accounts/'
    let url2 = indexerURL + address
    try {
      let data = await fetch(url2)
      let data2 = await data.json()
      let data3 = JSON.stringify(data2.account.amount / 1000000) + ' Algos'
      return data3
    } catch (error) {
      console.log(error)
    }
  }

  static async connect(wallet) {
  try {
    const accounts = await wallet.connect();

    const addresses = accounts.map(account => account.address);
    return addresses;
  } catch (err) {
    console.error(err);
  }
  }

    static async createAsset(wallet, asset_name, unit_name, asset_total, asset_decimals) {
    try {

    let txn = await algodClient.getTransactionParams().do();
      
    txn = {
      ...txn,
      fee: 1000,
      flatFee: true,
      type: 'acfg',
      from: wallet[0],
      assetName: asset_name,
      assetUnitName: unit_name,
      assetDecimals: asset_decimals,
      assetTotal: asset_total,
      assetURL: 'developer.algorand.org',
      assetFreeze: '...',
      assetManager: '...',
      assetReserve: '...',
      assetDefaultFrozen: false
    };
  
    let signedTxn = await wallet.signTransaction(txn);
    console.log(signedTxn.txID);
  
    await algodClient.sendRawTransaction(signedTxn.blob).do();

  
  } catch(err) {
    console.error(err); 
  }
  }

  static async send(address, amt, myNote, sendingAddress, wallet, index = 0) {
    const algodToken = '0'
    const paramServer = 'https://algoexplorerapi.io/v2/transactions/params'
    const transServer = 'https://algoexplorerapi.io/v2/transactions'

    var buf = new Array(myNote.length)
    var encodedNote = new Uint8Array(buf)
    for (var i = 0, strLen = myNote.length; i < strLen; i++) {
      encodedNote[i] = myNote.charCodeAt(i)
    }

    console.log('My encoded note: ' + encodedNote)

    try {
      const params = await (await fetch(paramServer)).json()

      let txn = {
        from: sendingAddress,
        to: address,
        amount: parseInt(amt),
        note: encodedNote,
        genesisID: 'mainnet-v1.0',
        genesisHash: 'wGHE2Pwdvd7S12BL5FaOP20EGYesN73ktiC1qzkkit8=',
        type: 'pay',
        flatFee: true,
        fee: 1000,
        firstRound: params['last-round'],
        lastRound: params['last-round'] + 1000,
      }

      if (index !== 0) {
        txn.type = 'axfer'
        txn.assetIndex = parseInt(index)
      }

      console.log(txn)

      const signedTxn = await wallet.signTransaction(txn)

      let transactionID = await fetch(transServer, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-binary',
        },
        body: signedTxn.blob,
      })
        .then(response => response.json())
        .then(data => {
          return data.txId
        })
        .catch(error => {
          console.error('Error:', error)
        })

      return transactionID
    } catch (err) {
      console.error(err)
    }
  }
}