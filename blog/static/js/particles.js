function initParticles() {
    const canvas = document.querySelector('.particle-canvas');
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = document.querySelector('.page-header').offsetHeight;
    };
    resizeCanvas();

    class TriangleParticle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 8 + 4;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
            this.rotation = Math.random() * Math.PI * 2;
            this.rotateSpeed = (Math.random()-0.5) * 0.05; 
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            this.rotation += this.rotateSpeed;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height; 
        }
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);

            ctx.beginPath();
            ctx.moveTo(-this.size/2, this.size/2);
            ctx.lineTo(0, -this.size/2);
            ctx.lineTo(this.size/2, this.size/2);
            ctx.closePath();

            ctx.strokeStyle = 'rgb(0, 255, 255)';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            //ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
            //ctx.beginPath();
            //ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            //ctx.fill();
            ctx.restore();
        }
    }

    class SquareParticle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 8 + 4;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
            this.rotation = Math.random() * Math.PI * 2;
            this.rotateSpeed = (Math.random()-0.5) * 0.05; 
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            this.rotation += this.rotateSpeed;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height; 
        }
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);

            ctx.beginPath();
            ctx.moveTo(-this.size/2, this.size/2);
            ctx.lineTo(-this.size/2, -this.size/2);
            ctx.lineTo(this.size/2, -this.size/2);
            ctx.lineTo(this.size/2, this.size/2);
            ctx.closePath();

            ctx.strokeStyle = 'rgb(0, 4, 251)';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            //ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
            //ctx.beginPath();
            //ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            //ctx.fill();
            ctx.restore();
        }
    }

    //amount of particles
    const particles = Array(20).fill().map(() => new TriangleParticle());
    const particles2 = Array(20).fill().map(() => new SquareParticle());

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        particles2.forEach(p => {
            p.update();
            p.draw();
        })
        requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener('resize', () => {
        resizeCanvas();
    });
}

document.addEventListener('DOMContentLoaded', initParticles);