import s from './Header.module.css'
import a from '../../assets/img/apple.png'
const Header = ()=>{
    return(
        <div className={s.header}>

            <img  src={a} alt="" />

        </div>
    )
}

export default Header;