const url2='http://localhost:3000/login'
const contenedor1=document.getElementById('data1');
let resultado1='';
const carga_login = (login)=>{
    login.forEach(login => {
        resultado1+=`<tr style="border-bottom: 1px solid  #6c567b">
                          <td>${login.usuario}</td>
                          <td>${login.contraseña}</td>
                          <td>${login.codUsuario}</td>
                          <td>${login.usuResponsable}</td>
                          </tr>`
    });
    contenedor1.innerHTML=resultado1;
}  
const on=(element,event,selector,handler)=>{
    element.addEventListener(event, e =>{
    if(e.target.closest(selector)){
        handler(e)
    }
})
}

//------DELETE
on (document,'click','.btnDelete1', e=>{
     fila=e.target.parentNode.parentNode 
    const codigo=fila.firstElementChild.innerHTML
    fetch(url2 +'/'+codigo,{method:'DELETE'})
    .then(response=>response.json())
    .then(()=>location.reload())
})
//-------------POST
let operacion1='adicionar'
form_login.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(operacion1=='adicionar'){
        fetch(url2,{ method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
            usuario:usuario.value,
            contraseña:contraseña.value,
            codUsuario:codUsuario.value,
            usuResponsable:usuResponsable.value
 })
})
        .then(response => response.json())
        .then (data1 => {
            const nuevo_producto=[]
            nuevo_producto.push(data1)
            //carga_ciudad(nuevo_producto);

        })
        .then(()=>location.reload())
}
    if(operacion1=='modificar'){
        fetch(url2+'/'+usuario,{method:'PUT',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
            usuario:usuario.value,
            contraseña:contraseña.value,
            codUsuario:codUsuario.value,
            usuResponsable:usuResponsable.value
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

fetch(url2)
.then(response => response.json())
 .then(data1 => carga_empleado(data1))
.catch(error => console.log(error))

//----------------------
const url='http://localhost:3000/usuario';
const contenedor=document.getElementById('data');
let resultado='';
const carga_usuario = (usuario)=>{
    usuario.forEach(usuario => {
        resultado+=`<tr style="border-bottom: 1px solid  #6c567b">
                         <td>${usuario.ci}</td>
                          <td>${usuario.nombres}</td>
                          <td>${usuario.paterno}</td>
                          <td>${usuario.materno}</td>
                          <td>${usuario.direccion}</td>
                          <td>${usuario.genero}</td>
                          <td>${usuario.celular}</td>
                          <td>${usuario.fechaNacimiento}</td>
                          <td>${usuario.email}</td>
                          <td style="cursor:pointer" bgcolor="#f67280" ><a  class='btnDelete' >Eliminar</a></td>
                          <td style="cursor:pointer" bgcolor="#ffbfb0" ><a class='btnEditar' >Editar</a></td>
                          </tr>`
    });
    contenedor.innerHTML=resultado;
}  

//------DELETE
on (document,'click','.btnDelete', e=>{
     fila=e.target.parentNode.parentNode 
    const codigo=fila.firstElementChild.innerHTML
    fetch(url +'/'+codigo,{method:'DELETE'})
    .then(response=>response.json())
    .then(()=>location.reload())
})
//-------------POST
let operacion='adicionar'
form_usuario.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(operacion=='adicionar'){
        fetch(url,{ method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
            ci:ci.value,
            nombres:nombres.value,
            paterno:paterno.value,
            materno:materno.value,
            direccion:direccion.value,
            genero:genero.value,
            celular:celular.value,
            fechaNacimiento:fechaNacimiento.value,
            email:email.value
 })
})
        .then(response => response.json())
        .then (data => {
            const nuevo_producto=[]
            nuevo_producto.push(data)

        })
        .then(()=>location.reload())
}
    if(operacion=='modificar'){
        fetch(url+'/'+codUsuario1,{method:'PUT',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({
            ci:ci.value,
            nombres:nombres.value,
            paterno:paterno.value,
            materno:materno.value,
            direccion:direccion.value,
            genero:genero.value,
            celular:celular.value,
            fechaNacimiento:fechaNacimiento.value,
            email:email.value
        })
        })
        .then(response => response.json())
        .then (data => {
            const nuevo_producto=[]
            nuevo_producto.push(data)
        })
        .then(()=>location.reload())
    }
})
let codUsuario1=0;
on(document,'click','.btnEditar',e=>{
    const fila=e.target.parentNode.parentNode
    codUsuario1=fila.children[0].innerHTML
    const fnom=fila.children[1].innerHTML
    const fpat=fila.children[2].innerHTML
    const fmat=fila.children[3].innerHTML
    const fci=fila.children[4].innerHTML
    const fdir=fila.children[5].innerHTML
    const fgen=fila.children[6].innerHTML
    const fcel=fila.children[7].innerHTML
    const ffecha=fila.children[8].innerHTML
    const femail=fila.children[9].innerHTML

    nombres.value=fnom,
    paterno.value=fpat,
    materno.value=fmat,
    ci.value=fci,
    direccion.value=fdir,
    genero.value=fgen,
    celular.value=fcel,
    fechaNacimiento.value=ffecha,
    email.value=femail
    operacion='modificar'
})
fetch(url)
.then(response => response.json())
 .then(data => carga_usuario(data))
.catch(error => console.log(error))
