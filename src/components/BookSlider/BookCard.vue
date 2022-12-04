<template>
    <div>
        <img :src="book.cover" alt="Book cover" />
        <p>{{ book.title }}</p>
        <p>
            <small>{{ book.author }}</small>
        </p>
    </div>
</template>

<script>
export default {
    name: 'BookCard',
    props: {
        book: {
            type: Object,
            default: () => ({
                id: null,
                title: '',
                cover: '',
                author: '',
            }),
        },
    }
}
</script>

<style scoped> 
    div {
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    img {
        width: 100%;
        border-radius: 10px;
        aspect-ratio: 9/16;
        object-fit: cover;
    }
    div p {
        color: #fff;
        font-weight: 600;
        margin: 0;
        text-align: start;
    }
</style>