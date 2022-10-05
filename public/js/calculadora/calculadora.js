const number1 = 2;
const number2 = 2;
const result = [];

export const askNumber = () => {
  if (!Number.isNaN(number1) && number2 === null ||   number2 === '' && number1 > 0) ; 
    console.log('la raiz cuadrada de ',number1,  "es ", + Math.sqrt(number1).toFixed(3)); 
     if (number1 === null && Number.isNaN(number2) || number1 === ''  && number2 > 0); 
        console.log('la raiz cuadrada de ',number2, " es ", + Math.sqrt(number2).toFixed(3));
     
  if (!Number.isNaN(number1) && Number.isNaN(number2)){
	        console.log("introduca numeros validos");
	    }else if (Number.isNaN(number1) && !Number.isNaN(number2)){
	        console.log("introduca numeros validos");
	    }else if (Number.isNaN(number1) && Number.isNaN(number2)){
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
	     
export const calculadora = () => {
	    const num1 = parseFloat(number1)
	    const num2 = parseFloat(number2)
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
