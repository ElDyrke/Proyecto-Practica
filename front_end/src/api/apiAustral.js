import axios from 'axios';
const LOCAL = "http://127.0.0.1:8000/"
const baseURL = LOCAL

//----Usuarios--
const login = axios.create({baseURL: baseURL + 'login'})
const registro = axios.create({baseURL: baseURL + 'registrar'})
const usuario = axios.create({baseURL: baseURL + 'usuario'})

export const GetUsuario = (id) => usuario.get(`/${id}`)
export const Login = (datos) => login.post('/', datos)
export const Registrar = (datos) => registro.post('/', datos)

//----Destinos--
export const destinosApi = axios.create({baseURL: baseURL + 'destinos'}) 


//TODO: ...
