// Example: elliptic

import elliptic from 'elliptic'
console.log('elliptic', Object.keys(elliptic))

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
// console.log(signature)

// Export DER encoded signature in Array
let derSign = signature.toDER()
console.log('elliptic: message verification', priv.verify(msg, derSign))


// Example: opengpg
// import openpgp from 'openpgp'
import ecdsa from 'secp256k1'
import crypto from 'crypto'
console.log('ecdsa', Object.keys(ecdsa))

// let privateKey = crypto.randomBytes(32)
//a random message to sign
let rmsg = crypto.randomBytes(32)

//get the public key in a compressed format
// let pubKey = ecdsa.createPublicKey(privkey, true)

//sign the message
// let sig = ecdsa.sign(rmsg, privkey)

//verify the signature
// if(ecdsa.verify(msg, sig, pubKey)){
//   console.log("valid signature")
// }


import eccrypto from 'eccrypto'
console.log('eccrypto', Object.keys(eccrypto))
let pkey = eccrypto
