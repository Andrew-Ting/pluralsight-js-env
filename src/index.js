const numeral = require('numeral');
const courseValue = numeral(1000).format('$0,0.00');
console.log(`I Won't pay ${courseValue} for this!`);