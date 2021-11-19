<template>
  <button @click="seleccionarDetallesHijo(p)" class="btn btn-primary">
    Detalles
  </button>
</template>

<script>
export default {
  name: "Detalles",
  methods: {
    seleccionarDetallesHijo(peli) {
      this.$emit("seleccionarDetallesParent", peli);
      console.log(peli);
    },
  },
  props: ["p"],
};
</script>

<style>
</style>