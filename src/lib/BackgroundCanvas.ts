import { Particle } from "./Particle";

export class BackgroundCanvas {
    public static instance: BackgroundCanvas;

    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    public particles: Map<string, Particle> = new Map();
    public maxParticles: number;
    public offset: number = 100;
    public percentage: number = 0.15;

    public mousePosition: { x: number; y: number } = { x: 0, y: 0 };

    public animationFrame: number | null = null;

    private constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        this.maxParticles = Math.ceil(window.innerWidth * this.percentage);
    }

    public static getInstance(canvas: HTMLCanvasElement): BackgroundCanvas {
        if (!BackgroundCanvas.instance) {
            BackgroundCanvas.instance = new BackgroundCanvas(canvas);
        }
        return BackgroundCanvas.instance;
    }

    public start(): void {
        this.maxParticles = Math.ceil(window.innerWidth * this.percentage);

        for (let i = 0; i < this.maxParticles; i++) {
            this.addParticle(new Particle(this.canvas.width, this.canvas.height));
        }

        this.render();
    }

    public stop(): void {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
            this.clearParticles();
            this.clear();
        }
    }

    public update(): void {
        this.particles.forEach((particle) => {
            particle.update(this.mousePosition);
            particle.draw(this.ctx);
    
            const otherParticles = Array.from(this.particles.values()).filter(p => p.id !== particle.id);
    
            otherParticles.forEach((otherParticle) => {
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
                
              if (distance < this.offset) {
                this.ctx.save();
    
                this.ctx.beginPath();
                this.ctx.moveTo(particle.x, particle.y);
                this.ctx.lineTo(otherParticle.x, otherParticle.y);
                this.ctx.strokeStyle = `hsla(210, 50%, 50%, ${1 - distance / this.offset})`;
                this.ctx.lineWidth = 0.5;
                this.ctx.stroke();
                
                this.ctx.restore();
              }
            });
        });
    }

    public clear(): void {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    public render(): void {
        if (!this.ctx) return;

        this.clear();
        this.update();

        this.animationFrame = requestAnimationFrame(this.render.bind(this));
    }

    public updateMousePosition(mousePosition: { x: number; y: number }): void {
        this.mousePosition = mousePosition;
    }

    public getContext(): CanvasRenderingContext2D {
        return this.ctx;
    }

    public getParticles(): Map<string, Particle> {
        return this.particles;
    }

    public addParticle(particle: Particle): void {
        this.particles.set(particle.id, particle);
    }

    public removeParticle(id: string): void {
        this.particles.delete(id);
    }

    public clearParticles(): void {
        this.particles.clear();
    }
}
