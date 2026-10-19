const { createApp, ref } = Vue;

const app = createApp({
  /* template: `
    <h1>{{message}}</h1>
    <p>{{product}}</p>
  `, */

  setup() {
    const message = ref("No es el cliente");
    const product = ref("chocolates");

    const changeName = () => {
      message.value = "Si es cliente";
      product.value = "Bombones";
    };

    /* setTimeout(() => {
      message.value = "Si es cliente";
      product.value = "Bombones";
    }, 1000);
    */

    return {
      message,
      product,
      changeName,
    };
  },
});

app.mount("#miApp");
