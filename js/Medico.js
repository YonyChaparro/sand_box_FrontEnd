import InteraccionBD from "./InteraccionBD.js";

const Medico = new InteraccionBD();

const miBoton = document.getElementById("btnEnviar");

miBoton.addEventListener("click",
async()=>{
    event.preventDefault();
    miBoton.disabled=true;
    await Medico.guardarMedico();
}

);