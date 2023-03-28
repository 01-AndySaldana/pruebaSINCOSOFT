
let allDoc 

async function getdata() {
    const data = await axios.get("http://localhost/api/doc/in");
    allDoc = data.data
    return data.data
}


$(document).ready(async function () {
    showTeable()
  });

  async function showTeable(){
    const datos = await getdata()
    // Use the given data to create 
    // the table and display it
    $('table').bootstrapTable({
      data: datos,
    });
  }
  function idFormatter(value){
    return '<button type="button" class="btn btn-danger" onclick="deleteDoc('+value+')">X</button> <button type="button" class="btn btn-warning" onclick="updateDoc('+value+')">A</button>'
  }


function deleteDoc(id){
    axios.delete(`http://localhost/api/doc/in/${id}`)
    showTeable()
}
function updateDoc(id){
    document.getElementById('form-update').style.display = "block"
    const miDoc = allDoc.filter(item => item.id === id)
    console.log(miDoc) 
    document.getElementById('inputToUpdate').value = id
    document.getElementById('nombreA').value = miDoc[0].name_personalizado
}
async function actlizarDoc(i) {
    i.preventDefault()
    const value = document.getElementById('nombreA').value
    const id = document.getElementById('inputToUpdate').value
    await axios.put(`http://localhost/api/doc/in/${id}`, {name_personalizado:value})
    document.getElementById('form-update').style.display = "none"
}

function crearDoc(e) {
    e.preventDefault();
    const value = document.getElementById('nombreC').value
    if (value === "")
    {alert("nombre personalizado es obligatorio")
    return}
    const file = document.getElementById('archivo')
    if (file.files.length === 0) {
        alert("nombre personalizado es obligatorio.")
        return
    }
    let formData = new FormData();
    formData.append("file",file.files[0]
    )
    axios.post(`http://localhost/api/doc/upload`, formData, {headers: {
        "Content-Type" :'multipart/form-data'
    }}).then(res=>{
        const params = res.data
        axios.post(`http://localhost/api/doc/in`, {...params,name_personalizado:value})
        return false;
    })
    
   
}

