const token = localStorage.getItem('token');
const url2='http://localhost:3000/empleado';
const contenedor1=document.getElementById('data1');
let resultado1='';
const carga_empleado = (empleado)=>{
    empleado.forEach(empleado => {
        resultado1+=`<tr style="border-bottom: 1px solid  #6c567b">
                          <td>${empleado.codEmpleado}</td>
                          <td>${empleado.tipoEmpleado}</td>
                          <td>${empleado.sueldo}</td>
<<<<<<< HEAD:proyecto/frontend/js/empleado.js
                          <td>${empleado.ci}</td>
                          <td style="cursor:pointer" bgcolor="#f67280" ><a  class='btnDelete1' >Eliminar</a></td>
                          <td style="cursor:pointer" bgcolor="#ffbfb0" ><a class='btnEditar1' >Editar</a></td>
=======
                          <td>${empleado.codUsuario}</td>
                          <td style="cursor:pointer" bgcolor="#f67280" ><a  class='btnDelete' >Eliminar</a></td>
                          <td style="cursor:pointer" bgcolor="#ffbfb0" ><a class='btnEditar' >Editar</a></td>
>>>>>>> f360b71e3d741a51df68ebebfdc552aec338bb68:proyecto/frontend/empleado.js
                          </tr>`
    });
    contenedor1.innerHTML=resultado1;
}  
fetch(url2, {
    method: 'GET',
    headers: { 'Authorization': token
   }
  })
.then(response => response.json())
 .then(data1 => carga_empleado(data1))
.catch(error => console.log(error))

const a=(element,event,selector,handler)=>{
    element.addEventListener(event, e =>{
    if(e.target.closest(selector)){
        handler(e)
    }
})
}
//------DELETE
a (document,'click','.btnDelete1', e=>{
     fila=e.target.parentNode.parentNode 
    const codigo=fila.firstElementChild.innerHTML
    fetch(url2 +'/'+codigo,{method:'DELETE', headers: { 'Authorization': token
}})
    .then(response=>response.json())
    .then(()=>location.reload())
})
//-------------POST
let operacion1='adicionar'
form_empleado.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(operacion1=='adicionar'){
        fetch(url2,{ method:'POST',
        headers:{'Content-type':'application/json','Authorization': token},
        body:JSON.stringify({
            tipoEmpleado:tipoEmpleado.value,
            sueldo:sueldo.value,
<<<<<<< HEAD:proyecto/frontend/js/empleado.js
            ci:cie.value
=======
            codUsuario:codUsuario.value
>>>>>>> f360b71e3d741a51df68ebebfdc552aec338bb68:proyecto/frontend/empleado.js
 })
})
        .then(response => response.json())
        .then (data => {
            const nuevo_producto=[]
            nuevo_producto.push(data)
            //carga_ciudad(nuevo_producto);

        })
        .then(()=>location.reload())
}
    if(operacion1=='modificar'){
        fetch(url2+'/'+codEmpleado,{method:'PUT',
        headers:{'Content-type':'application/json','Authorization': token},
        body:JSON.stringify({
            tipoEmpleado:tipoEmpleado.value,
            sueldo:sueldo.value,
<<<<<<< HEAD:proyecto/frontend/js/empleado.js
            ci:cie.value
=======
            codUsuario:codUsuario.value
>>>>>>> f360b71e3d741a51df68ebebfdc552aec338bb68:proyecto/frontend/empleado.js
        })
        })
        .then(response => response.json())
        .then (data => {
            const nuevo_producto=[]
            nuevo_producto.push(data)
            //carga_Productos(nuevo_producto);
        })
        .then(()=>location.reload())
    }
})
let codEmpleado=0;
a(document,'click','.btnEditar1',e=>{
    const fila=e.target.parentNode.parentNode
    codEmpleado=fila.children[0].innerHTML
    const ftipoEmpleado=fila.children[1].innerHTML
    const fsueldo=fila.children[2].innerHTML
<<<<<<< HEAD:proyecto/frontend/js/empleado.js
    const fcie=fila.children[3].innerHTML

    tipoEmpleado.value=ftipoEmpleado,
    sueldo.value=fsueldo,
    cie.value=fcie
    operacion1='modificar'
=======
    const fcodUsuario=fila.children[3].innerHTML

    tipoEmpleado.value=ftipoEmpleado,
    sueldo.value=fsueldo,
    codUsuario.value=fcodUsuario
    operacion='modificar'
    chil
>>>>>>> f360b71e3d741a51df68ebebfdc552aec338bb68:proyecto/frontend/empleado.js
})

