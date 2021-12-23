import { Data } from "../Data/Day2";

function Day2() {
    let forward1 = 0;
    let up1 = 0;
    let down1 = 0;
    let resultY1 = 0;
    let resusltXY1 = 0;

    for (let i=0; i < Data.length; i++) {

        const arraySplit = Data[i].split(' ');
        const stringIntoNumber = Number(arraySplit[1]);

        if (arraySplit[0] === 'down'){
            down1 = stringIntoNumber + down1;
            
        }
        else 
        if (arraySplit[0] === 'up'){
            up1 = stringIntoNumber + up1;
        } 
        else  
        if (arraySplit[0] === 'forward' ){
            forward1 = stringIntoNumber + forward1;

        }      
    }

    resultY1 = up1 - down1
    resusltXY1 = forward1 * resultY1
    console.log('Result1:', resusltXY1)
    Day2Part2()
}

function Day2Part2() {
    let forward2 = 0;
    let down2 = 0;
    let resusltXY2 = 0;
    let aim = 0;
    let aimResult = 0;

    for (let i=0; i < Data.length; i++) {

        const arraySplit = Data[i].split(' ');

        const stringIntoNumber = Number(arraySplit[1]);

        if (arraySplit[0] === 'down'){
            aim = stringIntoNumber + aim;
        }
        else 
        if (arraySplit[0] === 'up'){
            aim = aim - stringIntoNumber;
        } 
        else  
        if (arraySplit[0] === 'forward' ){
            forward2 = stringIntoNumber + forward2;
            aimResult = aim * stringIntoNumber;
            down2 = aimResult + down2;
        }   
    }

    resusltXY2 = down2 * forward2;
    console.log('Result2', resusltXY2)
}

export default Day2;