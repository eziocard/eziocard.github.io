let cont = 0
const tarealist = []
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit',function(event){
    
    event.preventDefault();
    
    const tareainput = document.getElementById('tarea');
    const tarea = tareainput.value;

    const tabla = document.getElementById('tabla');
    const fila_vacia = document.getElementById('fila-vacia');

    if (fila_vacia){
    fila_vacia.remove()}
    
  
    tarealist.push(tarea)
    console.log(tarealist)
    cont = tarealist.length
    idFila = `fila-${cont}`
    tabla.innerHTML += `<tr id = "${idFila}">
            <td>${cont}</th>
            <td>${tarea}</td>
            <td><input type="checkbox" name="checkbox" value="si"></td>
            <td><button onclick = borrar('${idFila}')>x</button></td>
        </tr>
      `
   
})

const borrar = (id) =>{
    const fila = document.getElementById(id);
    fila.remove()
    tarealist.remove(id)
    
}