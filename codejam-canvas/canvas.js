let data = [
  ["00BCD4", "FFEB3B", "FFEB3B", "00BCD4"],
  ["FFEB3B", "FFC107", "FFC107", "FFEB3B"],
  ["FFEB3B", "FFC107", "FFC107", "FFEB3B"],
  ["00BCD4", "FFEB3B", "FFEB3B", "00BCD4"]
];

data.forEach(elem => {
  for (let i = 0; i < elem.length; i++) {
    elem[i] = "#" + elem[i];
  }
});

console.log(data);

let canvas = document.querySelector("canvas"); // Select our canvas element
console.log(canvas);

let ctx = canvas.getContext("2d"); // Save the context we're going to use

let width = data[0].length; // Get the width of the array
let height = data.length; // Get the height of the array
let scale = 128; // Scales the whole image by this amount, set to 1 for default size

// Make sure the canvas is no larger than the size we need
canvas.width = width * scale;
canvas.height = height * scale;

// Loop through each color and draw that section
for (let row = 0; row < height; row++) {
  for (let col = 0; col < width; col++) {
    // Since there are nested arrays we need two for loops
    ctx.fillStyle = data[row][col]; // Set the color to the one specified
    ctx.fillRect(col * scale, row * scale, scale, scale); // Actually draw the rectangle
  }
}
