import Global from './../components/Global';
import axios from 'axios';

export default class Servicegeneros {

    getGeneros() {
        return new Promise(function (resolve) {
            var request = '/api/Generos';
            var url = Global.urlPeliculas + request;
            var generos = [];
            axios.get(url).then(res => {
                generos = res.data
                resolve(generos);
            });
        });
    }


    getGeneroId(id) {
        return new Promise(function (resolve) {
            var request = '/api/Generos/' + id;
            var url = Global.urlPeliculas + request;
            var generos = [];
            axios.get(url).then(res => {
                generos = res.data
                resolve(generos);
            });
        });
    }
}