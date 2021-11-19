<template>
  <div class="container">
    <h1 class="m-4">Peliculas</h1>
    <router-link to="/" class="btn btn-danger">Volver</router-link>
    <div v-if="this.detalles.length == 0">
      <p>No hoy detalles seleccionado</p>
    </div>
    <div class="m-4" v-if="this.detalles.length != 0">
      <h1>Detalles</h1>
      <div class="card text-center mb-3" style="width: 18rem">
        <img :src="this.detalles.foto" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ this.detalles.titulo }}</h5>
          <p v-if="this.nac" class="card-text">
            {{ this.nac.nombre }}
          </p>
          <p v-if="this.gen">
            {{ this.gen.nombre }}
          </p>
          <a href="#" class="btn btn-danger">Youtube</a>
        </div>
      </div>
    </div>
    <div v-if="!peliculas">
      <p>loading...</p>
    </div>
    <div v-else>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Foto</th>
            <th>Fecha de estreno</th>
            <th>Detalles</th>

            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(p, index) in peliculas" :key="index">
            <td>{{ p.titulo }}</td>
            <td><img :src="p.foto" width="150px" /></td>
            <td>{{ p.fechaEstreno }}</td>
            <td>
              <DetallesPelicula
                :p="p"
                v-on:seleccionarDetallesParent="seleccionarDetallesParent"
              />
            </td>

            <td>
              <button
                data-bs-toggle="modal"
                v-bind:data-bs-target="'#p' + p.idPelicula"
                class="btn btn-danger"
              >
                Eliminar
              </button>
            </td>

            <div
              class="modal"
              v-bind:id="'p' + p.idPelicula"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title text-dark">Eliminar Pelicula</h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body text-dark">
                    <p>¿Estas seguro de que quieres eliminar esta pelicula?</p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-bs-dismiss="modal"
                      @click="eliminarPelicula(p.idPelicula)"
                    >
                      Eliminar
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Servicepeliculas from "./../../services/Servicepeliculas";
import DetallesPelicula from "./DetallesPelicula.vue";
import ServiceNacionalidad from "./../../services/Servicenacionalidad";
import Servicegeneros from "./../../services/Servicegeneros";
const service = new Servicepeliculas();
const service1 = new ServiceNacionalidad();
const service2 = new Servicegeneros();
export default {
  components: { DetallesPelicula },
  name: "Peliculas",
  data() {
    return {
      idNac: 0,
      idGen: 0,
      peliculas: [],
      detalles: [],
      nac: [],
      gen: [],
    };
  },
  mounted() {
    if (this.$route.params.idNac) {
      this.idNac = this.$route.params.idNac;
      this.cargarPeliculasNac(this.idNac);
      this.cargarNacionalidad(this.idNac);
    } else if (this.$route.params.idGen) {
      this.idGen = this.$route.params.idGen;
      this.cargarPeliculasGen(this.idGen);
      this.cargarGenero(this.idGen);
    }
  },
  watch: {
    "$route.params.idNac"(nextVal, prevVal) {
      if (nextVal != prevVal) {
        this.idNac = this.$route.params.idNac;
        if (this.idNac) {
          this.detalles = [];
          this.nac = [];
          this.gen = [];
          this.cargarPeliculasNac(this.idNac);
          this.cargarNacionalidad(this.idNac);
        }
      }
    },
    "$route.params.idGen"(nextVal, prevVal) {
      if (nextVal != prevVal) {
        this.idGen = this.$route.params.idGen;
        if (this.idGen) {
          this.nac = [];
          this.gen = [];
          this.cargarPeliculasGen(this.idGen);
          this.cargarGenero(this.idGen);
          this.detalles = [];
        }
      }
    },
  },

  methods: {
    cargarPeliculasNac(id) {
      service.getPeliculasNac(id).then((res) => {
        this.peliculas = res;
      });
    },

    cargarPeliculasGen(id) {
      service.getPeliculasGen(id).then((res) => {
        this.peliculas = res;
      });
    },

    seleccionarDetallesParent(pel) {
      this.detalles = pel;
    },

    cargarNacionalidad(id) {
      service1.getNacionalidadId(id).then((res) => {
        this.nac = res;
      });
    },
    cargarGenero(id) {
      service2.getGeneroId(id).then((res) => {
        this.gen = res;
        console.log(this.gen);
      });
    },

    eliminarPelicula(id) {
      service.deletePelicula(id).then((res) => {
        console.log(res);
        this.$router.go();
      });
    },
  },
};
</script>

<style>
</style>