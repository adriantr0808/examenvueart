import Global from './../components/Global';
import axios from 'axios';

export default class Servicenacionalidad {

    getNacionalidades() {
        return new Promise(function (resolve) {
            var request = '/api/Nacionalidades';
            var url = Global.urlPeliculas + request;
            var nac = [];
            axios.get(url).then(res => {
                nac = res.data
                resolve(nac);
            });
        });
    }
    getNacionalidadId(id) {
        return new Promise(function (resolve) {
            var request = '/api/Nacionalidades/' + id;
            var url = Global.urlPeliculas + request;
            var nac = [];
            axios.get(url).then(res => {
                nac = res.data
                resolve(nac);
            });
        });
    }
}