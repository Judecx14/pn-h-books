<template>
      <section
            class="container d-lg-flex d-block align-items-center mb-5"
            id="container-first-promotion"
        >
            <div class="col-lg-6" id="container-image-cover-1">
            <img
                class="img-fluid d-block mx-auto"
                :src="coverImage"
                alt="cover-book"
            />
            </div>
            <div class="col-lg-6">
                <p>{{ phrase }}</p>
                <p :v-if="author" id="text-gray"> - 
                    <em>{{ author }}</em>  
                </p>
            </div>
        </section>
</template>

<script>
export default {
    name: 'Quotes',
    props: {
        coverImage: {
            type: String,
            required: true,
            default: ''
        },
        phrase: {
            type: String,
            required: true,
            default: ''
        },
        author: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
    img {
        width: 200px;
        aspect-ratio: 9/16;
        border-radius: 10px;
        object-fit: cover;
    }
    p {
        text-align: center;
        font-size: 1.5rem;
        font-weight: 400;
        color: #fff;
    }
    #text-gray {
        font-size: 1rem;
        color: #ccc;
    }
</style>