"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {AiOutlineSearch} from 'react-icons/ai'
import getWeatherDetails from '@/api/weather';
import WeatherDetailsList from './components/WeatherDetails/WeatherDetailsList';
import { Weather } from '@/interfaces/weather';
export default function Home() {



  const [city, setcity] = useState("delhi");
  const [value, setValue] = useState("");
  const [data, setData] = useState<Weather | null>(null);

  const getWeather = async (city: string) => {
    const response = await getWeatherDetails(city);
   
    setData(response && response?.data);
  };
 

  useEffect(() => {
    getWeather(city);
  }, [city]);
  
const handleClick = ()=>{
setcity(value)
setValue(" ")
}

const handleInput = (e:any) => {
setValue(e.target.value)
  
};




const summer = {
    backgroundImage: "url('./bg-summer.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

  };
const winter = {
  backgroundImage: "url('./bg-winter.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  
};



  return (
    <main>
      <div
        className={styles.mainWrapper}
        style={
          data && data?.main?.temp-274 > 30
            ? summer
            : winter
        }
      >
        <div className={styles.inputWrapper}>
          <div className={styles.input}>
            <input
              type="text"
              placeholder="Search City"
              onChange={handleInput}
              value={value}
            />
            <button onClick={handleClick}>
              <AiOutlineSearch />{" "}
            </button>
          </div>
        </div>

        <div className={styles.cityWrapper}>
          <div className={styles.city}>
            <h1>
              {" "}
              {data?.name} ,{data?.sys.country}{" "}
            </h1>
            {data && (
              <img
                src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
                alt=""
              />
            )}
            {data && <p>{data?.weather[0].description}</p>}
          </div>
          <div className={styles.temp}>
            {data && <h1>{(data?.main?.temp - 273.15).toFixed()} °C</h1>}
          </div>
        </div>
        <WeatherDetailsList data={data?.main} wind={data?.wind} />
      </div>
    </main>
  );
}
