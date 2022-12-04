<template>
    <section>
        <div class="ps-5 pt-4">    
            <p>{{ subtitle }}</p>
            <h1>{{ title }}</h1>
        </div>
        <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="book in books" :key="book.id">
                <BookCard :book="book" />
            </Slide>
            <template #addons>
                <navigation />
                <pagination />
            </template>
        </Carousel>
    </section>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import BookCard from './BookCard.vue'
export default {
    name: 'BookSlider',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
        BookCard,
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        books: {
            type: Array,
            default: () => [
            ]
        },
        subtitle: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            settings: {
                itemsToShow: 5,
                snapAlign: 'center',   
            },
            breakpoints: {
                100: {
                    itemsToShow: 1,
                    snapAlign: 'center',
                },
                1024: {
                    itemsToShow: 5,
                    snapAlign: 'center',
                },
            },
        }
    },
    methods: {
    }
}
</script>

<style scoped>
    h1 {
        color: #fff;
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }
    p {
        color: #ccc;
        font-style: italic;
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 1rem;
    }
</style>