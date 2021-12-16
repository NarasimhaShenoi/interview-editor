let sum = function (x) {
    return function (y) {
      if (y) return sum(x + y);
      return x;
    };
  };


let sum1 = a => b => b? sum1(a+b): b;
  
console.log(sum(1)(2)(3)(4)());