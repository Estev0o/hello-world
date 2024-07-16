import { NavLink } from 'react-router-dom'
import './menuLink.modules.css'

function MenuLink({children, to}) {

    return (
        <NavLink
            className={({ isActive }) => `
                ${'link'}
                ${isActive ? 'linkDestacado' : ""}
            `}
            to={to}
            end
        >
            {children}
        </NavLink>
        
    )
}

export default MenuLink