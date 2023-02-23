let points = [];
let mult = 0.001;

let weather;
function preload() {
  let url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.616363&lon=-111.829613&appid=e30f057024f399e0e4281bf280a03417'
  weather = loadJSON(url);
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);
  noiseDetail(1);
  angleMode(DEGREES);
  
  let density = 100;
  let space = width / density;

  for (let x = 0; x < width; x += space) {
    for (let y = 0; y< height; y += space) {
      let p = createVector(x + random(-10, 10), y + random(-10, 10));
      points.push(p);
    }
  }
};

function draw() {
  noStroke();

  for (let i = 0; i < points.length; i++) {

    let r = map(points[i].x, 0, width, 50, 255);
    let g = map(points[i].y, 0, height, 50, 255);
    let b = map(points[i].x, 0, width, 255, 50);

    fill(r, g, b)

    let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 270)

    points[i].add(createVector(cos(angle), sin(angle)))

    ellipse(points[i].x, points[i].y, 1)
  }
};
