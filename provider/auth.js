import crypto from 'crypto';
import {
  AuthRequest
} from 'blockstack-auth';
import {
  AuthResponse
} from 'blockstack-auth';
import {
  verifyAuthMessage
} from 'blockstack-auth';
import {
  decodeToken as _decodeToken
} from 'blockstack-auth';
import {
  TokenSigner,
  decodeToken
} from 'jsontokens';

const prefix = (new Array(40)).join('-');

// Crypto https://nodejs.org/api/crypto.html
console.log(prefix, 'crypto');
const prime_length = 60;
const diffHell = crypto.createDiffieHellman(prime_length);

diffHell.generateKeys('base64');

const rawPrivateKey = diffHell.getPrivateKey('hex');
const rawPublicKey = diffHell.getPublicKey('hex');

console.log("Public Key : ", rawPublicKey);
console.log("Private Key : ", rawPrivateKey);

// JSON Web Tokens (JWTs)
console.log(prefix, 'jwt');


const tokenPayload = {
  "a": 1,
  "b": 2
};
const token = new TokenSigner('ES256k', rawPrivateKey)
        .sign(tokenPayload);
console.log(token);

const tokenData = decodeToken(token);
console.log(tokenData);

// Signing
console.log(prefix, 'signing');
const privateKey = rawPrivateKey;
const authRequest = new AuthRequest(privateKey);
authRequest.setIssuer({
  username: 'jwalsh.id'
});
let requestToken = authRequest.sign();
console.log(requestToken);
console.log(_decodeToken(requestToken));
