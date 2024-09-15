document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('background');
    const ctx = canvas.getContext('2d');

    // Adjust canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Bubble properties
    const bubbleCount = 100;
    const bubbles = [];

    function createBubble() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 20 + 5,
            dx: Math.random() * 2 - 1,
            dy: Math.random() * 2 - 1,
            color: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.6)`
        };
    }

    for (let i = 0; i < bubbleCount; i++) {
        bubbles.push(createBubble());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        bubbles.forEach(bubble => {
            ctx.beginPath();
            ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = bubble.color;
            ctx.fill();

            bubble.x += bubble.dx;
            bubble.y += bubble.dy;

            // Bounce off walls
            if (bubble.x + bubble.radius > canvas.width || bubble.x - bubble.radius < 0) {
                bubble.dx = -bubble.dx;
            }
            if (bubble.y + bubble.radius > canvas.height || bubble.y - bubble.radius < 0) {
                bubble.dy = -bubble.dy;
            }
        });

        requestAnimationFrame(animate);
    }

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
