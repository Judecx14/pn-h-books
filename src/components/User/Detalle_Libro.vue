<template>
    <!-- navbar -->
    <br>
    <div class="container" style="color: white;">
        <div class="row text-center">
            <h2>Orgullo y prejuicio</h2>
            <!-- <h2>{{libro.titulo}}</h2> -->
        </div><br>
        <div class="row text-start">
            <div class="col-lg-3 ">
                <img v-bind:src="`../../../images/book.jpg`" class="mx-auto d-block">
                <!-- <img v-bind:src="`/files/img/${libro.imagen}`"> -->
            </div>
            <div class="col-lg-9">
                <div class="row">
                    <b>Sinopsis</b> <br>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatem, voluptatum neque quae culpa, ad deleniti tenetur natus eum quaerat itaque similique hic corporis. Eaque suscipit modi velit at qui. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatum illo exercitationem delectus porro quos molestias saepe beatae, accusantium repudiandae animi tenetur sed, impedit natus fugiat nihil, est at alias.</p>
                    <!-- <p>{{libro.sinopsis}}</p> -->
                </div>
                <div class="row">
                    <b>Informacion adicional</b> 
                    
                    <div class="col">
                        <p>Autor: Daniel Habit</p>
                        <!--  <p>Autor: {{libro.autor}}</p> -->
                    </div>
                    <div class="col">
                        <p>ISBN: 9728651823754912</p>
                        <!-- <p>ISBN: {{libro.isbn}}</p> -->
                    </div>
                    <div class="col">
                        <p>Edicion: 1a Edicion</p>
                        <!-- <p>Edicion: {{libro.edicion}}</p> -->
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <p>Editorial: Harpercollins Mexico</p>
                        <!-- <p>Editorial: {{libro.editorial}}</p> -->
                    </div>
                    <div class="col">
                        <p>Numero de Paginas: 432</p>
                        <!-- <p>Numero de Paginas: {{libro.numero_paginas}}</p> -->
                    </div>
                    <div class="col">
                        <p>Año: 2021</p>
                        <!-- <p>Año: {{libro.año_lanzamiento}}</p> -->
                    </div>
                </div>
            </div>
        </div>

        <br>

        <div class="row">
            <div class="col-lg-3 d-grid gap-2 p-2">
                <a type="button" class="btn btn-primary" download>Descargar PDF</a>
                <!-- <a v-bind:href="'/files/pdf/'+libro.pdf" type="button" class="btn btn-danger" download>Descargar PDF</a> -->
            </div>

            <div class="col-lg-3 d-grid gap-2 p-2">
                <button type="button" class="btn btn-primary ">Guardar Libro</button>
                <!--  <button type="button" @click="guardarLibro()" class="btn btn-outline bg-brown text-white">Guardar Libro</button> -->
            </div>
        </div>


        <br><br><br>

        <!-- Recomendaiones -->
        <div class="row text-start">
            <h2>Similares</h2>
        </div>
        <div class="row">
            <!-- Carrusel de libros similares -->
            <br>
        </div>

        <div class="row text-start">
            <span style="color: grey;">Un amor para sentir y desear</span>
            <h2>Romance erotico</h2>
        </div>
        <div class="row text-center">
            <!-- Carrusel e libros recomedados -->
        </div>

    </div>
</template>

<script>
import VueCookies from 'vue-cookies'
import axios from 'axios';
export default {
    data(){
        return {
            libro:{},
            user:{}
        }
    },
    mounted(){
        this.getLibro(this.$route.params.id)
    },
    methods:{
        getToken(){
            return VueCookies.get("token") 
        },
        async getLibro(id){
            
            await axios.post('http://127.0.0.1:8000/api/filtrar/libro',{
                libro_id:id
            }).then(response=>{
                this.libro = response.data.libro
            }).catch(error=>{
                console.log(error)
                this.libros = {}
            })
        },
        async check(){
            await axios.get('http://127.0.0.1:8000/api/check',{
                headers:{
                    'Authorization': `Bearer ${this.getToken()}` 
                },
            }).then(response=>{
                if(response.data.status){
                    this.user = response.data.user
                }else{
                    alert("Algo salio mal con su session")
                }
            }).catch(error=>{
                console.log(error)
                alert("Algo salio mal con su session")
            })
        },
        async guardarLibro(){
            await this.check()
            await axios.post('http://127.0.0.1:8000/api/guardar/libro',{
                libro_id:this.libro.id,
                user_id:this.user.id
            },{
                headers:{
                    'Authorization': `Bearer ${this.getToken()}` 
                },
            }).then(response=>{
                if(response.data.status){
                    alert(response.data.message)
                }else{
                    alert("Algo salio mal")
                }
            }).catch(error=>{
                console.log(error)
                alert("Algo salio mal")
            })
        },
    }
}
</script>
<style>

</style>