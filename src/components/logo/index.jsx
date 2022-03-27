import './style.css'
import logo from './img/logo.png'
import seta from './img/seta.png'

export default function Logo(){
    return <section className='logo'>
        <figure>
            <img src={logo} alt="Duolingo" />
            <figcaption>Duolingo</figcaption>
        </figure>
        <div>
            <p>Idioma do site: Português <img src={seta} alt="Seta" /></p>
        </div>
    </section>
    
}