const { default: axios } = require("axios");

const apiFilmes = axios.create({
    baseURL: '/api',
})

export default apiFilmes