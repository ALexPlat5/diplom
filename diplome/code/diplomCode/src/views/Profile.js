import React from "react";
import img from './noImg.jpg'
import style from './css/profile.module.css'
import LoremIpsum from "react-lorem-ipsum";
import ReactStars from 'react-stars'
import Button from "./Buttons";

function Profile() {
    
    return (
        <>
            <div className={style.mainInfo}>
                <img src={img} />
                <div>
                    <h1 style={{color:'#f8f8f8d3'}}>Имя Фамилия</h1>
                    <p><span style={{color:'#f8f8f8d3',fontWeight:'bold'}}>День рождения:</span> 07-22-2024</p>
                    <p><span style={{color:'#f8f8f8d3',fontWeight:'bold'}}>Город:</span> Город</p>
                </div>
            </div>

            <div className={style.container}>
                <div className={style.contactInfo}>
                    <h2>Контактная информация</h2>
                    <p><span>Mail:</span> mail@example.com</p>
                    <p><span>Номер телефона:</span> +375 (29) 111-11-11</p>
                </div>
                <div className={style.about}>
                    <h2>О себе</h2>
                    <LoremIpsum p={1} />
                </div>
                
            </div>

            <div className={style.container}>
                <div className={style.skills}>
                    <h2>Мои скиллы</h2>
                    <div className={style.skillItem}>
                        <p>Скилл1:</p>
                        <ReactStars edit={false} size={16} value={5} />
                    </div>
                    <div className={style.skillItem}>
                        <p>Скилл2:</p>
                        <ReactStars edit={false} size={16} value={5} />
                    </div>
                    <div className={style.skillItem}>
                        <p>Скилл3:</p>
                        <ReactStars edit={false} size={16} value={5} />
                    </div>
                </div>
                <div className={style.skills}>
                    <h2>Как меня оценивают</h2>
                    <div className={style.skillItem}>
                        <p>Скилл1:</p>
                        <ReactStars edit={false} size={16} value={5} />
                    </div>
                    <div className={style.skillItem}>
                        <p>Скилл2:</p>
                        <ReactStars edit={false} size={16} value={5} />
                    </div>
                    <div className={style.skillItem}>
                        <p>Скилл3:</p>
                        <ReactStars edit={false} size={16} value={5} />
                    </div>
                    <Button className={['more']} value='Подробнее' selfStyle={{textAlign: 'start', paddingLeft: '0px'}} />
                </div>
            </div>

            <div className={style.container} style={{position:"relative"}}>
                <h2 className={style.statsH}>Статистика</h2>
                <div className={style.gamesStats}>
                    <p>Сыгранно игр</p>
                    <p>52</p>
                </div>
                <div className={style.gamesStats}>
                    <p>Организовано игр</p>
                    <p>10</p>
                </div>
                
            </div>
            <h2>Отзывы</h2>
            <div className={style.container} style={{position:"relative", backgroundColor:'#f8f8f8d3'}} >
                <div className={style.userInfo}>
                    <p>Name</p>
                    <div className={style.skillItem}>
                        <p>Оценка:</p>
                        <ReactStars edit={false} size={16} value={5} />
                    </div>
                    <p><span>Моя роль:</span>Игрок </p>
                </div>
                <div className={style.commentArea}>
                    <LoremIpsum p={1}/>
                </div>
                
            </div>
        </>
    )
}

export default Profile
