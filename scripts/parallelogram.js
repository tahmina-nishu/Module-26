//   ---------------------- Parallelogram Area --------------------

function calculateParallelogramArea(){

    // Get the base

    const base = getInputValueById('parallelogram-base');
    console.log(base);

    // Get the height
    
    const height = getInputValueById('parallelogram-height');
    console.log(height);

    // Calculate the area
    const area = base * height;
    console.log('Area of the parallelogram is ', area);

    // Set the area 
    
    setInnerTextById('parallelogram-area', area);
}