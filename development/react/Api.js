import axios from 'axios';
import env from '../../env';


class Api {
  constructor() {
    this.token = localStorage.getItem('token');
    this.host = env.api;
  }

  buildUrl(path){
    return `${ this.host }${ path }`
  }

  config() {
    return {
      headers: {
        token: this.token
      }
    };
  }

  doGet(edge, params) {
    var url = this.buildUrl(edge);
    var config = this.config();
    config.params = params;
    return axios.get(url, config)
      .then(result => result.data)
      .catch(err => {
        throw {
          message: errorTranslator.translate(err.response)
        };
      });
  }

  chanelList(params){
    return this.doGet('/channels', params);
  }
  playList(params){
      return this.doGet('/playlistItems', params);
  }
  videoList(params){
      return this.doGet('/videos',params);
  }
}
module.exports = Api;
