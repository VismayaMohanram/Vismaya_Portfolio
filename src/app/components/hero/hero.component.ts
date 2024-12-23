import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements AfterViewInit {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private mouse = { x: 0, y: 0, radius: 150 };
  private texts = ['Data Engineer', 'ML Enthusiast', 'Cloud Specialist'];

  constructor(private elRef: ElementRef, private router: Router) {}

  ngAfterViewInit(): void {
    this.initializeTypingAnimation();
    this.initializeParticleAnimation();
  }

  /**
   * Navigates to the Contact page.
   */
  navigateToContact(): void {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Typing Animation
  private initializeTypingAnimation(): void {
    const element = this.elRef.nativeElement.querySelector('#typing-text');
    if (!element) return;

    let i = 0,
      j = 0;
    let isDeleting = false;

    const type = () => {
      const currentText = this.texts[i];
      element.textContent = currentText.substring(0, j) + '|';

      if (!isDeleting && j < currentText.length) {
        j++;
        setTimeout(type, 100);
      } else if (isDeleting && j > 0) {
        j--;
        setTimeout(type, 50);
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) i = (i + 1) % this.texts.length;
        setTimeout(type, isDeleting ? 1500 : 500);
      }
    };

    type();
  }

  // Particle Animation
  private initializeParticleAnimation(): void {
    this.canvas = this.elRef.nativeElement.querySelector('#particle-canvas');
    this.ctx = this.canvas.getContext('2d')!;
    this.resizeCanvas();

    window.addEventListener('resize', () => this.resizeCanvas());
    window.addEventListener('mousemove', (e) => this.handleMouseMove(e));

    this.createParticlesFromText('DATA ENGINEER');
    this.animateParticles();
  }

  private resizeCanvas(): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.particles = [];
    this.createParticlesFromText('DATA ENGINEER');
  }

  private handleMouseMove(e: MouseEvent): void {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  }

  private createParticlesFromText(text: string): void {
    const spacing = 8;
    const fontSize = 100;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.font = `bold ${fontSize}px Arial`;
    this.ctx.fillStyle = 'white';
    this.ctx.textAlign = 'center';

    // Shift further to the right
    this.ctx.fillText(text, this.canvas.width / 2 + 200, this.canvas.height / 2);

    const textData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height).data;

    for (let y = 0; y < this.canvas.height; y += spacing) {
      for (let x = 0; x < this.canvas.width; x += spacing) {
        const index = (y * this.canvas.width + x) * 4;
        if (textData[index + 3] > 128) {
          this.particles.push(new Particle(x, y, this.canvas.width, this.canvas.height));
        }
      }
    }
  }

  private animateParticles(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles.forEach((particle) => {
      particle.update(this.mouse);
      particle.draw(this.ctx);
    });

    requestAnimationFrame(() => this.animateParticles());
  }
}

class Particle {
  private x: number;
  private y: number;
  private originX: number;
  private originY: number;
  private size: number;

  constructor(targetX: number, targetY: number, canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.originX = targetX;
    this.originY = targetY;
    this.size = 3;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }

  update(mouse: { x: number; y: number; radius: number }): void {
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < mouse.radius) {
      const angle = Math.atan2(dy, dx);
      this.x -= Math.cos(angle) * 10; // Scatter more
      this.y -= Math.sin(angle) * 10;
    } else {
      this.x += (this.originX - this.x) * 0.05;
      this.y += (this.originY - this.y) * 0.05;
    }
  }
}
