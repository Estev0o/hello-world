import styles from './notFound.module.css'
import erro404 from '../../assets/erro_404.png'
import BtnPrincipal from '../../componentes/btnPrincipal'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navegar = useNavigate();
    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}>Ops! Pagina nao encontrada</h1>
                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que voce estava procurando?
                </p>
                <p className={styles.paragrafo}>
                    Aguarde uns instantes e recarregue a pagina, ou volte para a pagina inicial.
                </p>

                <div 
                    className={styles.botaoContainer}
                    onClick={() => navegar(-1)}
                >
                    <BtnPrincipal tamanho='lg'>
                        Voltar
                    </BtnPrincipal>
                </div>

                <img
                    className={styles.imagemCachorro}
                    src={erro404}
                    alt='Cachorro de oculos e vestido como humano'

                >

                </img>
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>

    )
}

export default NotFound