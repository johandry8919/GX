
const Id_equipo_homeclub = document.getElementById("id_equipo_homeclub");
const Id_equipo_visitante = document.getElementById("id_equipo_visitante");
const Fecha = document.getElementById("fecha");
const Nombre_Estadio = document.getElementById("nombre_estadio");


const url1 = new URL("https://bss.qualitybeisbol.com/api/boxscore");
const url2 = new URL("https://bss.qualitybeisbol.com/api/pbp");

const params = {
    id_juego: "23 8 7  1",
};

Object.keys(params).forEach(key => {
    url1.searchParams.append(key, params[key]);
    url2.searchParams.append(key, params[key]);
});

const headers = {
    "Authorization": "Bearer 45eadc85b650776e48bdf666120d0fbc",
    "Content-Type": "application/json",
    "Accept": "application/json",
};


const request1 = fetch(url1, {
    method: "GET",
    headers,
}).then(response => response.json());


const request2 = fetch(url2, {
    method: "GET",
    headers,
}).then(response => response.json());


Promise.all([request1, request2])
    .then(([result1, result2]) => {

      if (result1) {
  
        let { id_equipo_homeclub,id_equipo_visitante,fecha ,nombre_estadio
        } = result1.data.juego;


        Id_equipo_visitante.src = logoLeft[id_equipo_visitante].img_url;
        Id_equipo_homeclub.src = logoRight[id_equipo_homeclub].img_url;


     
       

                    var fechaOriginal =fecha;
                    var fechas = new Date(fechaOriginal);
                    var diasSemana = [
                    "domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"
                    ];

                    var meses = [
                    "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio",
                    "agosto", "septiembre", "octubre", "noviembre", "diciembre"
                    ];

               
                    var nombreDiaSemana = diasSemana[fechas.getDay()];
                    var dia = fechas.getDate();
                    var nombreMes = meses[fechas.getMonth()];
                    var año = fechas.getFullYear();

                    var fechaConvertida = nombreDiaSemana + " " + dia + " de " + nombreMes;

                    Fecha.innerText = fechaConvertida 

                    Nombre_Estadio.innerHTML = nombre_estadio

               

        runAnimationIN();
    }
    else {console.error("Error fetching data:", response.statusText);}})
    .catch(error => {
        console.error("Error en una de las solicitudes:", error);
    });