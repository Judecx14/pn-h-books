<template>
  <section id="container-about" class="d-lg-flex d-lg-block">
    <div class="col-lg-6">
      <h2>
        Bienvenido a <strong>H-Books</strong> una plataforma para leer tus
        libros favoritos.
      </h2>
      <p>
        Publica tus libros libremente sin restricciones, encuentra tus
        preferencias, conoce autores independientes y encuentra un mundo de
        diferentes aventuras.
      </p>
      <h3>Conócenos</h3>
      <p>
        Somos una plataforma que busca brindar a los lectores una experiencia de
        lectura única, con la posibilidad de publicar sus propios libros y
        compartirlos con el mundo.
      </p>
      <h3>Información</h3>
      <p>
        H-Books es una plataforma creada por estudiantes de la Universidad
        Tecnológica de Torreón, para el curso de Aplicaciones Web Progresivas.
      </p>
    </div>
    <div class="col-lg-6">
        <img class="img-fluid d-block mx-auto" src="../../../assets/logo/logo2.png" alt="icon-logo" />
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style>
#container-about {
  width: 80%;
  background-color: #fff;
  padding: 2rem;
}
#container-about h2 {
  font-size: 1.5rem;
}
#container-about h2 strong {
  font-weight: 700;
  color: #2b5cba;
}
#container-about h3 {
  font-size: 1.25rem;
}
#container-about img {
    width: 300px;
}
</style>