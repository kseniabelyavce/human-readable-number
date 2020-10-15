module.exports = function toReadable(number) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
    'ninety'];

  var numberString = number.toString();

  if (number === 0) return 'zero';

  if (number < 20) {
    return ones[number].trim();
  }

  if (numberString.length === 2) {
    return (tens[numberString[0]] + ' ' + ones[numberString[1]]).trim();
  }

  if (numberString.length === 3) {
    if (numberString[1] === '0' && numberString[2] === '0')
      return (ones[numberString[0]] + ' hundred').trim();
    else
      return (ones[numberString[0]] + ' hundred ' + toReadable(+(numberString[1] + numberString[2]))).trim();
  }

  if (numberString.length === 4) {
    var end = +(numberString[1] + numberString[2] + numberString[3]);
    if (end === 0) return (ones[numberString[0]] + ' thousand').trim();
    if (end < 100) return (ones[numberString[0]] + ' thousand ' + toReadable(end)).trim();
    return (ones[numberString[0]] + ' thousand ' + toReadable(end)).trim();
  }
}


