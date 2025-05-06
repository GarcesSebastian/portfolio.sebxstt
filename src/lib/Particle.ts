import { v4 as uuidv4 } from "uuid";

const colorPalette = [
    'hsla(210, 70%, 50%, 0.4)',   // Primary blue
    'hsla(220, 50%, 40%, 0.3)',   // Deep blue
    'hsla(200, 60%, 60%, 0.3)',   // Softer blue
    'hsla(230, 40%, 30%, 0.2)',   // Dark navy
];

export class Particle {
    public id: string;
    public x: number;
    public y: number;
    public originalX: number;
    public originalY: number;
    public radius: number;
    public speedX: number;
    public speedY: number;
    public color: string;
    public friction: number;
    public ease: number;

    constructor(private canvasWidth: number, private canvasHeight: number) {
      this.id = uuidv4();
      this.x = Math.random() * this.canvasWidth;
      this.y = Math.random() * this.canvasHeight;
      this.originalX = this.x;
      this.originalY = this.y;
      this.radius = Math.random() * (2 - 0.5) + 0.5;
      this.speedX = (Math.random() - 0.5) * 1.5;
      this.speedY = (Math.random() - 0.5) * 1.5;
      
      this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      
      this.friction = 0.95;
      this.ease = 0.15;
    }

    reset() {
      this.x = Math.random() * this.canvasWidth;
      this.y = Math.random() * this.canvasHeight;
      this.originalX = this.x;
      this.originalY = this.y;
      this.radius = Math.random() * (2 - 0.5) + 0.5;
      this.speedX = (Math.random() - 0.5) * 1.5;
      this.speedY = (Math.random() - 0.5) * 1.5;
      
      this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      
      this.friction = 0.95;
      this.ease = 0.15;
    }

    update(mousePos: { x: number; y: number }) {
      const dx = mousePos.x - this.x;
      const dy = mousePos.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const pushRadius = 100;
      if (distance < pushRadius) {
        const angle = Math.atan2(dy, dx);
        const targetX = mousePos.x - Math.cos(angle) * pushRadius;
        const targetY = mousePos.y - Math.sin(angle) * pushRadius;

        this.speedX += (targetX - this.x) * 0.05;
        this.speedY += (targetY - this.y) * 0.05;
      }

      this.speedX += (this.originalX - this.x) * 0.05;
      this.speedY += (this.originalY - this.y) * 0.05;

      this.speedX *= this.friction;
      this.speedY *= this.friction;
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0) this.x = this.canvasWidth;
      if (this.x > this.canvasWidth) this.x = 0;
      if (this.y < 0) this.y = this.canvasHeight;
      if (this.y > this.canvasHeight) this.y = 0;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.save();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();

        ctx.restore();
    }
}