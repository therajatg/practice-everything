const convert = (sentence) => {
  return sentence.split(" ").map((word) => word.toUpperCase());
};
console.log(convert("i am awesome"));
