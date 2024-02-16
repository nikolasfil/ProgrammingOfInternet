import crypto from 'crypto';

const hash = crypto.createHash('sha256');
const input = "ευαίσθητες πληροφορίες";
hash.update(input);
console.log(`${hash.digest('hex')}`);

const hash2 = crypto.createHash('sha256');
const input2 = "ευαίσθητες πληροφορίες";
console.time('time')
hash2.update(input2);
console.timeEnd('time')
console.log(`${hash2.digest('hex')}`);