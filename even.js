function isEven(number) {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  const num = 8; 
  if (isEven(num)) {
    console.log(`${num} is even.`);
  } else {
    console.log(`${num} is not even.`);
  }
