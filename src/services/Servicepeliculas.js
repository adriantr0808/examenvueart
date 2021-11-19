import Global from '../components/Global';
import axios from 'axios';

export default class Servicepeliculas {

    getPeliculas() {
        return new Promise(function (resolve) {
            var request = '/api/Peliculas';
            var url = Global.urlPeliculas + request;
            var pel = [];
            axios.get(url).then(res => {
                pel = res.data
                resolve(pel);
            });
        });
    }

    getPeliculasNac(id) {
        return new Promise(function (resolve) {
            var request = '/api/Peliculas/PeliculasNacionalidad/' + id;
            var url = Global.urlPeliculas + request;
            var pel = [];
            axios.get(url).then(res => {
                pel = res.data
                resolve(pel);
            });
        });
    }
    getPeliculasGen(id) {
        return new Promise(function (resolve) {
            var request = '/api/Peliculas/PeliculasGenero/' + id;
            var url = Global.urlPeliculas + request;
            var gen = [];
            axios.get(url).then(res => {
                gen = res.data
                resolve(gen);
            });
        });
    }

    deletePelicula(id) {
        return new Promise(function (resolve) {
            var request = '/api/Peliculas/' + id;
            var url = Global.urlPeliculas + request;
            axios.delete(url).then(res => {

                resolve(res);
            });
        });
    }

    updatePelicula(idpel, idgen) {
        return new Promise(function (resolve) {
            var request = '​/api/Peliculas/UpdatePeliculaGenero/' + idpel + '/' + idgen;
            var url = Global.urlPeliculas + request;
            axios.put(url).then(res => {
                resolve(res);
            });
        });
    }
}