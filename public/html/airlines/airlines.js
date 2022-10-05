let flights = [

  { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
  ];

  const askName = () => {
  let name = prompt("Introduzca su nombre");
  console.log(`bienvenido a ISDI Airlines, ${name}`);
  }

  const showFlights = () => {
  console.log("**********VUELOS**********");
  flights.forEach((flights) => {
      if (flights.scale === true){
      console.log(`el vuelo nº ${flights.id} con origen en ${flights.from} con destino a ${flights.to} tiene un coste de ${flights.cost}€ y realiza escala.`);
      }
      else{
      console.log(`el vuelo nº ${flights.id} con origen en ${flights.from} con destino a ${flights.to} tiene un coste de ${flights.cost}€ y no realiza escala.`);
      }})
  console.log("*******************");
  }  

  const averageFlights = () => {
  for (i=0; i<flights.lenght ;i++);{
  let costFlights = 0;
  let averageFlights = 0;
  flights.forEach((flight) => costFlights = costFlights + flight.cost);
  averageFlights = costFlights / flights.length;
  console.log(`el coste medio de los vuelos de hoy es de ${averageFlights} €`);
  }
  }

  const showScales = () => {
      for (i=0; i<flights.length ;i++);{
      let numberScales = 0;
      flights.forEach((flight) =>{
      if(flight.scale === true ){
          numberScales++}});
      console.log(`el numero de vuelos que realizan escalas es de ${numberScales}`);   
      }
      }
  
  const lastTo = () => {
      console.log("los ultimos vuelos del dia de hoy son...")
      let last = flights.length - 6
      flights.forEach((flights) => {
      if (flights.id > last){
      console.log(`el vuelo numero ${flights.id} con destino a ${flights.to}`)}})
      }
      
  const preguntaRol = () => {
          const rol = prompt("cual es tu rol? (user/admin)");
          if (rol === null){
              alert("rol incorrecto");
              preguntaRol();
          }else if(rol.toLowerCase() !== "user" && rol.toLowerCase() !=="admin"){
              alert("rol incorrecto");
              preguntaRol();
          }else{
          }
      if (rol.toLowerCase() ==="admin"){
          eresAdmin();
      }
      else if(rol.toLowerCase() ==="user"){
          eresUser();
      }
      }
  
      const eresAdmin = () => {
          const accionAdmin = prompt("desea crear nuevos vuelos o borrarlos de la lista de vuelos? crear/borrar ");
          if (accionAdmin === null){
          eresAdmin();
          }else if(accionAdmin.toLowerCase() !=="crear" && accionAdmin.toLowerCase() !=="borrar"){
          eresAdmin();
          }
      if (accionAdmin.toLowerCase() === "crear" && flights.length<14){
          const nuevoVuelo = {};
          nuevoVuelo.id = +prompt("inserte numero de vuelo");
          nuevoVuelo.to = prompt("inserte origen del vuelo");
          nuevoVuelo.from = prompt("inserte destino del vuelo");
          nuevoVuelo.cost = +prompt("inserte coste del vuelo");
          nuevoVuelo.scale = prompt("inserte si realiza escala");
          flights.push(nuevoVuelo);
          console.log("**********VUELOS**********");
          flights.forEach((flights) => {
          if (flights.scale === true){
          console.log(`el vuelo nº ${flights.id} con origen en ${flights.from} con destino a ${flights.to} tiene un coste de ${flights.cost}€ y realiza escala.`);
          }
          else{
          console.log(`el vuelo nº ${flights.id} con origen en ${flights.from} con destino a ${flights.to} tiene un coste de ${flights.cost}€ y no realiza escala.`);
          }})
          console.log("*******************");
          }
      else if(accionAdmin.toLowerCase() === "crear" && flights.length>14){
      alert("el numero de vuelos ha excedido el maximo");
      }
      if (accionAdmin.toLowerCase() === "borrar"){
          const idBorrar = +prompt("numero de vuelo que desea borrar") 
          flights = flights.filter((flight) => flight.id !== idBorrar);
      }
      console.log("**********VUELOS**********");
      flights.forEach((flights) => {
      if (flights.scale === true){
      console.log(`el vuelo nº ${flights.id} con origen en ${flights.from} con destino a ${flights.to} tiene un coste de ${flights.cost}€ y realiza escala.`);
          }
      else{
      console.log(`el vuelo nº ${flights.id} con origen en ${flights.from} con destino a ${flights.to} tiene un coste de ${flights.cost}€ y no realiza escala.`);
          }})
          console.log("*******************");
          }
      
      const eresUser = () => {
          const precioVuelo = +prompt("introduzca su presupuesto maximo");
          console.log("los vuelos dentro de su presupuesto son...");
          flights.forEach((flights) => {
              if (flights.cost < precioVuelo){
                  console.log(`el vuelo nº ${flights.id} con origen ${flights.from} destino a ${flights.to} por el coste de ${flights.cost}`)
              }
          })
          if (isNaN(precioVuelo) && precioVuelo<0){
              alert("introduzca su presupuesto maximo");
              eresUser();
          }
      }

  askName();
  showFlights();
  averageFlights();
  showScales();
  lastTo();
  preguntaRol();
