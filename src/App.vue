<template>
  <!--<div>
    <div>
    <form method="POST" accept-charset="UTF-8" @submit="formSubmit" enctype="multipart/form-data">
      <input type="file" class="" v-on:change="onFileChange"/>
      <button> Enviar </button>
    </form>
  </div>
  <button v-on:click="download()">Descargar</button>
  </div>-->
  <router-view></router-view>
</template>
<script>
import Libros from './components/Admin/Libros.vue'
import axios from 'axios'
export default {
  components:{
    Libros
  },
  mounted(){

  },
  data(){
    return {
      file:""
    }
  },
  methods:{
    onFileChange(e){
      this.file = e.target.files[0]
    },
    formSubmit(e){
      e.preventDefault();
      let formData = new FormData()
      formData.append('images',this.file)
      axios.post('http://127.0.0.1:8000/api/upload',formData)
      .then(res=>{
      }).
      catch(err=>{
        console.log(err)
      })
    },
    download(){
      window.open("http://127.0.0.1:8000/api/file/1668011040.pdf")
    }
  }
}
</script>
<style>
body{
 background-color: #020202; 
}
</style>