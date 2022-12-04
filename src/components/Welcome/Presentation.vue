<template>
  <main>
    <About />
    <Promotions />
    <ForYou />
  </main>
</template>

<script>
import About from "./Presentation/About.vue";
import Promotions from "./Presentation/Promotions.vue";
import ForYou from "./Presentation/ForYou.vue";
export default {
  name: "Presentation",
  components: {
    About,
    Promotions,
    ForYou,
  },
};
</script>

<style>
main {
  background-color: #e5e5e5;
  display: grid;
  place-items: center;
}
</style>