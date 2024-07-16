import { Link } from 'react-router-dom'
import './post.modules.css'
import BtnPrincipal from '../btnPrincipal'

function PostCard({ post }) {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className='post'>
                <img
                    className='capa'
                    src={`/assets/posts/${post.id}/capa.png`}>

                </img>

                <h2 className='titulos'>
                    {post.titulo}
                </h2>

                <BtnPrincipal>Ler</BtnPrincipal>
            </div>
        </Link>
    )
}

export default PostCard