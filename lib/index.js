function isString(strCard) {
  return typeof strCard === 'string';
}

function hasLength(strCard) {
  return strCard.length === 16;
}

function cardValidator(strCard) {
  if (!isString(strCard)) {
    return false;
  }
  strCard = strCard.replace(/[^0-9]/g, '');
  if (!hasLength(strCard)) {
    return false;
  }
  strCard = strCard.split('');
  if (strCard.every((item) => item === strCard[0])) {
    return false;
  }
  let multiplicationNums = strCard.map((value, index) => {
    if (index % 2 === 0) {
      value = parseInt(value) * 2;
    }
    return parseInt(value);
  });
  let calcNums = multiplicationNums.map((value) => {
    if (value > 9) {
      return (parseInt(value) % 10) + 1;
    }
    return parseInt(value);
  });
  let sums = calcNums.reduce((accumulator, currentValue) => accumulator + currentValue);
  if (sums % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports.cardValidator = cardValidator;