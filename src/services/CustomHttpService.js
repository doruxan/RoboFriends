import axios from "axios";
// import { getAccessToken } from "../services/storage";

export default class CustomHttpService {
  config;
  token;

  setConfig = config => {
    this.config = config;
  };

  setToken = token => {
    this.token = token;
  };

  fetch = async options => {
    let fullApiPath = this.config.API_PATH + options.endpoint;
    let body = options.body || {};
    let method = options.method || "get";
    let headers = options.headers || {};

    let fetchOptions = {
      method,
      headers: {
        ...headers
      }
    };

    if (method == "post" || method == "put" || method == "delete") {
      fetchOptions.body = JSON.stringify(body);
    }

    if (options.pureHttpMode) {
      return this._doPureFetch(fullApiPath, fetchOptions);
    }

    return this._doFetch(fullApiPath, fetchOptions);
  };

  _doPureFetch = (fullApiPath, fetchOptions) => {
    return new Promise((resolve, reject) => {
      console.log('full api path', fullApiPath)
      console.log('full api path', fetchOptions)
      fetch(fullApiPath, fetchOptions)
        .then(res => {
          res.text().then(data => {
            console.log(res)
            if (parseInt(res.status / 100, 10) !== 2) {
              console.log('reject')
              reject({
                ...res,
                _bodyText: data
              })
            }
            else{
              console.log('resolve')
              resolve({
                ...res,
                _bodyText: data
              });}
          });
        })
        .catch(err => reject(err));
    });
  };

  _doFetch = (fullApiPath, fetchOptions) => {
    return new Promise((resolve, reject) => {
      fetch(fullApiPath, fetchOptions)
        .then(res => {
          res.json().then(data => {
            // if (!fullApiPath.includes('/login') && parseInt(res.status, 10) === 401) return NavigationService.navigate(SCREEN_NAMES.LoginScreen);
            if (parseInt(res.status / 100, 10) !== 2) {
              const { errors, error } = data;
              if (errors && Array.isArray(errors)) reject(errors.map(el => el.msg).join("\n"));
              else if (error) reject(error);
            } else resolve(data);
          });
        })
        .catch(err => reject(err));
    });
  };

  axiosPost = options => {
    let fullApiPath = `${this.config.API_PATH}${options.endpoint}`;
    let body = options.body || {};

    return axios.post(fullApiPath, body);
  };
}
