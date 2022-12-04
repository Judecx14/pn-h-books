<template>
  <section
    class="d-lg-flex d-block align-items-center"
    id="container-first-promotion"
  >
    <div class="col-lg-6" id="container-image-cover-1">
      <img
        class="img-fluid"
        src="../../../assets/home/cover-book-1.png"
        alt="cover-book-1"
      />
    </div>
    <div class="col-lg-6">
      <p>
        "No tengo derecho a decir o hacer nada que disminuya a un hombre ante sí
        mismo. Lo que importa no es lo que yo pienso de él, sino lo que él
        piensa de sí mismo. Herir a un hombre en su dignidad es un crimen"
      </p>
    </div>
  </section>
  <section class="d-lg-flex d-block align-items-center">
    <div class="col-lg-6">
      <p class="text-center text-lg-start">
        <span> Jane Austen llegó a H-Books </span>
      </p>

      <p>
        Este gran novelista, ha llegado a la mejor plataforma de libros
        existente, disfruta de todo su contenido.
      </p>
    </div>
    <div class="col-lg-6">
      <img
        class="d-block mx-auto img-fluid"
        src="../../../assets/home/cover-book-2.png"
        alt="cover-book-1"
        id="book-cover-2"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "Promotions",
};
</script>

<style scoped>
section {
  margin-block: 3rem;
  width: 80%;
}
section p {
  font-size: 1.25rem;
}
section span {
  font-size: 3.5rem;
  font-weight: 700;
}
#book-cover-2 {
  border-radius: 1rem;
}
#container-image-cover-1 {
  filter: brightness(0.5);
}
#container-first-promotion {
  background-color: #000;
  color: #fff;
  font-weight: 700;
}
#container-first-promotion p {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  #container-first-promotion p {
    font-size: 1rem;
    padding: 10px;
  }
}
</style>