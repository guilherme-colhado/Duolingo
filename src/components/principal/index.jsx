import './style.css'
import world from './img/world.png'

export default function Principal(){
    return <div className='principal'>
        <figure>
            <img src={world} alt="Planeta Terra"/>
            <figcaption>Planeta Terra</figcaption>
        </figure>
        <div>
            <div className='texto'><h1>O jeito grátis, divertido e eficaz de aprender um idioma!</h1></div>
            <div className='buttons'>
                <div>
                    <button>COMECE AGORA</button>
                </div>
                <div>
                    <button>JÁ TENHO UMA CONTA</button>
                </div>
            </div>
        </div>
    </div>
}