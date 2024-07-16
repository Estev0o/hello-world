import { Route, Routes, useParams } from "react-router-dom"
import posts from '../../assets/json/posts.json'
import PostModelo from "../../componentes/postModelo";
import ReactMarkdown from 'react-markdown'
import './post.css'
import NotFound from "../NotFound";
import PaginaPadrao from "../../componentes/paginaPadrao";
import styles from './post.module.css'
import PostCard from "../../componentes/postCard";

export default function Post() {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if (!post) {
        return (
            <NotFound></NotFound>
        )
    }

    const seeMore = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a,b) => b.id - a.id)
        .slice(0,4);

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element=
                {   <PostModelo
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className="post-markdown-container">

                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>

                        </div>

                        <h2 className={styles.tituloOutrosPosts}>Outros posts que vc pode gostar:</h2>
                        
                        <ul className={styles.postsRecomendados}>
                            {seeMore.map((post) => (
                                <li key={post.id}>
                                    <PostCard post={post}/>
                                </li>
                            ))}
                        </ul>

                    </PostModelo>
                }>

                </Route>
            </Route>

        </Routes>

    )
}