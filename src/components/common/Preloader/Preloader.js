import s from "./preloader.module.css";
import loading from "../../../assets/img/Rolling-1s-200px.svg";
import React from "react";


const Preloader=()=>{
    return(

        <img className={s.loading} src={loading}/>
    )
}

export default Preloader;