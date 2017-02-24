import elliptic from 'elliptic'
// console.log(elliptic)

import wallet from './wallet.json'
// console.log(wallet)
const EC = elliptic.ec;
let ec = new EC('secp256k1');
// console.log(ec)

const privkey = wallet.data_privkey
const pubkey = wallet.data_pubkey

// Import keys
let priv = ec.keyFromPrivate(privkey, 'hex')
let pub = ec.keyFromPrivate(pubkey, 'hex')

// let key = ec
let msg = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

let signature = priv.sign(msg)
console.log(signature)

// Export DER encoded signature in Array
let derSign = signature.toDER()

console.log(priv.verify(msg, derSign))
