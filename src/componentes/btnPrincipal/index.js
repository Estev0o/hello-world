import { Children } from 'react'
import styles from './btnPrincipal.module.css'

function BtnPrincipal({children, tamanho}) {
    return (
        <button className={`
            ${styles.btnPrincipal} 
            ${styles[tamanho]}
        `}>
            {children}
        </button>
    )
}

export default BtnPrincipal