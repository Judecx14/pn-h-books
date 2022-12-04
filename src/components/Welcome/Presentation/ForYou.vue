<template>
    <section>
        <h3>Libros solo para ti.</h3>
        <p>Tú lees, te gusta, nostros aprendemos...</p>
        <div class="d-lg-flex d-block">
            <div class="col-lg-3">
                <div class="d-flex flex-column p-3">
                    <img src="../../../assets/home/for-you-cover-book-1.png" class="img-fluid cover-book">
                    <p class="text-tiny"><small>Los lunes, explora autores que no conoces.</small></p>
                </div>
                <div class="d-flex flex-column  p-3">
                    <img src="../../../assets/home/for-you-cover-book-2.png" class="img-fluid cover-book">
                    <p class="text-tiny"><small>Los viernes, novedades de autores que te gustan.</small></p>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="d-flex flex-column p-3">
                    <img src="../../../assets/home/for-you-cover-book-3.png" class="img-fluid cover-book">
                    <p class="text-tiny"><small>Un mix infinito de emociones constantes.</small></p>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="d-flex flex-column p-3">
                    <img src="../../../assets/home/for-you-cover-book-4.png" class="img-fluid cover-book">
                    <p class="text-tiny"><small>Los domingos, nuevas selecciones de chill.</small></p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ForYou",
}
</script>

<style scoped>
section {
    margin-block: 3rem;
    width: 80%;
}
section h3 {
    font-size: 3.5rem;
    font-weight: 700;
    text-align: center;
}
section p {
    text-align: center;
    font-size: 1.25rem;
}
.cover-book {
    width: 100%;
    height: 100%;
}

.text-tiny {
    text-align: center;
}
</style>