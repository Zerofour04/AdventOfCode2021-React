import { numbers } from "../Data/Day1";

function Day1() {

    let previousValue = undefined;
    let currentValue = undefined;
    let numberCount = 0;
    for (let i = 0; i <= numbers.length; i++) {
        currentValue = numbers[i]; 
        if (previousValue === undefined) {
            console.log('N/A begin');
        } else if (previousValue !== undefined) {
            if (previousValue < currentValue) {
                numberCount++;
            }
        }
        previousValue = currentValue;
    }
    console.log('Count Increase Part1: ', numberCount);
    Day1Part2()
}

function Day1Part2() {

    let currentValue = undefined;
    let previousValue = undefined;
    let numberCount = 0;
    for (let i = 0; i <= numbers.length; i++) {
        currentValue = numbers[i] + numbers[i+1] + numbers[i+2]; 
        if (previousValue === undefined) {
            console.log('N/A begin');
        } else if (previousValue !== undefined) {
            if (previousValue < currentValue) {
                numberCount++;
            } else if (previousValue > currentValue) {
            }
        }
        previousValue = currentValue;
    }
    console.log('Count Increase Part2: ', numberCount);
}

export default Day1;




