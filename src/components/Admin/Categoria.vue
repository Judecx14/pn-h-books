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
                <th scope="col">Categoria</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr class="text-light" v-for="(category, index) in categories" :key="category.id">
                <td>{{index + 1}}</td>
                <td>{{category.category}}</td>
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
                <label for="titulo" class="form-label">Categoria</label>
                <input type="text" id="titulo" class="form-control">    
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
            categories:[
                {id:1,category:"Terror"},
                {id:2,category:"Romance"},
                {id:3,category:"Fantasia"}            
            ],
            category:{}
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