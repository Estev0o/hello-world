import "./inicio.modules.css";
import Post from "../../componentes/postCard";
import posts from '../../assets/json/posts.json'

function Inicio() {
    return (
            <ul className="posts">
                {posts.map((posts) => (
                    <li key={posts.id}> 
                        <Post post={posts}/>
                    </li>
                ) )}
            </ul>
    )
}

export default Inicio