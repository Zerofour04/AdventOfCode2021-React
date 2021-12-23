import { InputData } from '../Data/Day3'

let bits = InputData;
let bitsO = InputData;
let bitsCO2 = InputData;

function Day3() {
    let zero = 0;
    let one = 0;
    let epsilon = '';
    let gamma = '';

    for (let i = 0; i < 12; i++) {

        for (let j = 0; j < bits.length; j++) {

            const arraySplit2 = bits[j].split('')

            if (arraySplit2[i] === '0') { zero++ }
            else { one++ }
        }

        console.log('Result:', zero, one, 'Index:', i)

        if (zero < one) {
            epsilon = epsilon + '0';
            gamma = gamma + '1';

        }
        else if (zero > one) {
            epsilon = epsilon + '1';
            gamma = gamma + '0';
        }

        zero = 0;
        one = 0;
    }

    console.log('Epsilon:', epsilon)
    console.log('Gamma:', gamma)

    let gammaIntDecimal = parseInt(gamma, 2)
    let epsilonIntDecimal = parseInt(epsilon, 2)

    console.log('Result:', gammaIntDecimal * epsilonIntDecimal)

    Day3Part2Oxygen()
    Day3PartCO2()
}

function Day3Part2Oxygen() {

    let zero2 = 0;
    let one2 = 0;

    for (let i = 0; i < 12; i++) {

        for (let j = 0; j < bitsO.length; j++) {

            const arraySplit2 = bitsO[j].split('')

            if (arraySplit2[i] === '0') { zero2++ }

            else
                if (arraySplit2[i] === '1') { one2++ }
        }


        if (zero2 > one2) {
            const filtered = bitsO.filter((number) => {

                if (number[i] === '0') {
                    return true
                }

                else if (number[i] === '1') {
                    return false
                }

            });

            bitsO = filtered
            zero2 = 0;
            one2 = 0;
        }
        else if (zero2 <= one2) {
            const filtered2 = bitsO.filter((number) => {

                if (number[i] === '1') {
                    return true
                }
                else if (number[i] === '0') {
                    return false
                }

            });

            bitsO = filtered2
            zero2 = 0;
            one2 = 0;
            console.log('FilteredOxygen:', filtered2)


        }
         if (bitsO.length === 1) {
            break
        } 
    }
}

function Day3PartCO2() {
    let zero2CO2 = 0;
    let one2CO2 = 0;

    for (let i = 0; i < 12; i++) {

        for (let j = 0; j < bitsCO2.length; j++) {

            const arraySplit3 = bitsCO2[j].split('')

            if (arraySplit3[i] === '0') 
            { zero2CO2++ }

            else 
                if (arraySplit3[i] === '1') { one2CO2++ }
        }

        if (one2CO2 >= zero2CO2) {
            const filtered3 = bitsCO2.filter((number2) => {

                if (number2[i] === '0') {
                    return true
                }

                else if (number2[i] === '1') {
                    return false
                }

            });

            bitsCO2 = filtered3
            zero2CO2 = 0;
            one2CO2 = 0;
        }
        else if (one2CO2 < zero2CO2) {
            const filtered4 = bitsCO2.filter((number2) => {

                if (number2[i] === '1') {
                    return true
                }
                else if (number2[i] === '0') {
                    return false
                }

            });

            bitsCO2 = filtered4
            zero2CO2 = 0;
            one2CO2 = 0;
            console.log('FilteredCO2:', filtered4)


        }
        if (bitsCO2.length === 1) {
            break
        }
    }

}

export { Day3 };


