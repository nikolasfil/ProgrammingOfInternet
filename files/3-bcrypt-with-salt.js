const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPassword = 'veryhardtoguess';

// bcrypt.genSalt(saltRounds, function (err, salt) {
//     bcrypt.hash(myPassword, salt, function (err, hash) {
//         console.log(`Salt: ${salt}, hash: ${hash}`)
//     });
// });

//Το ίδιο σε ένα βήμα:
bcrypt.hash(myPassword, saltRounds, function (err, hash) {
   console.log(`hash: ${hash}`);
});

bcrypt.hash(myPassword, saltRounds, function (err, hash) {
   console.log(`hash: ${hash}`);
});

const hashedPass1 = `$2b$10$hqlC5pwE/SsmkO6N14m1Z.4/sHYnIhatyw5o/zEsD/weNTdh5GZl2`;
bcrypt.compare(myPassword, hashedPass1, function (err, result) {
   console.log(result);
});

let res = (async () => {
   console.log(await bcrypt.compare(myPassword, hashedPass1));
})();

// const hashedPass2 = '$2b$10$RTVfPrP.F/oFZEjKZilW7eYJlYqMlMG4la.RGHdA84yvFgltLTcQq'
// bcrypt.compare(myPassword, hashedPass2, function (err, result) {
//     console.log(result)
// });
