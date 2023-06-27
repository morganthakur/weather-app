import axios, { AxiosResponse } from "axios";
import { Weather } from "@/interfaces/weather";
const BASEURL = process.env.BASE_URL;
const apiKey = process.env.API_KEY;
const weatherIconURL = "https://openweathermap.org/img/wn/10d@2x.png";



const weatherApi = axios.create({
    baseURL:BASEURL
})

const getWeatherDetails = async (city:string): Promise<AxiosResponse<Weather>> => {
   const response = await weatherApi.get<Weather>(
     `?q=${city}&appid=${apiKey}`
   );
   return response
}


export default getWeatherDetails

