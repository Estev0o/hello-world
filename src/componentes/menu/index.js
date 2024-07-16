import { Link, useLocation } from 'react-router-dom';
import './menu.modules.css';
import MenuLink from '../menuLink';

function Menu() {
    return (
        <header>
            <nav className='navegacao'>
                <MenuLink to='/'>
                    Inicio
                </MenuLink>
                <MenuLink to='/sobremim'>
                    Sobre mim
                </MenuLink>
            </nav>
        </header>
    )
}

export default Menu;