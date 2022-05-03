const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const gravity = 0.7;

export class Sprite {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.height = 150;
  }

  draw() {
    context.fillStyle = "red";
    context.fillRect(this.position.x, this.position.y, 50, this.height);
  }

  update() {
    this.draw();

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y >= canvas.height) {
      this.velocity.y = 0;
    } else this.velocity.y += gravity;
  }
}
