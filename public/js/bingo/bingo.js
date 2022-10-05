const user = prompt("introduzca nombre de usuario:")
console.log("bienvenido al bingo,", user);
let usedNumbers = [];

const generateCarton = () => {
    const carton = [];
    for (let i = 0; i < 15; i=+ 1){
        const randomNumbers = generateRandomNumbers();
        carton.push({number: randomNumbers, matched: false});
    }
    return carton;
}

const showCarton = (userCarton) =>{
    const cartons = [];
    userCarton.forEach(casilla =>{
        if (casilla.matched === true){
            cartons.push("X");
        }else{
            cartons.push(casilla.number);
        }
    })
    console.log(cartons[0], cartons[1], cartons[2], cartons[3], cartons[4]);
    console.log(cartons[5], cartons[6], cartons[7], cartons[8], cartons[9]);
    console.log(cartons[10], cartons[11], cartons[12], cartons[13], cartons[14]);
}

const generateRandomNumbers = () => {
    while(true) {
        const randomNumbers = Math.floor(Math.random()*100);
        if (usedNumbers.includes(randomNumbers) === false){
            usedNumbers.push(randomNumbers);
            return randomNumbers;
        }
    }
}

const checkNumber = (randomNumbers,carton) => {
    carton.forEach(casilla => {
        if (randomNumbers === casilla.number){
            casilla.matched = true;
            console.log(`El numero ${casilla.number} es correcto.`);
        }
    })
}

const matchedIsTrue = (object) => object.matched === true;
const checkBingo = (carton) =>{
    if (carton.every(matchedIsTrue) === true){
        return true;
    }
    return false;
}

let completedLines = 0
const checkRow = (cartons) => {
    const line1 = cartons.slice(0, 5);
    const line2 = cartons.slice(5, 10);
    const line3 = cartons.slice(10, 15);

    if (doLine1(line1)){
        console.log("¡¡¡¡¡¡¡¡¡LINEA!!!!!!!!");
        completedLines += 1;
    }
    if (doLine2(line2)){
        console.log("¡¡¡¡¡¡¡¡¡LINEA!!!!!!!!");
        completedLines += 1;
    }
    if (doLine3(line3)){
        console.log("¡¡¡¡¡¡¡¡¡LINEA!!!!!!!!");
        completedLines +=1 ; 
    }
}

const doLine1 = (line1) => {
    let numbersLine1 = 0
    for (let index = 0; index < line1.length; index += 1){
        if (line1[index].matched === true){
            numbersLine1 +=1 ;
        }
    }    
    if (numbersLine1 === 5){
        return true
    }
    return false
}

const doLine2 = (line2) => {
    let numbersLine2 = 0
    for (let index = 0; index < line2.length; index += 1){
        if (line2[index].matched === true){
            numbersLine2  += 1;
        }
    }    
    if (numbersLine2 === 5){
        return true
    }
    return false;
}

const doLine3 = (line3) => {
    let numbersLine3 = 0
    for (let index = 0; index < line3.length; index += 1){
        if (line3[index].matched === true){
            numbersLine3 +=1;
        }
    }    
    if (numbersLine3 === 5){
        return true
    }   
    return false
}

let userCarton = [];
const bingo = () =>{
    do {
        letsPlay();
        letsStart();
    }while (confirm("¿quieres volver a jugar?"))
    console.log("fin del juego")
}

const letsPlay = () => {
    usedNumbers = [];
    console.log("este es tu cartón. Buena suerte.")
    do {
        userCarton = generateCarton();
        showCarton(userCarton);
    }while (confirm("¿Quieres cambiar de cartón?"))
};

const letsStart = () => {
    do{
        const randomNumbers = generateRandomNumbers();
        console.log(`ha salido el : ${randomNumbers}.`);  
        checkNumber(randomNumbers, userCarton);
        if (completedLines < 3){
            checkRow(userCarton);
        }
        showCarton(userCarton); 
        checkBingo(userCarton);
        if (checkBingo(userCarton) === true){
            console.log("¡¡¡¡¡¡¡¡¡¡¡¡BINGO!!!!!!!!!!!")
            console.log(`Has tardado un total de ${usedNumbers.length} turnos.`)
            return userCarton;
        }
    }while (confirm ("¿siguente numero?"))
    return true;
}
bingo()
