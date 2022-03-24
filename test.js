const obj1 = {
  age: 20,
  name: "xxx",
  address: {
    city: "beijing",
  },
  arr: ["a", "b", "c"],
};

const obj2 = deepClone(obj1);
console.log(obj2);
obj2.address.city = "sdasda";
console.log(obj1.address.city);

function deepClone(obj = {}) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  let result;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      // 递归调用！！！
      result[key] = deepClone(obj[key]);
    }
  }

  return result;
}
