const getCommonItems = (array1, array2) => {
  // implement code here
  return array1.filter(x => array2.includes(x));
};

export default getCommonItems;
