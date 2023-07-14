import InteraccionBD from "./InteraccionBD.js";

const Cita = new InteraccionBD();

const btnListar = document.getElementById("Listar_citas");

btnListar.addEventListener("click",
async()=>{
    event.preventDefault();
    btnListar.disabled=true;
    await Cita.listarCitas();
}

);