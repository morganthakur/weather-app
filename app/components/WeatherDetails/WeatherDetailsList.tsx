import React from "react";
import styles from "../../page.module.css";
import Card from "../Card/Card";
import { Main } from "@/interfaces/weather";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { FiWind } from "react-icons/fi";
import { MdCompress } from "react-icons/md";

type Wind = {
  speed: number;
  deg: number;
};

type WeatherDetailsListProps = {
  data: Main | undefined;
  wind: Wind | undefined;
};

const WeatherDetailsList: React.FC<WeatherDetailsListProps> = ({
  data,
  wind,
}) => {
  const contentArr = [
    {
      title: "min temperature",
      icon: <AiOutlineArrowDown />,
      data: data?.temp_min?.toFixed(),
      unit: "°F",
    },
    {
      title: "max temperature",
      icon: <AiOutlineArrowUp />,
      data: data?.temp_max?.toFixed(),
      unit: "°F",
    },
    {
      title: "humidity",
      icon: <FiWind />,
      data: data?.humidity?.toFixed(),
      unit: "%",
    },
    {
      title: "feels like",
      icon: <MdCompress />,
      data: data?.feels_like?.toFixed(),
      unit: "°F",
    },
    {
      title: "pressure",
      icon: <MdCompress />,
      data: data?.pressure?.toFixed(),
      unit: "hPa",
    },
    {
      title: "wind speed",
      icon: <MdCompress />,
      data: wind?.speed?.toFixed(),
      unit: "mps",
    },
  ];

  return (
    <div className={styles.weatherDetailsWrapper}>
      {contentArr.map((data, index) => {
        return (
          <div className={styles.card} key={index}>
            <h2>
              {data.icon} {data.title}
            </h2>
            <h1>
              {data.data} {data.unit}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherDetailsList;
