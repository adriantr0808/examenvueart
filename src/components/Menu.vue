<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Peliculas</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/home" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/modificar" class="nav-link"
              >Modificar Pelicula</router-link
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Generos
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li v-for="(g, index) in generos" :key="index">
                <router-link
                  class="dropdown-item"
                  :to="'/genero/' + g.idGenero"
                  >{{ g.nombre }}</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Peliculas
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li v-for="(n, index) in nac" :key="index">
                <router-link
                  class="dropdown-item"
                  :to="'/nac/' + n.idNacionalidad"
                  >{{ n.nombre }}<img width="50px" :src="n.bandera"
                /></router-link>
              </li>
            </ul>
          </li>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Buscar Pelicula"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Servicegeneros from "./../services/Servicegeneros";
import Servicenacionalidades from "./../services/Servicenacionalidad";
const service1 = new Servicegeneros();
const service2 = new Servicenacionalidades();
export default {
  name: "Menu",
  data() {
    return {
      generos: [],
      nac: [],
    };
  },
  mounted() {
    this.cargarGeneros();
    this.cargarNacionalidad();
  },
  methods: {
    cargarGeneros() {
      service1.getGeneros().then((res) => {
        this.generos = res;
      });
    },

    cargarNacionalidad() {
      service2.getNacionalidades().then((res) => {
        this.nac = res;
        console.log(this.nac);
      });
    },
  },
};
</script>

<style>
</style>