import React from "react";
import style from './css/content.module.css'
import AnnouncCard from "./AnouncementCard";
import { LoremIpsum } from 'react-lorem-ipsum';
import Button from "./Buttons";
import { Bell, Person, Search } from 'react-bootstrap-icons';

function Content({children}) {

    return (
        <div className={style.main}>
            <div className={style.mainNav}>
                <form onSubmit={(e)=>{e.preventDefault()}} style={{position:'relative', width:'10vw', height: '5vh'}}>
                    <input style={{borderRadius:'5px', position:'absolute', height:'26.5px', left:'50px'}} type="text" placeholder="Search.." name="search" />
                    <button style={{position:'absolute', left:'15px', top:'5px',color:'#f8f8f8d3', backgroundColor:'#f8f8f800', border:'none'} } type="submit"><Search /></button>
                </form>
                <Button className={['mainNav']} icon={<Bell/>} value='' selfStyle={{justifySelf:"end", marginLeft:'auto', marginRight:'20px'}}/>
                <div class={style.dropdown}>
                    <Button className={['mainNav']} value='Имя пользователя' icon={<Person size='20px'/>}></Button>
                    <div class={style.dropdownContent}>
                        <Button className={['menu']} value='Профиль'/>
                        <Button className={['menu']} value='Выйти'/>
                    </div>
                </div>
            </div>

            <div className={style.content}>
                {children}
            </div>
        </div>    
    )
}

export default Content
