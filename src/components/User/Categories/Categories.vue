<template>
    <h1 class="ps-5 pt-2">{{ CategoryTitle }}</h1>
    <BookSlider 
        :title="firstSection.title" 
        :subtitle="firstSection.subtitle" 
        :books="firstSection.books" />
    <Quotes :coverImage="quote.coverImage" :phrase="quote.phrase" :author="quote.author" />
    <BookSlider 
        :title="secondSection.title" 
        :subtitle="secondSection.subtitle" 
        :books="secondSection.books" />
    <BookSlider 
        :title="thirdSection.title" 
        :subtitle="thirdSection.subtitle" 
        :books="thirdSection.books" />
</template>

<script>
import BookSlider from '../../BookSlider/BookSlider.vue';
import Quotes from '../../Quotes/Quotes.vue';
export default {
    name: 'Categories',
    components: {
        BookSlider,
        Quotes
    },
    data() {
        return {
            CategoryTitle: 'Romance',
            firstSection: {
                title: 'Mejores clasicos venididos',
                subtitle: 'Quizá clásicos?...',
                books: [                   
                    {
                        id: 1,
                        title: 'The Hunger Games',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Suzanne Collins',
                    },
                    {
                        id: 2,
                        title: 'Harry Potter',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'J.K. Rowling',
                    },
                    {
                        id: 3,
                        title: 'To Kill a Mockingbird',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Harper Lee',
                    },
                    {
                        id: 4,
                        title: 'Pride and Prejudice',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Jane Austen',
                    },
                    {
                        id: 5,
                        title: 'Twilight',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Stephenie Meyer',
                    },
                    {
                        id: 6,
                        title: 'The Book Thief',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Markus Zusak',
                    },
                    {
                        id: 1,
                        title: 'The Hunger Games',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Suzanne Collins',
                    },
                    {
                        id: 2,
                        title: 'Harry Potter',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'J.K. Rowling',
                    },
                    {
                        id: 3,
                        title: 'To Kill a Mockingbird',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Harper Lee',
                    },
                    {
                        id: 4,
                        title: 'Pride and Prejudice',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Jane Austen',
                    },
                    {
                        id: 5,
                        title: 'Twilight',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Stephenie Meyer',
                    },
                    {
                        id: 6,
                        title: 'The Book Thief',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Markus Zusak',
                    },
                    {
                        id: 1,
                        title: 'The Hunger Games',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Suzanne Collins',
                    },
                    {
                        id: 2,
                        title: 'Harry Potter',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'J.K. Rowling',
                    },
                    {
                        id: 3,
                        title: 'To Kill a Mockingbird',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Harper Lee',
                    },
                    {
                        id: 4,
                        title: 'Pride and Prejudice',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Jane Austen',
                    },
                    {
                        id: 5,
                        title: 'Twilight',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Stephenie Meyer',
                    },
                    {
                        id: 6,
                        title: 'The Book Thief',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Markus Zusak',
                    },
                ]
            },
            secondSection: {
                title: 'Cuentos ilustrativos',
                subtitle: 'Para los niños...',
                books: [                   
                    {
                        id: 1,
                        title: 'The Hunger Games',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Suzanne Collins',
                    },
                    {
                        id: 2,
                        title: 'Harry Potter',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'J.K. Rowling',
                    },
                    {
                        id: 3,
                        title: 'To Kill a Mockingbird',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Harper Lee',
                    },
                    {
                        id: 4,
                        title: 'Pride and Prejudice',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Jane Austen',
                    },
                    {
                        id: 5,
                        title: 'Twilight',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Stephenie Meyer',
                    },
                    {
                        id: 6,
                        title: 'The Book Thief',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Markus Zusak',
                    },
                    {
                        id: 1,
                        title: 'The Hunger Games',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Suzanne Collins',
                    },
                    {
                        id: 2,
                        title: 'Harry Potter',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'J.K. Rowling',
                    },
                    {
                        id: 3,
                        title: 'To Kill a Mockingbird',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Harper Lee',
                    },
                    {
                        id: 4,
                        title: 'Pride and Prejudice',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Jane Austen',
                    },
                    {
                        id: 5,
                        title: 'Twilight',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Stephenie Meyer',
                    },
                    {
                        id: 6,
                        title: 'The Book Thief',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Markus Zusak',
                    },
                    {
                        id: 1,
                        title: 'The Hunger Games',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Suzanne Collins',
                    },
                    {
                        id: 2,
                        title: 'Harry Potter',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'J.K. Rowling',
                    },
                    {
                        id: 3,
                        title: 'To Kill a Mockingbird',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Harper Lee',
                    },
                    {
                        id: 4,
                        title: 'Pride and Prejudice',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Jane Austen',
                    },
                    {
                        id: 5,
                        title: 'Twilight',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Stephenie Meyer',
                    },
                    {
                        id: 6,
                        title: 'The Book Thief',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Markus Zusak',
                    },
                ]
            },
            thirdSection: {
                title: 'Para los enamorados',
                subtitle: 'Una amor que te consume...',
                books: [                   
                    {
                        id: 1,
                        title: 'The Hunger Games',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Suzanne Collins',
                    },
                    {
                        id: 2,
                        title: 'Harry Potter',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'J.K. Rowling',
                    },
                    {
                        id: 3,
                        title: 'To Kill a Mockingbird',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Harper Lee',
                    },
                    {
                        id: 4,
                        title: 'Pride and Prejudice',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Jane Austen',
                    },
                    {
                        id: 5,
                        title: 'Twilight',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Stephenie Meyer',
                    },
                    {
                        id: 6,
                        title: 'The Book Thief',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Markus Zusak',
                    },
                    {
                        id: 1,
                        title: 'The Hunger Games',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Suzanne Collins',
                    },
                    {
                        id: 2,
                        title: 'Harry Potter',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'J.K. Rowling',
                    },
                    {
                        id: 3,
                        title: 'To Kill a Mockingbird',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Harper Lee',
                    },
                    {
                        id: 4,
                        title: 'Pride and Prejudice',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Jane Austen',
                    },
                    {
                        id: 5,
                        title: 'Twilight',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Stephenie Meyer',
                    },
                    {
                        id: 6,
                        title: 'The Book Thief',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Markus Zusak',
                    },
                    {
                        id: 1,
                        title: 'The Hunger Games',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Suzanne Collins',
                    },
                    {
                        id: 2,
                        title: 'Harry Potter',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'J.K. Rowling',
                    },
                    {
                        id: 3,
                        title: 'To Kill a Mockingbird',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Harper Lee',
                    },
                    {
                        id: 4,
                        title: 'Pride and Prejudice',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Jane Austen',
                    },
                    {
                        id: 5,
                        title: 'Twilight',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Stephenie Meyer',
                    },
                    {
                        id: 6,
                        title: 'The Book Thief',
                        cover: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                        author: 'Markus Zusak',
                    },
                ]
            },
            quote: {
                coverImage: 'https://media.allure.com/photos/605247e1bddfa641546fa160/1:1/w_2264,h_2264,c_limit/billie%20eilish.jpg',
                phrase: 'The best way to predict the future is to invent it.',
                author: 'Alan Kay',
            }
        }
    },
    methods: {
    }
}
</script>

<style scoped>
    h1 {
        text-align: center;
        color: #fff;
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }
</style>