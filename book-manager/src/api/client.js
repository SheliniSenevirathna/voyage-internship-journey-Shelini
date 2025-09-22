import axios from 'axios'


const api = axios.create({
baseURL: '/api', // adjust if your backend base path differs
headers: {
'Content-Type': 'application/json',
},
})


export default api