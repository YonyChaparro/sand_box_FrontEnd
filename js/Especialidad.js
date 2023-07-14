import InteraccionBD from "./InteraccionBD.js";

const Especialidad = new InteraccionBD();

const miBoton = document.getElementById("btnEnviar");
miBoton.addEventListener("click",
async()=>{
    event.preventDefault();
    miBoton.disabled=true;
    await Especialidad.guardarEspecialidad();
}

);