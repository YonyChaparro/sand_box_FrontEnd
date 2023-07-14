import InteraccionBD from "./InteraccionBD.js";

const Paciente = new InteraccionBD();

const btnListar = document.getElementById("Listar_pacientes");

btnListar.addEventListener("click",
async()=>{
    event.preventDefault();
    btnListar.disabled=true;
    await Paciente.listarPacientes();
}

);