import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Main from "../views/Main";
import { useLocation, useNavigate } from 'react-router-dom';
import styleButton from '../views/css/buttons.module.css'
import classNames from "classnames";
import { useEffect } from "react";


export default function Root() {
    return (
        <>
            <Main> 
                <Outlet />
            </Main>
        </>
    )

}
