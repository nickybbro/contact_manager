//0 Set the result to a new copy of the array
export const question0 = (array) => {
  const newArray = [...array];
  return newArray;
};

//1 Set the result to the first item of the array
export const question1 = (array) => {
  return [array[0]];
};
//2 Set the result to the last item of the array
export const question2 = (array) => {
  return [array[array.length - 1]];
};
//3 filter out the items where active is false
export const question3 = (array) => {
  return array.filter((dogshit) => dogshit.isActive === true);
};
export const findEmail = (array, email) => {
  return array.filter((dogshit) => dogshit.email === email);
};
// 4 sort the items by last name
export const question4 = (array) => {
  let arrayCopy = [...array];
  return arrayCopy.sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
};

// 5 get the item of the array where lattitude is = 39.111969"
export const question5 = (array) => {
  const latMatch = array.find((element) => {
    console.log("element latitude is:", element.latitude);
    console.log("match bool is:", element.latitude === "39.111969");
    return element.latitude === "39.111969";
  });
  return [latMatch];
};
// 6 grab the 3rd item of the array and add it to the end of the array
export const question6 = (array) => {
  console.log("array is:", array);
  const kristen = array[2];
  const arrayCopy = [...array];
  arrayCopy.push(kristen);

  return arrayCopy;
};
// 7 grab the 4th item of the array and add it to the first of the array
export const question7 = (array) => {
  const bettie = array[3];
  return [bettie, ...array];
};
// 8 grab all of the items that have eyecolor === 'brown' and then sort by first name
export const question8 = (array) => {
  const brown = array.find((eye) => {
    return eye.eyeColor === "brown";
  });
  let arrayCopy1 = [...array];
  return arrayCopy1.sort((a, b) => (a.name.first > b.name.first ? 1 : -1));
};
// 9 create and return a new array of all of the email addresses
export const question9 = (array) => {
  return array.map((item) => {
    return item.email;
  });
};

// const anonymous = (array) => {
//   const first = array[0];
//   return first.email;
// };
// function anonymous2(item) {
//   return result;
// }
