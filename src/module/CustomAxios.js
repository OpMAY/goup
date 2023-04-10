import axios from "axios";

const DEFAULT_SERVER_URL = 'http://3.35.219.16';
const DEFAULT_ACCESS_KEY = 'N4gdubumGsrvzFFzewu4hQ==';

export const setDefaultAxios = () => {
    console.log("setting axios defaults...");
    axios.defaults.url = DEFAULT_SERVER_URL;
    axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true;
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.common['Access-Control-Expose-Headers'] = '*';
    console.log("setting axios defaults done");
}

const authFunction = async (token, setToken) => {
    console.log('auth token setting...')
    return new Promise((resolve, reject) => {
        axios.get(DEFAULT_SERVER_URL + '/api/auth', {
            params: {
                key: DEFAULT_ACCESS_KEY
            }
        }).then((res) => {
            if (res.data.status === 'OK') {
                setToken(res.data.data.key);
                console.log('auth token set Complete')
                resolve(res)
            } else {
                reject(res)
            }
        })
    })
}

export const axiosGetFunction = async (url, params, token, setToken) => {
    const config = {};
    config.headers = {
        contentType: 'application/x-www-form-urlencoded',
        authorization: 'bearer ' + token
    }
    config.params = params;
    return new Promise((resolve, reject) => {
        axios.get(DEFAULT_SERVER_URL + url, config).then(async (res) => {
            if (res.data.status === 'UNAUTHORIZED') {
                await authFunction(token, setToken).then(() => {
                    config.headers['authorization'] = 'bearer ' + token;
                    axios.get(DEFAULT_SERVER_URL + url, config).then((res1) => {
                        console.log('response : ',res1);
                        resolve(res1)
                    })
                })
            } else if (res.data.status === 'OK') {
                console.log('request success params : ', params);
                console.log('response on GET', url, ' : ',res);
                resolve(res);
            } else {
                reject(res);
            }
        })
    })
}

export const axiosPostFunction = async (url, formData, hasFile, token, setToken) => {
    const config = {};
    config.headers = {
        contentType: 'application/x-www-form-urlencoded',
        authorization: 'bearer ' + token
    }
    if (hasFile === true) {
        config.headers.contentType = 'multipart/form-data'
    }
    console.log(config);
    return new Promise((resolve, reject) => {
        axios.post(DEFAULT_SERVER_URL + url, formData, config).then(async (res) => {
            if (res.data.status === 'UNAUTHORIZED') {
                await authFunction(token, setToken).then(() => {
                    console.log(config)
                    config.headers['authorization'] = 'bearer ' + token;
                    axios.post(DEFAULT_SERVER_URL + url, formData, config).then((res2) => {
                        console.log('response on POST', url, ' : ',res);
                        resolve(res2);
                    })
                })
            } else if (res.data.status === 'OK') {
                console.log('response on POST', url, ' : ',res);
                resolve(res);
            } else {
                reject(res);
            }
        }).catch((reject) => {
            console.log(reject);
        })
    })
}
