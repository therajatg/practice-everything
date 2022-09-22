const convert = (sentence) => {
  let arr = sentence.split(" ");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i.split().length; j++) {}
  }
  return arr.join(" ");
};
console.log(convert("i am awesome"));
