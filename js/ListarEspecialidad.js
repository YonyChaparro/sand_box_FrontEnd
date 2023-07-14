import InteraccionBD from "./InteraccionBD.js";

const Especialidad = new InteraccionBD();

const btnListar = document.getElementById("Listar_especialidades");

btnListar.addEventListener("click",
async()=>{
    event.preventDefault();
    btnListar.disabled=true;
    await Especialidad.listarEspecialidades();
}

);