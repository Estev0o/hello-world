import './banner.modules.css'
import circoColorido from '../../assets/circulo_colorido.png';
import minhFoto from '../../assets/dog.jpg';


function Banner() {
    return (
        <div className='banner'>
            <div className='apresentacao'>  
                <h1 className='titulo'>
                    Hello World
                </h1>

                <p className='paragrafo'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quibusdam iste, maiores dolorem ducimus, placeat veritatis odio voluptatum animi tempora ex incidunt! Vel voluptatibus exercitationem ab ipsum quaerat porro quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sit possimus explicabo pariatur optio ipsa veniam fugiat asperiores, ullam accusamus adipisci aliquid laborum, minus molestiae minima mollitia eaque esse? Obcaecati.
                </p>
            </div>

            <div className='imagens'>
                <img className='circuloColorido' src={circoColorido} aria-hidden={true}></img>

                <img className='minhaFoto' src={minhFoto} alt='Perfil'></img>
            </div>
        </div>
    )
}

export default Banner