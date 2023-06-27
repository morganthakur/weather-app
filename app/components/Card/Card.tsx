import React from 'react'
import styles from '../../page.module.css'
import { IconType } from "react-icons";




export interface MainEntity {
  title: string;
  icon: IconType;
  data: number;
}



type Props = {}

const Card: React.FC<MainEntity> = (data) => {
 
    
  return (
    <div className={styles.card}>
      <h1>{data.title} </h1>

     
    </div>
  );
};

export default Card