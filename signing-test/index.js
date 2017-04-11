const Attestations = require('./azure-attestations');

// If using the exported blockstack wallet you could use something like the following
let wallet = require('../blockstack-tools/wallet.json')
let privKey = process.env.PRIVKEY || wallet.data_privkey.toString()
console.log(privKey)

// export PRIVKEY='41d35b2f2145a350f93362ba7ccc45b88153375ebe2d5ebb0b8899ca89007aa97'
// let privKey =

let attestations = new Attestations({key: privKey});


if (!privKey) {
  console.log('warning', 'no private key provided in PRIVKEY environment variable')
}

let id = process.env.ID || 'jwalsh.id'

const prefix = '*************************'

console.log(prefix, privKey)

// CREATE
attestations
  .create({
    signers: [
      'jwalsh.id',
      {
        id: 'jwalsh.id'
      }
    ],
    chainpoint: true, // defaults to true
    data: {
      payload: 'In id erat non orci commodo lobortis.'
    }
  })
  .then(response => {
    console.log(prefix, 'Create', response)
    id = response.id;
  })

// RETREIVAL
attestations
  .retrieve(id)
  .then(response => {
    console.log(prefix, 'retrieve()')
    console.log('The record for this attestation: ', response);
  });

// SIGN
attestations
  .sign(
    {
      send: false,
      key: privKey,
      data: {
        payload: 'Fusce sagittis, libero non molestie mollis, magna orci ultrices dolor, at vulputate neque nulla lacinia eros.'
      }
    })
  .then(response => {
    console.log(prefix, 'sign')
    console.log('Signature accepted', response);
  });

// attestations.signer(id).then(response => {
//   console.log('Data about this signer: ', response);
// });

// attestations.listen(id, 'change', response => {
//   console.log('These identities have signed: ' + response.signed.join(', '));
//   console.log('These identities still need to sign: ' + response.unsigned.join(', '));
// });

// attestations.status(id).then(response => {
//   console.log('These identities have signed: ' + response.signed.join(', '));
//   console.log('These identities still need to sign: ' + response.unsigned.join(', '));
// });

// // Probably will just be a variant of the status() call
// // Performs a validation check on the Azure service
// attestations.verify(id).then(response => {
//   console.log('Can I trust this attestation? --> ' + response.verified)
// });
