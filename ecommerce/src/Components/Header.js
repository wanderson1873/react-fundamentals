import { NavLink } from 'react-router-dom'
import style from './Header.module.css'

const Header = () => {
   return (
      <nav className={style.header}>
         <ul>
            <li>
               <NavLink
               activeClassName={style.active} className={style.link} to="/" end>
                  Produtos
               </NavLink>
            </li>
            <li>
               <NavLink 
               activeClassName={style.active} className={style.link} to="/contato">
                  Contato
               </NavLink>
            </li>
         </ul>
      </nav>
   )
}

export default Header
