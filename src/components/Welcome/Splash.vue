<template>
  <section id="splash">
    <div id="container-welcome-message">
      <h1>{{ title }}</h1>
      <p>
        <span>{{ description }}</span>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Splash",
  data() {
    return {
      title: "Tus libros a un click",
      description:
        "Publica tus libros libremente sin restricciones, encuentra tus preferencias, conoce autores independientes y encuentra un mundo de diferentes aventuras.",
    };
  },
};
</script>

<style scoped>
section {
  background: linear-gradient(rgba(0, 0, 0, 0.633), rgba(0, 0, 0, 0.657)),
    url("../../assets/home/background-welcome.png") no-repeat right fixed;
}
#splash {
  background-color: #000;
  height: 87vh;
  padding: 2rem 12rem;
}
#container-welcome-message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-left: 10px solid blue;
  width: 70%;
  height: 100%;
}
#container-welcome-message::before {
  content: "";
  height: 100%;
  width: 41%;
  border-top: 10px solid blue;
}
#container-welcome-message::after {
  content: "";
  height: 100%;
  width: 41%;
  border-bottom: 10px solid blue;
}
#container-welcome-message h1,
#container-welcome-message p {
  margin-left: 2rem;
  color: #fff;
}
#container-welcome-message h1 {
  font-size: 5rem;
}
#container-welcome-message p {
  text-align: start;
  max-width: 50%;
  font-size: 1rem;
}
@media (max-width: 768px) {
  #splash {
    height: 50vh;
    padding: 5rem 2rem;
  }
  #container-welcome-message {
    padding: 1rem 0 0 2rem;
    width: 100%;
    height: 100%;
  }
  #container-welcome-message h1,
  #container-welcome-message p {
    margin-left: 0;
  }
  #container-welcome-message::before {
    border-top: none;
  }
  #container-welcome-message::after {
    border-bottom: none;
  }
  #container-welcome-message h1 {
    font-size: 3rem;
  }
  #container-welcome-message p {
    max-width: 100%;
    font-size: 0.8rem;
  }
}
</style>