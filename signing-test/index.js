let Attestations = require('./azure-attestations');

var attestations = new Attestations();

let id = 'jwalsh.id'

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
