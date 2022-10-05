let flights = [

  { id: 0, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 1, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 2, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 3, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 4, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 5, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 6, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 7, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 8, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 9, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
  ];

  const askName = () => {
  const name = prompt("Introduzca su nombre");
  console.log(`bienvenido a ISDI Airlines, ${name}`);
  }

  const showFlights = () => {
  console.log("**********VUELOS**********");
  flights.forEach((flight) => {
      if (flights.scale === true){
      console.log(`el vuelo nº ${flight.id} con origen en ${flight.from} con destino a ${flight.to} tiene un coste de ${flight.cost}€ y realiza escala.`);
      }
      else{
      console.log(`el vuelo nº ${flight.id} con origen en ${flight.from} con destino a ${flight.to} tiene un coste de ${flight.cost}€ y no realiza escala.`);
      }})
  console.log("*******************");
  }  

  const averageFlights = () => {
  for (let index = 0; index < flights.lenght ;index+= 1);{
  const costFlights = 0;
  let averageFlight = 0;
  flights.forEach((flight) => costFlights === costFlights + flight.cost);
  averageFlight = costFlights / flights.length;
  console.log(`el coste medio de los vuelos de hoy es de ${averageFlight} €`);
  return averageFlight;
  }
  }

  const showScales = () => {
      for (let index = 0; index < flights.lenght ;index+= 1);{
      let numberScales = 0;
      flights.forEach((flight) =>{
      if(flight.scale === true ){
          numberScales +=1 }});
      console.log(`el numero de vuelos que realizan escalas es de ${numberScales}`);   
      }
      }
  
  const lastTo = () => {
      console.log("los ultimos vuelos del dia de hoy son...")
      const last = flights.length - 6
      flights.forEach((flight) => {
      if (flight.id > last){
      console.log(`el vuelo numero ${flight.id} con destino a ${flight.to}`)}})
      }
      
  const preguntaRol = () => {
          const rol = prompt("cual es tu rol? (user/admin)");
          if (rol === null){
              alert("rol incorrecto");
              preguntaRol();
          }else if(rol.toLowerCase() !== "user" && rol.toLowerCase() !=="admin"){
              alert("rol incorrecto");
              preguntaRol();
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
          flights.forEach((flight) => {
          if (flight.scale === true){
          console.log(`el vuelo nº ${flight.id} con origen en ${flight.from} con destino a ${flight.to} tiene un coste de ${flight.cost}€ y realiza escala.`);
          }
          else{
          console.log(`el vuelo nº ${flight.id} con origen en ${flight.from} con destino a ${flight.to} tiene un coste de ${flight.cost}€ y no realiza escala.`);
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
      flights.forEach((flight) => {
      if (flight.scale === true){
      console.log(`el vuelo nº ${flight.id} con origen en ${flight.from} con destino a ${flight.to} tiene un coste de ${flight.cost}€ y realiza escala.`);
          }
      else{
      console.log(`el vuelo nº ${flight.id} con origen en ${flight.from} con destino a ${flight.to} tiene un coste de ${flight.cost}€ y no realiza escala.`);
          }})
          console.log("*******************");
          }
      
      const eresUser = () => {
          const precioVuelo = +prompt("introduzca su presupuesto maximo");
          console.log("los vuelos dentro de su presupuesto son...");
          flights.forEach((flight) => {
              if (flight.cost < precioVuelo){
                  console.log(`el vuelo nº ${flight.id} con origen ${flight.from} destino a ${flight.to} por el coste de ${flight.cost}`)
              }
          })
          if (Number.isNaN(precioVuelo) && precioVuelo<0){
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
