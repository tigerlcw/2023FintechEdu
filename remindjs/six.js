let car = {
  // object -> key:value 형식
  name: 'sonata',
  ph: '500ph',
  start: function () {
    console.log('engine is starting');
  },
  stop: function () {
    console.log('engine is stopped');
  },
};

let carname = car.name;
let carph = car.ph;

console.log(carname, carph);

let { name, ph } = car; // javascript 구조분해

console.log(name, ph);
