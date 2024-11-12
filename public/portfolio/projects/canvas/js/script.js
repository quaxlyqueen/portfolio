let isDrawing = false;
let lastX = 0;
let lastY = 0;

const canvas = document.querySelector('#draw');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);

  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });

const ctx = canvas.getContext('2d');
  ctx.strokeStyle = '#BADA55';
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';

const buttons = document.querySelectorAll('.color');
  buttons.forEach(button => button.addEventListener('click', updateColor));

function updateColor() {
  ctx.strokeStyle = `hsl(${this.id}, 100%, 50%)`;
}

function draw(e) {
  if(!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  [lastX, lastY] = [e.offsetX, e.offsetY];
  ctx.lineTo(lastX, lastY);
  ctx.stroke();
}
