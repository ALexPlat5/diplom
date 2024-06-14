import React from "react";
import style from './css/menu.module.css'
import styleButton from './css/buttons.module.css'
import { Link } from "react-router-dom";
import Button from "./Buttons";
import { Bell, Person, Megaphone, Reply, Newspaper, CheckAll, BoxArrowLeft } from 'react-bootstrap-icons';


function Menu({clickHandler}) {
    return (
        <>
            <div className={style.mainButtons}>
                <Link onClick={clickHandler} to='/myprofile' style={{width:'98%'}}>
                    <Button className={['menu']} value='Профиль' icon={<Person />}/>
                </Link>
                <Link style={{width:'97%'}} onClick={clickHandler} to='/announcement'>
                    <Button className={['menu', 'menuActive']} icon={<Newspaper/>} value='Объявления'/>
                </Link>
                <Link style={{width:'97%'}} onClick={clickHandler} to='/myresponses'>
                    <Button className={['menu']} icon={<Reply />} value='Мои отклики'/>
                </Link>
                <Link style={{width:'97%'}} onClick={clickHandler} to='/notification'>
                    <Button className={['menu']} value='Уведомления' icon={<Bell/>}/>
                </Link>
                <Link style={{width:'97%'}} onClick={clickHandler} to='/myannouncement'>
                    <Button className={['menu']} icon={<Megaphone />} value='Мои объявления'/>
                </Link>
                <Link style={{width:'97%'}} onClick={clickHandler} to='/completedgames'>
                    <Button className={['menu']} icon={<CheckAll/>} value='Завершенные игры'/>
                </Link>
            </div>
            <hr />
            <div className={style.exit}>
                <Link style={{width:'97%'}}>   
                    <Button className={['menu']} icon={<BoxArrowLeft/>} value='Выход'/>
                </Link>
            </div>
        </>
        
    )
}

export default Menu
