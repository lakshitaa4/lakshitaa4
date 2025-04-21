const fs = require('fs');

// Function to generate the snake SVG
function generateSnakeSVG() {
  // A simple SVG for the snake
  const svgContent = `
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="50" stroke="green" stroke-width="4" fill="yellow" />
    </svg>
  `;

  // Write the SVG content to a file
  fs.writeFileSync('snake.svg', svgContent, 'utf8');
  console.log('Snake SVG generated successfully!');
}

// Call the function to generate the snake SVG
generateSnakeSVG();
