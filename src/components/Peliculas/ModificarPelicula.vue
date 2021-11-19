<template>
  <div class="container">
    <h1>Modificar Pelicula</h1>
    <form
      class="mt-5 p-4 border border-dark bg-warning"
      v-on:submit.prevent="actualizarPeli()"
    >
      <div class="mb-3">
        <label class="form-label">Peliculas</label>
        <select class="form-select" v-model="pelicula">
          <option v-for="(p, index) in pel" :key="index" :value="p.idPelicula">
            {{ p.titulo }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label">Generos</label>
        <select class="form-select" v-model="genero">
          <option v-for="(g, index) in gen" :key="index" :value="g.idGenero">
            {{ g.nombre }}
          </option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary">Modificar pelicula</button>
    </form>
  </div>
</template>

<script>
import Servicepeliculas from "./../../services/Servicepeliculas";
import Servicegeneros from "./../../services/Servicegeneros";
const service1 = new Servicepeliculas();
const service2 = new Servicegeneros();
export default {
  name: "ModificarPelicula",
  data() {
    return {
      pel: [],
      gen: [],
      pelicula: 0,
      genero: 0,
    };
  },

  mounted() {
    this.cargarPeliculas();
    this.cargarGeneros();
  },
  methods: {
    cargarPeliculas() {
      service1.getPeliculas().then((res) => {
        this.pel = res;
      });
    },

    cargarGeneros() {
      service2.getGeneros().then((res) => {
        this.gen = res;
      });
    },

    actualizarPeli() {
      this.pelicula = parseInt(this.pelicula);
      this.genero = parseInt(this.genero);
      service1.updatePelicula(this.pelicula, this.genero).then((res) => {
        console.log(res);
        this.$router.push("/genero/" + this.genero);
      });
    },
  },
};
</script>

<style>
</style>