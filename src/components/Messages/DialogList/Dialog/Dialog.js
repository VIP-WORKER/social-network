

import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";


const Dialog = (props)=>{
    return(
       <li className={s.item} >
           <NavLink activeClassName={s.selected} className={s.link} to={`/messages/dialog/${props.id}`} >{props.name}</NavLink>
       </li>
    );
};




export default Dialog;