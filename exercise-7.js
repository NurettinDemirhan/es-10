function sumUntil(maxValue) {
  output = 0
  for (i=0; i<=maxValue; i++){
    output = output + i
  }
  return output
}

console.log(sumUntil(5));