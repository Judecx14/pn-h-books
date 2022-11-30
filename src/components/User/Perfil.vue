<template>
    <div class="container-fluid">
        <div class="row"> <!-- align-items-center -->
            <div class="col-lg-2 text-center ">
                <img v-bind:src="`../../../images/user.png`" class="" width="150">
            </div>
            <div class="col-lg-3">
                <h2 style="color: white;">Juan Vazquez</h2>
                <span style="color: grey;">juanvazquez_jesuss@hotmail.com</span>
            </div>
        </div>
        <div class="row pt-4 ">
            <div class="col-lg-3">
                <a type="button" class="btn btn-primary btn-sm rounded-pill px-5">Actualizar mis datos</a>
            </div>
        </div>
    </div>

    <div class="container-fluid" style="color: white;">
        <div class="row">
            <h2>Mis libros</h2>
        </div>
    </div>

</template>



<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        
    }
}
</script>


<style>
.vertical-center {
  min-height: 100%;  /* Fallback for browsers do NOT support vh unit */
  min-height: 100vh; /* These two lines are counted as one :-)       */

  display: flex;
  align-items: center;
}
</style>