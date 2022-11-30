<template>
    <div class="container">    
    <button type="button" id="myModal" class="btn text-light my-2" style="background-color: #2B5CBA;" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Agregar
    </button>
    <div v-if="loading" class="d-flex justify-content-center">
            <div class="spinner-border text-primary m-4" role="status">
                <span class="visually-hidden text-light">Loading...</span>
            </div>
        </div>
    <div class="container-fluid text-center">
        <table class="table">
        <thead>
            <tr class="text-light">
                <th scope="col">N</th>
                <th scope="col">Titulo</th>
                <th scope="col">Categoria</th>
                <th scope="col">Autor</th>
                <th scope="col">Editorial</th>
                <th scope="col">ISBN</th>
                <th scope="col">Portada</th>
                <th scope="col">PDF</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="books.length > 0 && !loading" class="text-light" v-for="(book,index) in books" :key="book.id">
                <td>{{index + 1}}</td>
                <td>{{book.titulo}}</td>
                <td>{{book.categoria}}</td>
                <td>{{book.autor}}</td>
                <td>{{book.editorial}}</td>
                <td>{{book.isbn}}</td>
                <td>{{book.imagen}}</td>
                <td>{{book.pdf}}</td>
                <td>
                    <div>
                        <button class="mybutton mx-2 my-xs-2" style="background-color: #33FF00;" onClick=""><img class="d-block w-100" src="../../assets/icons/pencil.png" style="cursor:pointer; width: 20px; height: 20px" alt="edit"></button>
                        <button class="mybutton mx-2 my-xs-2" style="background-color: #2B5CBA;" onClick=""><img class="d-block w-100" src="../../assets/icons/trash.png" style="cursor:pointer; width: 20px; height: 20px" alt="edit"></button>
                    </div>
                </td>
            </tr>
            <tr v-if="books.length <= 0 && !loading" class="text-light">
                <td>No hay Libros</td>
            </tr>
        </tbody>
    </table>
    </div>
    </div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog border">
    <div class="modal-content">
      <div class="modal-body" style="background-color: #020202;">
        <form accept-charset="UTF-8" enctype="multipart/form-data" @submit="save">
            <div class="mb-3 text-light">
                <label for="titulo" class="form-label">Titulo</label>
                <input type="text" id="titulo" class="form-control" v-model="book.titulo">    
            </div>
            <div class="mb-3 text-light">
                <label class="form-label">Autor</label>
                <input type="text" class="form-control" v-model="book.autor">
            </div>
            <div class="mb-3 text-light">
                <label class="form-label">Editorial</label>
                <input type="text" class="form-control" v-model="book.editorial">
            </div>
            <div class="mb-3 text-light">
                <label class="form-label">ISBN</label>
                <input type="text" class="form-control" v-model="book.isbn">
            </div>
            <div class="mb-3 text-light">
                <label class="form-label">Categoria</label>
                <select class="form-select" v-model="book.category_id">
                    <option v-for="option in categories" :value="option.id" :key="option">
                        {{ option.categoria }}
                    </option>
                </select>        
            </div>
            <div class="mb-3 text-light">
                <label class="form-label">Paginas</label>
                <input type="number" class="form-control" v-model="book.numero_paginas">
            </div>
            <div class="mb-3 text-light">
                <label class="form-label">Edicion</label>
                <input type="number" class="form-control" v-model="book.edicion">
            </div>
            <div class="mb-3 text-light">
                <label class="form-label">Año de lanzamiento</label>
                <input type="number" class="form-control" v-model="book.año_lanzamiento">
            </div>
            <div class="mb-3 text-light">
                <label class="form-label">sinopsis</label>
                <textarea type="textarea" class="form-control" v-model="book.sinopsis"></textarea>
            </div>
            <div class="mb-3 text-light">
                <label class="form-label">Portada</label>
                <input accept="image/png, image/jpeg" type="file" class="form-control" v-on:change="onImageChange">
            </div>
            <div class="mb-3 text-light">
                <label class="form-label">PDF</label>
                <input accept="application/pdf" type="file" class="form-control" v-on:change="onFileChange">
            </div>
            <div class="d-grid gap-2">
                <button type="submit" class="btn text-light" style="background-color: #2B5CBA;">Guardar</button>
                <button class="btn btn-danger text-light" data-bs-dismiss="modal">Cerrar</button>
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
    
</template>

<script>
import axios from 'axios';
import url from '../../../enviroment'
export default {
    mounted(){
        this.getBooks();
        this.getCategories()
    },
    data(){
        return{
            books:[],
            book:{
                id:0,
                titulo:"",
                autor:"",
                editorial:"",
                isbn:"",
                numero_paginas:null,
                edicion:"",
                año_lanzamiento:"",
                sinopsis:"",
                pdf:null,
                imagen:null,
                category_id:0
            },
            pdf:'',
            imagen:'',
            categories:[],
            category:"",
            loading:false,
            token:'1|Q53XnsygM0czyZeAhJJXdN9RVVcghXGZSrNYSQYz'
        }
    },
    methods:{
        async getBooks(){
            this.loading = true;
            await axios.get(url+'book',{
                headers:{
                    Authorization: "Bearer " + this.token,
                }
            }).then(r=>{
                this.loading = false;
                this.books = r.data.books
            })
            .catch(err=>{

            })
        },
        async getCategories(){
            await axios.get(url+'categories',{
                headers:{
                    Authorization: "Bearer " + this.token,
                }
            }).then(r=>{
                this.loading = false;
                this.categories = r.data.categories
            })
            .catch(err=>{

            })
        },
        onFileChange(e){
            this.pdf = e.target.files[0]
        },
        onImageChange(e){
            this.imagen = e.target.files[0]
        },
        save(e){
            e.preventDefault();
            let form = new FormData()

            form.append('titulo',this.book.titulo)
            form.append('autor',this.book.autor)
            form.append('category_id',this.book.category_id)
            form.append('editorial',this.book.editorial)
            form.append('edicion',this.book.edicion)
            form.append('numero_paginas',this.book.numero_paginas)
            form.append('sinopsis',this.book.sinopsis)
            form.append('isbn',this.book.isbn)
            form.append('año_lanzamiento',this.book.año_lanzamiento)
            form.append('pdf',this.pdf,this.pdf.name)
            form.append('imagen',this.imagen,this.imagen.name)

            axios.post(url+'book',form,{
                headers:{
                    Authorization: "Bearer " + this.token,
                }
            })
            .then(r=>{
                this.getBooks()
            })
            .catch(e=>{
                console.log(e)
            })
        }
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
.border{
    border-color: #2B5CBA;
}
</style>