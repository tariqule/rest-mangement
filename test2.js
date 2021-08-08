//array of objects
const veh = [
  { model: "Toyota", engine: "gas" },
  { model: "Honda", engine: "hybrid" },
  { model: "audi", engine: "gas" },
];

//return each item

// console.log(veh.pop());

// const randomFunc = (index) => {
//     return veh.map((e) => {
//       return e.model + index;
//     });

console.log(
  veh.filter((eachItem) => {
    return eachItem.engine === "gas";
  })
);

const Ashiq = (xyz) => {
  return veh.filter((eachItem) => {
    return eachItem.engine === xyz;
  });
};
console.log(Ashiq("gas"));

console.log(
  veh.map((eachItem) => {
    return eachItem.model;
  })
);

const apple = {
  type: "computer",
};

const mac = {
  processor: "IOS",
};

console.log(Object.assign(apple, mac));

//spread
const combiine = { ...apple, ...mac };

const newVeh = [{ model: "VW", engine: "Electric" }];

console.log([...veh, ...newVeh]);

const randomFunc = (index) => {
  return veh.map((e) => {
    return e.model === "toyota" ? e.model + index : e.model;
  });
};

console.log(randomFunc(" - 100"));
