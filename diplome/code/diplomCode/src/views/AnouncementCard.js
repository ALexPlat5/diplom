import React from "react";
import style  from './css/annCard.module.css'
import img from './noImg.jpg'
import InfoItem from "./infoItem";
import Button from "./Buttons";
import { GeoAlt, CalendarDate, Clock, Cash } from 'react-bootstrap-icons';

function AnnouncCard() {
    return (
        <div className={style.card}>
            <img src={img}/>
            <div className={style.info}>
                <InfoItem icon={<CalendarDate/>} value='22-07-2024' />
                <InfoItem icon={<Clock/>} value='19:00' />
                <InfoItem icon={<GeoAlt/>} value='Адрес' />
                <InfoItem icon={<Cash/>} value='Бесплатно' />
            </div>
            <div className={style.buttons}>
                <Button className={['more']} value='Подробнее'/>
                <Button className={['positive']} value='Откликнуться'/>
            </div>
        </div>
    )
}

export default AnnouncCard
