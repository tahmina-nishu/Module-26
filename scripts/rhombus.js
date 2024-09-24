//   ---------------------- Parallelogram Area --------------------

function calculateRhombusArea(){

    // Get the firstDimension

    const firstDimension = getInputValueById('rhombus-d1');
    console.log(firstDimension);

    // Get the secondDimension
    
    const secondDimension = getInputValueById('rhombus-d2');
    console.log(secondDimension);

    // Calculate the area
    const area = 0.5 * firstDimension * secondDimension;
    console.log('Area of the rhombus is ', area);

    // Set the area 
    
    setInnerTextById('rhombus-area', area);
}