const ashiq = {
  tariq: "hellodsadasdas",
};

const j = {
  [ashiq.tariq]: {
    apple: "orange",
  },
};

console.log("ashiq ==> ", ashiq);

console.log("J ==> ", j);

console.log("J hello ==> ", j.hello);
