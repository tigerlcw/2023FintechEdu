const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log(element);
}
console.log('------------------');
for (element of array) {
  console.log(element);
}
console.log('------------------');
// array.map
array.map((element) => {
  console.log(element);
});
