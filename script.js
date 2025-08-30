class Tarea{
  constructor(id, contenido) {
    this._id = id;
    this._contenido = contenido; 
    this._completada = false    
  }

  get id() {
    return this._id;
  }
  get contenido(){
    return this._contenido;
  }
  get completada(){
    return this._completada
  }
  set completada(e){
    this._completada = e
    //return console.log('completado')
  }
}

let cont = 0
let tarealist = []
let compleadasList = []
let filtrarComp = false

const borrar = (id) =>{
    
    const filtrarTarea = tarealist.find(tarea => tarea.id === id);
    if(compleadasList.includes(filtrarTarea)){
        compleadasList = compleadasList.filter(t => t.id !== filtrarTarea.id);
        //console.log(`tarea eliminada de completadas`)    
        tarealist = tarealist.filter(t => t.id !== id);
    }else{
        tarealist = tarealist.filter(t => t.id !== id);
    }

    mostrarTabla();
}

const completar = (id) =>{
    const filtrarTarea = tarealist.find(tarea => tarea.id === id);
    if(compleadasList.includes(filtrarTarea)){
        filtrarTarea.completada = !filtrarTarea.completada
        compleadasList = compleadasList.filter(t => t.id !== filtrarTarea.id);
        //console.log(`tarea eliminada de completadas : ${compleadasList}`)
    }else{
    filtrarTarea.completada = !filtrarTarea.completada;
    compleadasList.push(filtrarTarea)
    //console.log(filtrarTarea.contenido)
    //console.log(`tareas completadas `)
    }
}

const filtrarCompletados = () =>{
    if(tarealist.length === 0){
        alert('No hay tareas para filtrar')
    }else{
    filtrarComp = true
    compleadasList.sort((a, b) => a.id - b.id);
    mostrarTabla();}
}
const mostrarTodo = () =>{
    filtrarComp = false
    
    mostrarTabla();
}

const mostrarTabla = () =>{
   
    const tabla = document.getElementById('tabla');
    tabla.innerHTML = `
      <caption id = 'titulo-tabla'>Lista Tareas</caption>
      <tr>
          <th>Id</th>
          <th>Tarea</th>
          <th>Completada</th>
          <th>Borrar</th>
      </tr>
    `;

    if (tarealist.length === 0) {
        tabla.innerHTML += `
        <tr id="fila-vacia">
            <td>0</td>
            <td>vacio</td>
            <td><input type="checkbox" disabled></td>
            <td><button disabled>x</button></td>
        </tr>
        `;
    }else if (filtrarComp == true){
        if (compleadasList == 0 ){
            tabla.innerHTML += `  <tr id = 'fila-vacia'>
            <td>0</th>
            <td>No hay tareas completadas</td>
            <td><input type="checkbox" name="checkbox" value="si"></td>
            <td><button>x</button></td>
        </tr>`;
        }else{
         for (let tarea of compleadasList) {
            tabla.innerHTML += `<tr id="${tarea.id}">
                <td>${tarea.id}</td>
                <td>${tarea.contenido}</td>
                <td><input type="checkbox" onclick="completar(${tarea.id}); mostrarTabla();" ${tarea.completada ? "checked" : ""}></td>
                <td><button onclick="borrar(${tarea.id}); mostrarTabla();">x</button></td>
            </tr>`;
        }}
    } 
    else {
        for (let tarea of tarealist) {
            tabla.innerHTML += `<tr id="${tarea.id}">
                <td>${tarea.id}</td>
                <td>${tarea.contenido}</td>
                <td><input type="checkbox" onclick="completar(${tarea.id}); mostrarTabla();" ${tarea.completada ? "checked" : ""}></td>
                <td><button onclick="borrar(${tarea.id}); mostrarTabla();">x</button></td>
            </tr>`;
        }
    }
}






const formulario = document.getElementById('formulario');
formulario.addEventListener('submit',function(event){
    event.preventDefault();

    const tareainput = document.getElementById('tarea');
    const tareaContent = tareainput.value;

    const tarea = new Tarea(cont++,tareaContent)
    tarealist.push(tarea)
    //console.log(tarealist)

    mostrarTabla()
    tareainput.value = "";
})