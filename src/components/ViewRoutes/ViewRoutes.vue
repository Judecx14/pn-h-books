<template>
    <router-view></router-view>
</template>
<script>
import NavVue from '../Nav/Nav.vue';
import FooterVue from '../Footer/Footer.vue';
export default {
    components:{
        NavVue,
        FooterVue
    }
}
</script>