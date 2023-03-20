import axios from "axios";

const DEFAULT_SERVER_URL = 'http://3.35.219.16';
const DEFAULT_ACCESS_KEY = 'N4gdubumGsrvzFFzewu4hQ==';

export const setDefaultAxios = () => {
    console.log("setting axios defaults...");
    axios.defaults.url = DEFAULT_SERVER_URL;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    console.log("setting axios defaults done");
}

const authFunction = async (token, setToken) => {
    return axios.get('/api/auth', {
        params: {
            key: DEFAULT_ACCESS_KEY
        }
    }).then((res) => {
        if (res.data.status === 'OK') {
            setToken(res.data.data.key);
        }
    })
}

export const axiosGetFunction = async (url, token, setToken) => {
    return axios.get(url, {}).then(async (res) => {
        if (res.data.status === 'UNAUTHORIZED') {
            await authFunction(token, setToken).then(() => {
                axios.get(url, {})
            })
        }
    })
}

export const axiosPostFunction = async (url, formData, hasFile, token, setToken) => {
    const config = {};
    if(hasFile === true) {
        config.headers = {
            contentType : 'multipart/form-data'
        }
    }
    return axios.post(url, formData, config).then(async (res) => {
        if (res.data.status === 'UNAUTHORIZED') {
            await authFunction(token, setToken).then(() => {
                axios.get(url, {})
            })
        }
    })
}
