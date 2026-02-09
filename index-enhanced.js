// Enhanced JavaScript for Valentine's page

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
const sparkles = [];
const stars = [];

// Sparkle trail
class Sparkle {
    constructor(x, y) {
        this.x = x + (Math.random() - 0.5) * 20;
        this.y = y + (Math.random() - 0.5) * 20;
        this.size = Math.random() * 4 + 2;
        this.life = 30;
        this.maxLife = 30;
        this.color = ['#ffb3d9', '#ffc9e3', '#ffd9eb', '#ff69b4', '#ffd700'][Math.floor(Math.random() * 5)];
    }

    update() {
        this.life--;
        this.y += 0.5;
    }

    draw(ctx) {
        const alpha = this.life / this.maxLife;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

// Star for suspense section
class Star {
    constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 2 + 0.5;
        this.twinkleSpeed = Math.random() * 0.05 + 0.01;
        this.twinkle = Math.random();
    }

    update() {
        this.twinkle += this.twinkleSpeed;
    }

    draw(ctx) {
        const alpha = (Math.sin(this.twinkle) + 1) / 2;
        ctx.save();
        ctx.globalAlpha = alpha * 0.8;
        ctx.fillStyle = 'white';
        ctx.shadowBlur = 5;
        ctx.shadowColor = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

// Enhanced Petal with mouse interaction
class EnhancedPetal {
    constructor() {
        this.reset();
        this.type = Math.floor(Math.random() * 3);
        this.vx = 0;
        this.vy = 0;
    }

    reset() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * -window.innerHeight;
        this.size = Math.random() * 10 + 5;
        this.baseSpeedY = Math.random() * 1.2 + 0.4;
        this.baseSpeedX = Math.random() * 0.6 - 0.3;
        this.opacity = Math.random() * 0.7 + 0.3;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 3 - 1.5;
        this.hue = Math.random() * 60 + 320;
    }

    update() {
        // Mouse repulsion
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const pushRadius = 150;

        if (dist < pushRadius && dist > 0) {
            const force = (1 - dist / pushRadius) * 0.5;
            this.vx += (dx / dist) * force;
            this.vy += (dy / dist) * force;
        }

        // Apply velocity with damping
        this.vx *= 0.95;
        this.vy *= 0.95;

        this.y += this.baseSpeedY + this.vy;
        this.x += this.baseSpeedX + this.vx;
        this.rotation += this.rotationSpeed;

        if (this.y > window.innerHeight + 20) {
            this.reset();
            this.vx = 0;
            this.vy = 0;
        }
        if (this.x < -20 || this.x > window.innerWidth + 20) {
            this.x = Math.max(0, Math.min(window.innerWidth, this.x));
        }
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.globalAlpha = this.opacity;

        if (this.type === 2) {
            ctx.fillStyle = `hsl(${this.hue}, 100%, 70%)`;
            ctx.font = `${this.size * 2}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('♥', 0, 0);
        } else {
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.bezierCurveTo(-this.size/2, -this.size/2, -this.size/2, this.size/2, 0, this.size);
            ctx.bezierCurveTo(this.size/2, this.size/2, this.size/2, -this.size/2, 0, 0);
            
            const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
            gradient.addColorStop(0, `hsla(${this.hue}, 100%, 90%, ${this.opacity})`);
            gradient.addColorStop(1, `hsla(${this.hue}, 100%, 70%, ${this.opacity})`);
            ctx.fillStyle = gradient;
            ctx.fill();
        }
        ctx.restore();
    }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EnhancedPetal, Sparkle, Star };
}
