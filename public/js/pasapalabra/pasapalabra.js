const players = [] ;
players.push = "alejandro";
console.log("bienvenido a pasapalabra", players[players.length-1]);

const pasapalabra = () => {
  let corrects = 0;
  let fails = 0;
  let count = 0;
 
  const questions1 = [
    {letter: "a", answer: "anarquia", status: 0, question: ("CON LA A. Ausencia tota de estructura gubernamental en un estado")},
    {letter: "b", answer: "bit", status: 0, question: ("CON LA B. En informatica la unidad minima de informacion")},
    {letter: "c", answer: "comunismo", status: 0, question: ("CON LA C. doctrina economica y social en la que no existe la propiedad privada")},
    {letter: "d", answer: "derecho", status: 0, question: ("CON LA D.conjunto de principios y normas inspirados en ideas de justicia y orden")},
    {letter: "e", answer: "eco", status: 0, question: ("CON LA E.  fenomeno acustico que se produce por la repeticion de un sonido")},
    {letter: "f", answer: "fuelle", status: 0, question: ("CON LA F. instrumento que atrapa aire y lo lanza en una direccion")},
    {letter: "g", answer: "gonada", status: 0, question: ("CON LA G. glandula genital que se encarga de elaborar las celulas reproductoras")},
    {letter: "h", answer: "hemisferio", status: 0, question: ("CON LA H.mitad de la superficie de la esfera terrestre")},
    {letter: "i", answer: "ideologia", status: 0, question: ("CON LA I. conjunto de ideas que caracterizan una persona")},
    {letter: "j", answer: "joroba", status: 0, question: ("CON LA J. abultamiento que tienen en el lomo ciertos animales")},
    {letter: "l", answer: "limbo", status: 0, question: ("CON LA L. lugar al que van las almas sin bautizar")},
    {letter: "m", answer: "martir", status: 0, question: ("CON LA M. Persona que sufre por defender su religion o sus ideas")},
    {letter: "n", answer: "ningunear", status: 0, question: ("CON LA N. no tener en consideracion a una persona")},
    {letter: "o", answer: "oliguria", status: 0, question: ("CON LA O. disminucion anormal del volumen de orina en las ultimas 24 horas")},
    {letter: "p", answer: "perezoso", status: 0, question: ("CON LA P. que tiene poca disposicion a hacer algo")},
    {letter: "q", answer: "equis", status: 0, question: ("CON LA Q. signo matematico que representa la incognita")},
    {letter: "r", answer: "razonar", status: 0, question: ("CON LA R.establecer relacion entre ideas i conceptos para obtener una conclusion")},
    {letter: "s", answer: "soez", status: 0, question: ("CON LA S.grosero y bajo en sus palabras")},
    {letter: "t", answer: "tandem", status: 0, question: ("CON LA T. bicicleta de dos o mas personas")},
    {letter: "u", answer: "ursula", status: 0, question: ("CON LA U.  nombre de la actriz española que interpreta a tokyo en la casa de papel")},
    {letter: "v", answer: "vector", status: 0, question: ("CON LA V. segmento , recta")},
    {letter: "x", answer: "excel", status: 0, question: ("CONTIENE LA X. programa informatico de hojas de calculo")},
    {letter: "y", answer: "yoga", status: 0, question: ("CONTIENE LA Y. doctrina hindu que toma popularidad como ejercicio")},
    {letter: "z", answer: "zoofilia", status: 0, question: ("CON LA Z. perversion de las personas que tienen relaciones con animales")},
  ]

  const questions2 = [
    {letter: "a", answer: "amor", status: 0, question: ("CON LA A. sentimiento de vivo afecto hacia una persona")},
    {letter: "b", answer: "blandir", status: 0, question: ("CON LA B. mover un arma en actitud amenazadora")},
    {letter: "c", answer: "calçot", status: 0, question: ("CON LA C. variedad de cebolla tierna originaria de Valls")},
    {letter: "d", answer: "deficit", status: 0, question: ("CON LA D. cantidad que falta para que los ingresos se equilibren con los gastos")},
    {letter: "e", answer: "errar", status: 0, question: ("CON LA E. cometer un error o equivocarse")},
    {letter: "f", answer: "friega", status: 0, question: ("CON LA F. accion de frotar")},
    {letter: "g", answer: "gay", status: 0, question: ("CON LA G. persona con atraccion sexual hacia otra de su mismo sexo")},
    {letter: "h", answer: "heroe", status: 0, question: ("CON LA H. persona ilustre por sus hazañas o virtudes")},
    {letter: "i", answer: "iman", status: 0, question: ("CON LA I. pieza mineral o metalica con propiedad de atraer ciertos metales")},
    {letter: "j", answer: "jauria", status: 0, question: ("CON LA J.conjunto de perros")},
    {letter: "l", answer: "lamina", status: 0, question: ("CON LA L. pieza plana de cualquier material")},
    {letter: "m", answer: "maza", status: 0, question: ("CON LA M. herramienta para golpear parecida a una maza")},
    {letter: "n", answer: "necora", status: 0, question: ("CON LA N. crustaceo similar al cangrejo")},
    {letter: "o", answer: "osteoporosis", status: 0, question: ("CON LA O. enfermedad que causa disminucion del tejido oseo")},
    {letter: "p", answer: "parapeto", status: 0, question: ("CON LA P. muro que sirve para cubrir a los soldados en batalla")},
    {letter: "q", answer: "quesadilla", status: 0, question: ("CON LA Q.plato mexicano de tortilla de maiz relleno de queso")},
    {letter: "r", answer: "rastrear", status: 0, question: ("CON LA R.seguir señales, pistas o indicios")},
    {letter: "s", answer: "sarcasmo", status: 0, question: ("CON LA S. dicho ironico con intencion de ridiculizar")},
    {letter: "t", answer: "trampolin", status: 0, question: ("CON LA T. tabla elastica utilizada para saltar a una piscina")},
    {letter: "u", answer: "urticaria", status: 0, question: ("CON LA U. presencia de manchas e inflamacion en la piel")},
    {letter: "v", answer: "viñedo", status: 0, question: ("CON LA V. cultivo de vides para la elaboracion de vinos")},
    {letter: "x", answer: "existir", status: 0, question: ("CONTIENE LA X. tener realidad fisica o mental")},
    {letter: "y", answer: "yuyu", status: 0, question: ("CONTIENE LA Y. miedo a algun hecho o practica de brujeria")},
    {letter: "z", answer: "zancada", status: 0, question: ("CON LA Z. paso largo")},
  ]
 
  const questions3 = [
    {letter: "a", answer: "amenazar", status: 0, question: ("CON LA A. manifestar a alguien la intencion de hacerle algun mal")},
    {letter: "b", answer: "bioetica", status: 0, question: ("CON LA B. estudio de los aspectos eticos de las ciencias de la vida")},
    {letter: "c", answer: "comunidad", status: 0, question: ("CON LA C. conjunto de personas que viven juntos bajo unas reglas o intereses comunes")},
    {letter: "d", answer: "dislexia", status: 0, question: ("CON LA D.  alteracion de la capacidad de leer por la que se confunden silabas, palabras o letras")},
    {letter: "e", answer: "equidistante", status: 0, question: ("CON LA E.que no se inclina ante las partes de un conflicto")},
    {letter: "f", answer: "faro", status: 0, question: ("CON LA F. luz potente para orientar barcos en la noche")},
    {letter: "g", answer: "gladiador", status: 0, question: ("CON LA G. hombre que luchaba en el circo romano")},
    {letter: "h", answer: "homofobia", status: 0, question: ("CON LA H. aversion hacia las personas homosexuales")},
    {letter: "i", answer: "identidad", status: 0, question: ("CON LA I. conjunto de rasgos i caracteristicas que definen a una persona")},
    {letter: "j", answer: "jaleo", status: 0, question: ("CON LA J. ruido o alboroto")},
    {letter: "l", answer: "loteria", status: 0, question: ("CON LA L. juego publico de azar en el que se compra un boleto")},
    {letter: "m", answer: "marruecos", status: 0, question: ("CON LA M. pais de africa del norte que limita con el oceano atlantico y el mar mediterraneo")},
    {letter: "n", answer: "niquel", status: 0, question: ("CON LA N. elemento quimico de simbolo Ni")},
    {letter: "o", answer: "osezno", status: 0, question: ("CON LA O. cria del oso")},
    {letter: "p", answer: "pudor", status: 0, question: ("CON LA P. verguenza de exhibir el propio desnudo o tratar determinados temas")},
    {letter: "q", answer: "equino", status: 0, question: ("CON LA Q. relativo al caballo")},
    {letter: "r", answer: "roña", status: 0, question: ("CON LA R. suciedad adherida al cuerpo de una persona o a una superficie")},
    {letter: "s", answer: "sororidad", status: 0, question: ("CON LA S. solidaridad entre mujeres")},
    {letter: "t", answer: "tebeo", status: 0, question: ("CON LA T.publicacion en que se narran historias mediante dibujos")},
    {letter: "u", answer: "urbano", status: 0, question: ("CON LA U.relativo a la ciudad")},
    {letter: "v", answer: "vital", status: 0, question: ("CON LA V. dotado de gran energia o impulso para actuar o vivir")},
    {letter: "x", answer: "duplex", status: 0, question: ("CONTIENE LA X. vivienda unifamiliar de varias plantas")},
    {letter: "y", answer: "yoigo", status: 0, question: ("CONTIENE LA Y. empresa de telecomunicacion propiedad del grupo Masmovil")},
    {letter: "z", answer: "zoquete", status: 0, question: ("CON LA Z. que tiene dificultad para entender conceptos sencillos")},
  ]

  const doQuestions1 = () =>{
  do {
  for(let index = 0; index < questions1.length; index += 1){
  if(questions1[index].status === 0){
  const userAnswer = "zapato";
  if(userAnswer === questions1[index].answer){
  console.log("¡¡¡¡¡¡¡¡¡CORRECTO!!!!!!!");
  questions1[index].status = 1;
  corrects += 1;
  count += 1;
  }
  else if(userAnswer === "pasapalabra"){
  console.log("Pasamos palabra");
  }
  else if(userAnswer === "end"){
  console.log('El juego ha terminado con ,' , corrects , ' aciertos y ' , fails , ' errores.');
  return userAnswer;
  }
  else {
  console.log("¡¡¡¡¡¡¡ERROR!!!!!!!!");
  questions1[index].status = 2;
  fails += 1;
  count += 1;
  }
  }}
  } while (count<questions1.length);
  console.log('Has acertado ' , corrects ,' palabras y has cometido ', fails , 'errores.')
  return true
  }

const doQuestions2 = () =>{
     do {
    for(let index = 0; index < questions1.length; index += 1){
        if(questions1[index].status === 0){
        const userAnswer = "zapato"
        if(userAnswer === questions2[index].answer){
        console.log("¡¡¡¡¡¡¡¡¡CORRECTO!!!!!!!");
        questions2[index].status = 1;
        corrects += 1;
        count += 1;;
        }
        else if(userAnswer === "pasapalabra"){
        console.log("Pasamos palabra");
        }
        else if(userAnswer === "end"){
        console.log('El juego ha terminado con ,' , corrects , ' aciertos y ' , fails , ' errores.');
        return userAnswer;
        }
        else {
        console.log("¡¡¡¡¡¡¡ERROR!!!!!!!!");
        questions2[index].status = 2;
        fails += 1;
        count += 1;
        }
        }}
        } while (count<questions2.length);
        console.log('Has acertado ' , corrects ,' palabras y has cometido ', fails , 'errores.')
        return true
        }

        const doQuestions3 = () =>{
            do {
            for(let index = 0; index < questions1.length; index += 1){
            if(questions3[index].status === 0){
            const userAnswer = "zapato";
            if(userAnswer === questions3[index].answer){
            console.log("¡¡¡¡¡¡¡¡¡CORRECTO!!!!!!!");
            questions3[index].status = 1;
            corrects += 1;
            count += 1;;
            }
            else if(userAnswer === "pasapalabra"){
            console.log("Pasamos palabra");
            }
            else if(userAnswer === "end"){
            console.log('El juego ha terminado con ,' , corrects , ' aciertos y ' , fails , ' errores.');
            return userAnswer;
            }
            else {
            console.log("¡¡¡¡¡¡¡ERROR!!!!!!!");
            questions3[index].status = 2;
            fails += 1;
            count += 1;
            }
            }}
            } while(count<questions3.length);
            console.log('Has acertado ' , corrects ,' palabras y has cometido ', fails , 'errores.')
            return true
            }

            let questionNumber = 0;
            questionNumber = Math.random * 100;
            if(questionNumber > 0 && questionNumber>33){
              doQuestions1()
            }
            else if(questionNumber > 33 && questionNumber>67){
              doQuestions2()
            }
            else{
              doQuestions3()
            }
        } 

pasapalabra()  
