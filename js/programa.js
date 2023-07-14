class FormEngine{
    async render(){

        var peticion = "Paciente"
        const response = await fetch('http://localhost:3002/formulario/'+peticion)
        const form = await response.json()
        
        const formHtml = document.createElement("form")
        formHtml.classList.add("container")

        const Encabezado = document.createElement("h1")
        Encabezado.innerHTML = "Formulario "+peticion
        formHtml.appendChild(Encabezado)

        
        //Recorrer todo el json

        for(const [key, value] of Object.entries(form.properties)){
      
      
            console.log(key, value)


            const label = document.createElement('label')
            label.innerText=key
            formHtml.appendChild(label)
            const input = document.createElement('input')
            input.name=key
            input.id = key
            input.classList.add("form-control")
            if(value.type=='integer'){
                input.type="number"
            }else{
                input.type="text"
            }
            formHtml.appendChild(input)
        }

        const btnEnviar = document.createElement("button")
        btnEnviar.setAttribute("value","Enviar")
        btnEnviar.setAttribute("class","mt-3 btn btn-primary")
        btnEnviar.setAttribute("id","btnEnviar")
        btnEnviar.type="submit"
        btnEnviar.innerHTML = "Enviar"
        formHtml.appendChild(btnEnviar)


        document.body.appendChild(formHtml)

        

    }
    }


const miFormEngine = new FormEngine()
miFormEngine.render()

export default FormEngine
