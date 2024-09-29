
let serial = 0;

// for first shape of triangle 
document.getElementById('triangle').addEventListener('click', function () {
  serial += 1;

  const element = getTextInputValue('first-shape');
  const triangleBase = getInputValue('triangle-base');
  const triangleHeight = getInputValue('triangle-height');
  const areaString = 0.5 * triangleBase * triangleHeight;
  const area = parseFloat(areaString.toFixed(2));
  displayData(element, area);
  calculateArea();
  randomColor();

})

// for second shape of rectangle
document.getElementById('rectangle').addEventListener('click', function () {
  serial += 1;

  const element = getTextInputValue('second-shape');
  const length = getInputValue('length');
  const breath = getInputValue('breath');
  const areaString = length * breath
  const area = parseFloat(areaString.toFixed(2));
  displayData(element, area);
  calculateArea();

})

// for third shape of parallelogram
document.getElementById('parallelogram').addEventListener('click', function () {
  serial += 1;

  const element = getTextInputValue('third-shape');
  const base = getInputValue('base');
  const height = getInputValue('height');
  const areaString = base * height;
  const area = parseFloat(areaString.toFixed(2));
  displayData(element, area);
  calculateArea();

})

// for fourth shape of rhombus
document.getElementById('rhombus').addEventListener('click', function () {
  serial += 1;

  const element = getTextInputValue('fourth-shape');
  const diagonal1 = getInputValue('d1');
  const diagonal2 = getInputValue('d2');
  const areaString = 0.5 * diagonal1 * diagonal2;
  const area = parseFloat(areaString.toFixed(2));
  displayData(element, area);
  calculateArea();

})

// for fifth shape of pentsagon
document.getElementById('pentagon').addEventListener('click', function () {
  serial += 1;

  const element = getTextInputValue('fifth-shape');
  const oneSide = getInputValue('one-side');
  const anotherSide = getInputValue('another-side');
  const areaString = 0.5 * oneSide * anotherSide;
  const area = parseFloat(areaString.toFixed(2));
  displayData(element, area);
  calculateArea();

})

// for sixth shape of ellipse
document.getElementById('ellipse').addEventListener('click', function () {
  serial += 1;

  const element = getTextInputValue('sixth-shape');
  const oneSide = getInputValue('greater-radius');
  const anotherSide = getInputValue('smaller-radius');
  const areaString = 3.14 * oneSide * anotherSide;
  const area = parseFloat(areaString.toFixed(2));
  displayData(element, area);
  calculateArea();

})

// shifting blog site section
document.getElementById('blog').addEventListener('click', function () {
  window.location.href = 'blog.html';
})