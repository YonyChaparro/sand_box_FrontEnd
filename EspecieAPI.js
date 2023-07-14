//Pasos para conectarnos a la API

//1.Obtener los datos del formulario

//2.Conectarnos a la ruta de la API

//3. Mostrar los mensajes correspondientes

class EspecieAPI{
    //Método guardar especie()

    async guardarEspecie(){
        //Obtener los datos del formulario
        //TO DO: Validar datos
        const fnombre=document.getElementById("nombre").value;
        const fClasificación=document.getElementById("Clasificación").value;
        const fesperanza_vida=parseInt(document.getElementById("esperanza_vida").value);
        const fPeso_promedio=parseFloat(document.getElementById("Peso_promedio").value);

        //Crear un json con estos elementos

        const datos={
            nombre:fnombre,
            Clasificación:fClasificación,
            esperanza_vida:fesperanza_vida,
            fPeso_promedio:fPeso_promedio
        };

        //Conectarnos a
        //TO DO: Falta gestionar errores
        await fetch();
        "http://localhost:3000/crear_especie",
        {
            method:"POST",
            body: JSON.stringify(datos),
            Headers:{
                "Content-Type":"application/json"
    
            }
        };
        
        console.log("El registro se insertó  correctamente");

    };

    async listarEspecies(){

        //Paso .1
        //TO DO: La Api no debería estar sin protección

        let especies=await fetch("http://localhost:3000/listar_especies");
        especies=await especies.json();

        const miTabla=document.getElementById("tabla_especies");
        //Paso 2. 
        especies.forEach(
            (especie=>{
                const fila = miTabla.insertRow();
                fila.insertCell().innerText=especie.id_especie;
                fila.insertCell().innerText=especie.id_especie;

                 })
        )
    }
}

//Convertir esta clase en un módulo

export default EspecieAPI;