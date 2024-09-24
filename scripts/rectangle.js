//   ---------------------- Rectangle Area --------------------

function calculateRectangleArea(){
    // get the rectangle base
    const rectangleBaseInput = document.getElementById('rectangle-base');
    const rectangleBaseText = rectangleBaseInput.value;
    const base = parseFloat(rectangleBaseText);
    console.log(base);

    // get the rectangle height
    const rectangleHeightInput = document.getElementById('rectangle-height');
    const rectangleHeightText = rectangleHeightInput.value;
    const height = parseFloat(rectangleHeightText);
    console.log(height);

    // Calculate area of rectangle
    const rectangleArea = base * height;
    console.log('Area of the rectangle is ', rectangleArea);

    // Display triangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = rectangleArea;
}