
class InteraccionBD{

    async guardarCita(){

        const idCita = document.getElementById("idCita").value;
        const fecha = document.getElementById("fecha").value;
        const cedulaPaciente = document.getElementById("cedulaPaciente").value;
        const tarjetaProfesional = document.getElementById("tarjetaProfesional").value;
        const Paciente = document.getElementById("Paciente").value;        
        const Medico = document.getElementById("Medico").value;

        const fechaCita = new Date(fecha.split("-").reverse().join("-"))  
    
        const datos={
            idCita:idCita,
            fecha:fechaCita,
            cedulaPaciente:cedulaPaciente,
            tarjetaProfesional:tarjetaProfesional,
            Paciente:Paciente,
            Medico:Medico
        };
   try{

  
        await fetch(
            "http://localhost:3002/crear_cita",
            {
                method:"POST",
                body:JSON.stringify(datos),
                headers:{
                    "Content-Type":"application/json"
                }
            }
        );
            console.log("Registro exitoso");
        }catch(e){
            
            console.log({eror:e.message})
        }
    }

  
        async listarCitas(){
            let citas = await fetch("http://localhost:3002/citas");
           citas = await citas.json();
           const miTabla = document.getElementById("tabla_cita");         
           citas.forEach(
            (cita)=>{
                const fila = miTabla.insertRow();
                fila.insertCell().innerText = cita.idCita;
                fila.insertCell().innerText = cita.fecha;
                fila.insertCell().innerText = cita.cedulaPaciente;
                fila.insertCell().innerText = cita.tarjetaProfesional;
                fila.insertCell().innerText = cita.Paciente;
                fila.insertCell().innerText = cita.Medico;
            }
           );
        }

        async guardarEspecialidad(){

            const idEspecialidad = parseInt(document.getElementById("idEspecialidad").value);      
            const Nombre = document.getElementById("nombre").value;
        
            const datos={
                idEspecialidad:idEspecialidad,
                nombre:Nombre
            };
       try{
    
      
            await fetch(
                "http://localhost:3002/crear_especialidad",
                {
                    method:"POST",
                    body:JSON.stringify(datos),
                    headers:{
                        "Content-Type":"application/json"
                    }
                }
            );
                console.log("Registro exitoso");
            }catch(e){
                
                console.log({eror:e.message})
            }
        }
    
        async listarEspecialidades(){
            let especialidades = await fetch("http://localhost:3002/especialidades");
           especialidades = await especialidades.json();
           const miTabla = document.getElementById("tabla_especialidad");         
           especialidades.forEach(
            (especialidad)=>{
                const fila = miTabla.insertRow();
                fila.insertCell().innerText = especialidad.idEspecialidad;
                fila.insertCell().innerText = especialidad.nombre;
                
            }
           );
        }


        async guardarMedico(){

            const tarjetaProfesional = parseInt(document.getElementById("tarjetaProfesional").value);
            const nombre = document.getElementById("nombre").value;
            const apellido = document.getElementById("apellido").value;
            const consultorio = document.getElementById("consultorio").value;
            const correo = document.getElementById("correo").value;
            const idEspecialidad = parseInt(document.getElementById("idEspecialidad").value);        
            
           
        
            const datos={
                tarjetaProfesional:tarjetaProfesional,
                nombre:nombre,
                apellido:apellido,
                consultorio:consultorio,
                correo:correo,
                idEspecialidad:idEspecialidad,
                especialidadIdEspecialidad:idEspecialidad
            };
       try{
    
      
            await fetch(
                "http://localhost:3002/crear_medico",
                {
                    method:"POST",
                    body:JSON.stringify(datos),
                    headers:{
                        "Content-Type":"application/json"
                    }
                }
            );
                console.log("Registro exitoso");
            }catch(e){
                
                console.log({eror:e.message})
            }
        }
    
      
            async listarMedicos(){
                let medicos = await fetch("http://localhost:3002/medicos");
               medicos = await medicos.json();
               const miTabla = document.getElementById("tabla_medico");         
               medicos.forEach(
                (medico)=>{
                    const fila = miTabla.insertRow();
                    fila.insertCell().innerText = medico.tarjetaProfesional;
                    fila.insertCell().innerText = medico.nombre;
                    fila.insertCell().innerText = medico.apellido;
                    fila.insertCell().innerText = medico.consultorio;
                    fila.insertCell().innerText = medico.correo;
                    fila.insertCell().innerText = medico.idEspecialidad;
                    fila.insertCell().innerText = medico.especialidadIdEspecialidad;
                }
               );
            }
 
            
            async guardarPaciente(){

                const cedula = parseFloat(document.getElementById("cedula").value);
                const nombre = document.getElementById("nombre").value;
                const apellido = document.getElementById("apellido").value;
                const fechaNacimiento = document.getElementById("fechaNacimiento").value;
                const telefono = document.getElementById("telefono").value;
                    
                
                const fecha = new Date(fechaNacimiento.split("-").reverse().join("-"))
            
                const datos={
                    cedula:cedula,
                    nombre:nombre,
                    apellido:apellido,
                    fechaNacimiento:fecha,
                    telefono:telefono
                    
                };
           try{
        
          
                await fetch(
                    "http://localhost:3002/crear_paciente",
                    {
                        method:"POST",
                        body:JSON.stringify(datos),
                        headers:{
                            "Content-Type":"application/json"
                        }
                    }
                );
                    console.log("Registro exitoso");
                }catch(e){
                    
                    console.log({eror:e.message})
                }
            }
        
          
                async listarPacientes(){
                    let pacientes = await fetch("http://localhost:3002/pacientes");
                    pacientes = await pacientes.json();
                   const miTabla = document.getElementById("tabla_paciente");         
                   pacientes.forEach(
                    (paciente)=>{
                        const fila = miTabla.insertRow();
                        fila.insertCell().innerText = paciente.cedula;
                        fila.insertCell().innerText = paciente.nombre;
                        fila.insertCell().innerText = paciente.apellido;
                        fila.insertCell().innerText = paciente.fechaNacimiento;
                        fila.insertCell().innerText = paciente.telefono;
                    
                    }
                   );
                }

 
}

export default InteraccionBD;