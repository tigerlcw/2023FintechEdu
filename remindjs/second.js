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

console.log('car name:', car.name);
car.start();

car.stop();
