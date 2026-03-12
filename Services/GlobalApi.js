import axios from "axios";
//import { EmailAuthCredential } from "firebase/auth";

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

const AxioInstance=axios.create({
    baseURL:BASE_URL,
    headers:{
        'Authorization':"Bearer "+API_KEY
    }
})


const getSlider=()=>AxioInstance.get("/sliders?populate=*");

const getTopRatedDocs=()=>AxioInstance.get("/mydocs?populate=*")

const createAppointment=(data)=>AxioInstance.post(
    "/appointments",data
)

const getUserAppointments=()=>AxioInstance.get("/appointments?populate=*")

export default{
    getSlider,
    getTopRatedDocs,
    createAppointment,
    getUserAppointments
}