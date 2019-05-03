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
  let tmpArray = strCard.map((value, index) => {
    if (index % 2 === 0) {
      value = parseInt(value) * 2;
      if (value > 9) {
        return (parseInt(value) % 10) + 1;
      }
    }
    return parseInt(value);
  });
  let sum = tmpArray.reduce((accumulator, currentValue) => accumulator + currentValue);
  if (sum % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports.cardValidator = cardValidator;