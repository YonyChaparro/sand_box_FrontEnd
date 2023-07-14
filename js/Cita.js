import InteraccionBD from "./InteraccionBD";

const Cita = new InteraccionBD();

const miBoton = document.getElementById("btnEnviar");

miBoton.addEventListener("click",
async()=>{
    event.preventDefault();
    miBoton.disabled=true;
    await Cita.guardarCita();
}

);