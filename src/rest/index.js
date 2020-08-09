import Axiso from 'axios'
import httpUri from './rest.json'


Axiso.defaults.baseURL = 'https://api.example.com';
Axiso.defaults.headers.common['Authorization'] = "AUTH_TOKEN";
Axiso.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Axiso.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
Axiso.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

const instance = Axiso.create();




let RestPlugin = {
    install: (Vue) => {
        Vue.prototype.$http_get = async function (pageName, restName, params) {
            return instance.post(httpUri[pageName][restName], { params })
        },
        Vue.prototype.$http_post = async function (pageName, restName, params) {
            return instance.post(httpUri[pageName][restName], { params })
        }
    }
}


export { RestPlugin };