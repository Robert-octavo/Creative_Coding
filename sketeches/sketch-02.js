const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random')

const settings = {
  dimensions: [ 1080, 1080 ]
};

//change degrees to radians
const degtoRad = (degrees) => {
  return degrees / 180 * Math.PI;
};

//Random
const randomRange = (min, max) => {
  return Math.random() * (max - min) + min;
}

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#e0dddc';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';

    const cx = width * 0.5; // Center
    const cy = height * 0.5; // Center
    const w = width * 0.01;
    const h = height * 0.1;
    let x, y; // this will change

    const num = 50; //number of shapes
    const num1 = 100;
    const radius = width * 0.3;
    const radius_02 = width * 0.15; 

    for (let i = 0; i < num; i++){
      const slice = math.degToRad(360 / num);
      const angle = slice * i;
      //const angle_03 = (math.degToRad(360 / 100)) * i;

      const slice_02 = math.degToRad(360 / num1)
      const angle_02 = slice_02 * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);
      
      // ------------ Shape ------------------
      context.save();
      context.translate(x, y);
      context.rotate(-angle);
      //context.lineWidth = 0;
      context.strokeStyle = "#aca7a8"
      context.scale(1, 3);
      context.beginPath();
      context.rect(-w * 0.01, random.range(0, -h * 0.5), w * 0.2 , h * 0.5 );
      context.fill();
      context.stroke();
      context.restore();
      // ------------ Shape ------------------
      context.save();
      context.translate(x, y);
      context.rotate(-angle/*degtoRad(45)*/);//radian not degrees
      //context.scale(random.range(1, 3), 1/*randomRange(1, 2)*/); // scale for x and y
      context.scale(random.range(0.1, 2), random.range(0.2, 0.5))

      context.beginPath();
      //context.rect(-w * 0.5, -h * 0.5, w, h);
      context.rect(-w * 0.5, random.range(0, -h * 0.5), w, h);
      context.fill();
      context.restore();
      // ------------------ Shape--------//
      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);

      //context.lineWidth = 10;
      context.lineWidth = random.range(5, 20);

      context.beginPath();
      //context.arc(0, 0, radius, 0, slice * 0.3);
      //context.arc(0, 0, radius, slice * -0.3, slice * 0.3);
     // context.arc(0, 0, radius * random.range(0.7, 1.3), slice * -0.3, slice * 0.3);
      context.arc(0, 0, radius * random.range(0.7, 1.3), slice * random.range(1, -8), slice * random.range(1, 5)); 
      context.stroke();

      context.restore();

      // ------Add another shape--------------
      context.save();
      context.translate(cx, cy);
      context.rotate(angle_02);
      context.lineWidth = random.range(6, 10);
      context.strokeStyle = '#0849a2 '
      context.beginPath();
      context.arc(0, 0, radius_02 * random.range(0.7, 1.3), slice_02 * random.range(1, -8), slice_02 * random.range(1, 5)); 
      context.stroke();

      context.restore();

      // --------- Other Shape ---------
      context.save();
      context.translate(cx, cy);
      context.rotate(-angle_02);
      context.lineWidth = random.range(5, 7);
      context.strokeStyle = '#da172e'
      context.beginPath();
      context.arc(0, 0, radius_02 * random.range(0.7, 1.3), slice_02 * random.range(1, -8), slice_02 * random.range(1, 5)); 
      context.stroke();

      context.restore();
    }

  };
};

canvasSketch(sketch, settings);
