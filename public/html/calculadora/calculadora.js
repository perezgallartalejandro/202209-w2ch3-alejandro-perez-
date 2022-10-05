const number1 = prompt("introduce primer numero");323
	const number2 = prompt("introduce segundo numero");
	let result = [];
	   
	const askNumber = () => {
	    if (!isNaN(number1) && number2 === null || number2 ==="" && number1>0){
        console.log("la raiz cuadrada de ",number1, " es " + Math.sqrt(number1).toFixed(3));
        return number1;

    }else if (number1 === null && !isNaN(number2) || number1 ===""  && number2>0){
        console.log("la raiz cuadrada de ",number2, " es " + Math.sqrt(number2).toFixed(3));
        return number2;
     }
     
     
	   if (!isNaN(number1) && isNaN(number2)){
	        console.log("introduca numeros validos");
	    }else if (isNaN(number1) && !isNaN(number2)){
	        console.log("introduca numeros validos");
	    }else if (isNaN(number1) && isNaN(number2)){
	        console.log("introduca numeros validos");
	    }else if(number1 === null && number2 === null){
	        console.log("introduzca numeros");
	    }else if(number1 === null || number2 === null){
	        if (number1<0 || number2<0){
	            console.log("no existe raiz cuadrada en numeros negativos");
	    }}else{
	        calculadora();
	        }
	    }  
	     
	const calculadora = () => {
	    let num1 = parseFloat(number1)
	    let num2 = parseFloat(number2)
	    result.push(num1+num2)
	    result.push(num1-num2)
	    result.push(num1*num2)
	    result.push(num1/num2)
	    console.log("el resultado de la suma es: ",result[0]);
	    console.log("el resultado de la resta es: ",result[1]);
	    console.log("el resultado de la multiplicacion es: ",result[2]);
	    console.log("el resultado de la division es: ",result[3].toFixed(3));
	}
	askNumber();
