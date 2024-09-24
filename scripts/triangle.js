//   ---------------------- Triangle Area --------------------
function calculateTriangleArea(){
    // get the triangle base
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    console.log(base);

    // get the triangle height
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);

    // Calculate area of triangle
    const triangleArea = 0.5 * base * height;
    console.log('Area of the triangle is ', triangleArea);

    // Display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = triangleArea;
}