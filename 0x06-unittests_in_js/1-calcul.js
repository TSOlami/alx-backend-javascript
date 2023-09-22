function round(number) {
  return Math.round(number);
}

function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    return round(a) + round(b);
  } if (type === 'SUBTRACT') {
    return round(a) - round(b);
  } if (type === 'DIVIDE') {
    const roundedB = round(b);
    if (roundedB === 0) {
      return 'Error';
    }
    return round(a) / roundedB;
  }
  return 'Error: Invalid type';
}

module.exports = calculateNumber;
