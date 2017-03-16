const Attestations = require('./azure-attestations');

let attestations = new Attestations();

// If using the exported blockstack wallet you could use something like the following
// let wallet = require('../blockstack-tools/wallet.json')
// let privKey = wallet.data_privkey;
// console.log(privKey)

// export PRIVKEY='41d35b2f2145a350f93362ba7ccc45b88153375ebe2d5ebb0b8899ca89007aa97'

let privKey = process.env.PRIVKEY

if (!privKey) {
  console.log('warning', 'no private key provided in PRIVKEY environment variable')
}

let id = 'jwalsh.id'

const prefix = '*************************'
console.log(prefix, 'Create')
// CREATE
attestations
  .create({
    signers: [
      'jwalsh.id',
      {
        id: 'bar.id'
      }
    ],
    chainpoint: true, // defaults to true
    data: {
      payload: 'In id erat non orci commodo lobortis.'
    }
  })
  .then(response => {
    id = response.id;
  })

attestations.retrieve(id).then(response => {
  console.log('The record for this attestation: ', response);
});

console.log(prefix, 'Sign')
// SIGN
attestations
  .sign(
    {
      send: false,
      key: '033927f487c1c648b7bbcdcf5f02b3c25128e3727ec66cf50954753c4f73c0a877',
      data: {
        payload: 'Fusce sagittis, libero non molestie mollis, magna orci ultrices dolor, at vulputate neque nulla lacinia eros.'
      }
    })
  .then(response => {
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
