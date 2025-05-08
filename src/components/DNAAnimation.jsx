import React from 'react';
import '../DNAAnimation.css';

const DNAAnimation = () => {
    const segments = Array.from({ length: 60 });
    const rotateDelay = 0.15; // seconds

    return (
        <div id="dna">
            {segments.map((_, index) => {
                const delay = (index * rotateDelay - 9).toFixed(2); // 60 in tenths = 6 seconds

                return (
                    <div
                        key={index}
                        className="dna-segment"
                        style={{
                            animationDelay: `${delay}s`,
                            '--delay': `${delay}s`,
                        }}
                    />
                );
            })}
        </div>
    );
};

export default DNAAnimation;





// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <title>Fixed DNA Helix</title>
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
//   <style>
//     body {
//       margin: 0;
//       background: #000;
//       overflow: hidden;
//     }
//     canvas {
//       display: block;
//     }
//   </style>
// </head>
// <body>
// <canvas id="dnaCanvas"></canvas>

// <script>
// const canvas = document.getElementById("dnaCanvas");
// const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// let time = 0;
// const spacing = 20;
// const amplitude = 80;
// const speed = 2;
// const frequency = 0.02;
// const radiusMin = 3;
// const radiusMax = 6;
// const dotPairs = Math.ceil(canvas.width / spacing) + 10;

// const dots = Array.from({ length: dotPairs }, (_, i) => ({
//   x: i * spacing,
//   phase: i * 0.2
// }));

// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   const centerY = canvas.height / 2;

//   for (let dot of dots) {
//     const angle = dot.phase + time;
    
//     // y offset using sine
//     const yOffset = Math.sin(angle) * amplitude;
    
//     // scale using sine offset by 90°
//     let scale = Math.sin(angle + Math.PI / 2); // smooth transition
//     scale = (scale + 1) / 2; // normalize to [0,1]
    
//     // clamp to avoid 0 or 1 extremes (which cause overlaps)
//     scale = Math.max(0.2, Math.min(scale, 0.8));

//     const yTop = centerY + yOffset;
//     const yBottom = centerY - yOffset;

//     const radiusLeft = radiusMin + scale * (radiusMax - radiusMin);
//     const radiusRight = radiusMin + (1 - scale) * (radiusMax - radiusMin);

//     // Draw line
//     ctx.beginPath();
//     ctx.strokeStyle = "#ccc";
//     ctx.moveTo(dot.x, yTop);
//     ctx.lineTo(dot.x, yBottom);
//     ctx.stroke();

//     // Top dot
//     ctx.beginPath();
//     ctx.fillStyle = "#ccc";
//     ctx.arc(dot.x, yTop, radiusLeft, 0, Math.PI * 2);
//     ctx.fill();

//     // Bottom dot
//     ctx.beginPath();
//     ctx.arc(dot.x, yBottom, radiusRight, 0, Math.PI * 2);
//     ctx.fill();

//     // Scroll
//     dot.x -= speed;
//     if (dot.x < -spacing) {
//       dot.x = canvas.width + spacing;
//     }
//   }

//   time += frequency;
//   requestAnimationFrame(draw);
// }

// window.addEventListener("resize", () => {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
// });

// draw();
// </script>
// </body>
// </html>
//  -->
