import axios from 'axios';
const LOCAL = "http://127.0.0.1:8000/"
const baseURL = LOCAL

//----Usuarios--
export const iniciarSesion = axios.create({baseURL: baseURL + 'login'})
export const registro = axios.create({baseURL: baseURL + 'registrar'})
export const usuario = axios.create({baseURL: baseURL + 'usuario'})

//----Destinos--
export const destinosApi = axios.create({baseURL: baseURL + 'destinos'}) 

//----Tours--
export const viajesApi = axios.create({baseURL: baseURL + 'viajes_destino'})

//---Hoteles---
export const hotelesTour = axios.create({baseURL: baseURL + 'hoteles_viaje'})

//---Itinerario---
export const itinerario = axios.create({baseURL: baseURL + 'itinerario'})

//TODO: ...
