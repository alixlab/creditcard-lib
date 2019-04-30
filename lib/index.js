function cardValidator(strCard) {
  if (typeof strCard !== 'string') {
    return false;
  }
  strCard = strCard.replace(/[^0-9]/g, '');
  if (strCard.length !== 16) {
    return false;
  }
  strCard = strCard.split('');
  let tmp = strCard.map((value, index) => {
    if (index % 2 === 0) {
      value = parseInt(value) * 2;
    }
    if (value > 9) {
      return (parseInt(value) % 10) + 1;
    } else {
      return parseInt(value);
    }
  });
  let sum = tmp.reduce((accumulator, currentValue) => accumulator + currentValue);
  if (sum % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports.cardValidator = cardValidator;