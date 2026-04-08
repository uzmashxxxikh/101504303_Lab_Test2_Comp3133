import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMagicCursor]',
  standalone: true
})
export class MagicCursorDirective implements OnInit {
  private particles: HTMLElement[] = [];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Set cursor style
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'none');
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.createParticle(event.clientX, event.clientY);
  }

  private createParticle(x: number, y: number) {
    const particle = this.renderer.createElement('div');
    const symbols = ['✨', '⚡', '🌟', '💫', '✦'];
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    
    this.renderer.setStyle(particle, 'position', 'fixed');
    this.renderer.setStyle(particle, 'left', `${x}px`);
    this.renderer.setStyle(particle, 'top', `${y}px`);
    this.renderer.setStyle(particle, 'pointer-events', 'none');
    this.renderer.setStyle(particle, 'font-size', '20px');
    this.renderer.setStyle(particle, 'z-index', '9999');
    this.renderer.setStyle(particle, 'animation', 'sparkle 1s ease-out forwards');
    this.renderer.setProperty(particle, 'textContent', randomSymbol);
    
    this.renderer.appendChild(document.body, particle);
    
    // Remove particle after animation
    setTimeout(() => {
      this.renderer.removeChild(document.body, particle);
    }, 1000);
    
    // Limit number of particles
    if (this.particles.length > 20) {
      const oldParticle = this.particles.shift();
      if (oldParticle && oldParticle.parentNode) {
        this.renderer.removeChild(document.body, oldParticle);
      }
    }
    
    this.particles.push(particle);
  }
}
