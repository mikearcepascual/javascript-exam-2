const getTheExactNumber = (numbers) => {
  // implement code here
  numbers.sort(function(a,b){return b-a});
  return numbers.find((element) => {
	return element%3 ===  0;
  });
}

export default getTheExactNumber;