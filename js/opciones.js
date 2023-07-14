const array=["Paciente","Medico","Cita","Especialidad"]
for(i=0;i<array.length;i++){
    const btn = document.createElement("button")
    const links = document.createElement("a")
    links.setAttribute("href", array[i]+'.html')
    btn.innerHTML = array[i]
    
    document.body.appendChild(links)
    links.appendChild(btn)
    document.body.appendChild(btn)
    
    console.log(array[i]);
}