<template>
    <div class="container">
        <button type="button" id="myModal" class="btn text-light my-2" style="background-color: #2B5CBA;" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Agregar
    </button>
    <div class="container-fluid text-center">
        <table class="table">
        <thead>
            <tr class="text-light">
                <th scope="col">N</th>
                <th scope="col">Titulo</th>
                <th scope="col">Categoria</th>
                <th scope="col">Autor</th>
                <th scope="col">Portada</th>
                <th scope="col">PDF</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr class="text-light" v-for="(book,index) in books" :key="book.id">
                <td>{{index + 1}}</td>
                <td>{{book.title}}</td>
                <td>{{book.category}}</td>
                <td>{{book.author}}</td>
                <td>{{book.portada}}</td>
                <td>{{book.pdf}}</td>
                <td>
                    <div>
                        <button class="mybutton mx-2 my-xs-2" style="background-color: #33FF00;" onClick=""><img class="d-block w-100" src="../../assets/icons/pencil.png" style="cursor:pointer; width: 20px; height: 20px" alt="edit"></button>
                        <button class="mybutton mx-2 my-xs-2" style="background-color: #2B5CBA;" onClick=""><img class="d-block w-100" src="../../assets/icons/trash.png" style="cursor:pointer; width: 20px; height: 20px" alt="edit"></button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    </div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body" style="background-color: #020202;">
        <form>
            <div class="mb-3 text-light">
                <label for="titulo" class="form-label">Titulo</label>
                <input type="text" id="titulo" class="form-control">    
            </div>
            <div class="mb-3 text-light">
                <label class="form-label">Autor</label>
                <input type="text" class="form-control">
            </div>
            <div class="mb-3 text-light">
                <label class="form-label">Categoria</label>
                <select class="form-select" v-model="category">
                    <option v-for="option in categories" :value="option.value" :key="option">
                        {{ option.category }}
                    </option>
                </select>        
            </div>
            <div class="mb-3 text-light">
                <label class="form-label">Paginas</label>
                <input type="text" class="form-control">
            </div>
            <div class="mb-3 text-light">
                <label class="form-label">Portada</label>
                <input type="file" class="form-control">
            </div>
            <div class="mb-3 text-light">
                <label class="form-label">PDF</label>
                <input type="file" class="form-control">
            </div>
            
        </form>
        <div class="d-grid gap-2">
                <button class="btn text-light" style="background-color: #2B5CBA;">Guardar</button>
                <button class="btn btn-danger text-light" data-bs-dismiss="modal">Cerrar</button>
            </div>
      </div>
    </div>
  </div>
</div>
    
</template>

<script>
export default {
    data(){
        return{
            books:[
                {id:1,title:"Libro 1", category:"Terror", author:"Alguien", portada:"Portada", pdf:"PDF"},
                {id:2,title:"Libro 2", category:"Terror", author:"Alguien", portada:"Portada", pdf:"PDF"},
                {id:3,title:"Libro 3", category:"Terror", author:"Alguien", portada:"Portada", pdf:"PDF"},
                {id:4,title:"Libro 4", category:"Terror", author:"Alguien", portada:"Portada", pdf:"PDF"},
                {id:5,title:"Libro 5", category:"Terror", author:"Alguien", portada:"Portada", pdf:"PDF"},            
            ],
            book:{},
            categories:[
                {category:"Terror"},
                {category:"Romance"},
                {category:"Fantasia"}
            ],
            category:""
        }
    },
    methods:{
        
    }
}
</script>
<style>
.mybutton {
    border: none;
    padding: .5rem;
    border-radius: 50%;
    outline: none;
}

.mybutton:hover {
    border: none;
    outline: none;
    cursor: pointer;
}
</style>