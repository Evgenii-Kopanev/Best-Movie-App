const biggerInArray = (array) => {
  //return biggest value in an array
  array.reduce((a, b) => {
    return a > b ? a : b;
  });
};

export const threeBigger = (array) => {
  let myArray = [...array];
  let newArray = [];
  let biggerCell = biggerInArray(myArray);
  newArray.push(biggerCell);
};
//average the array to 2 decimals
export const arrayAverage = (array) => {
  return (array.reduce((a, b) => a + b, 0) / array.length).toFixed(2);
};

export const sortArrayOfObjectsByName = (arrayOfObjects) => {
  arrayOfObjects.sort((a, b) => {
    const nameA = a.movieName.toUpperCase();
    const nameB = b.movieName.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  });
};
