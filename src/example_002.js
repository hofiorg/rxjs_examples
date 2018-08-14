let result = String('RxJS')
  .toUpperCase()
  .substring(0, 2)
  .concat(' ')
  .repeat(3)
  .trim()
  .concat('!'); //-> "RX RX RX!"

console.log('result', result);