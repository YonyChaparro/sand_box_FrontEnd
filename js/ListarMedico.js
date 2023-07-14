import InteraccionBD from "./InteraccionBD.js";

const Medico = new InteraccionBD();

const btnListar = document.getElementById("Listar_medicos");

btnListar.addEventListener("click",
async()=>{
    event.preventDefault();
    btnListar.disabled=true;
    await Medico.listarMedicos();
}

);