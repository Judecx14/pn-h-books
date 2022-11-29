<template>

    <div class="background ">
       <br>
       <div class="container">
          <div class="row justify-content-center " >
             <div class="col-lg-5 justify-content-center" style="background-color:white; border-radius: 20px; ">
                
                <div class="offset-lg-2 col-lg-8 justify-content-center">
                   <div class="logo animate__animated animate__bounceInDown" >
                   <img  src="../../assets/logo.svg" class="card-img-top" width="10px" height="">
                   </div>
                   <form >
                      <div class="form-group">
                         <input type="email" name="email" id="email" v-model="email" formControlName="email"  class="form-control"  placeholder="Ingrese su correo" required>
                      </div>
                      <br>
                      <div class="form-group">
                         <input type="password" name="password" id="password" v-model="pass" formControlName="password"  class="form-control"  placeholder="Ingrese su contraseña" required>
                      </div>
                      <br>
                      <div class="color">
             
                      <div class="form-group d-grid gap-2">
                         <button type="submit" class="btn btn-block button"  style="color: #ffff">Iniciar sesion</button>
                      </div>
                      </div>
                   </form>
                      </div>
                      <br>
                      <div class="deco">
                      <div class="form-group text-center">
                         <a class="text-black link" href="#" style="color: #320000"><b>Registrarme</b></a>
                      </div>
                      </div>
                      <br>
                   </div>
                
             </div>
             <br>
          </div>
       </div>
       
    
        
    </template>
    
    
    
    <style>
    
    .animate__animated.animate__bounceInDown {
      --animate-duration: 2s;
    }
    
    .background {
        background-color:black;
        background-size: cover;
        background-repeat: no-repeat;
    }
    
    .link{
        text-decoration: none;
    }
    .logo{
    width: 270px;
    height: 270px;
    margin-left: auto; 
    
    margin-right: auto;
    }
    .color 
    {
       background-color:aqua ;
       color: #ffff;
    }
    .deco {
       text-decoration: underline;
    }
    </style>
    
    <script>
   
    </script>