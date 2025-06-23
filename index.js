const circle = document.querySelector(".circle");
let mouseX = 0,
  mouseY = 0;
let circleX = 0,
  circleY = 0;
const speed = 0.14;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  circleX += (mouseX - circleX) * speed;
  circleY += (mouseY - circleY) * speed;

  circle.style.left = `${circleX}px`;
  circle.style.top = `${circleY}px`;

  requestAnimationFrame(animate);
}

animate();
