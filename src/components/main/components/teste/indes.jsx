/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.css'
import conquista from '../../img/conquista.png'

export default function Teste(){
    return <section className='teste'>
        <figure>
            <img src={conquista} alt="Conquista"/>
            <figcaption>Conquista</figcaption>
        </figure>
        <div>
            <h2>Duolingo English Test</h2>
            <p>Conheça o teste de inglês conveniente, rápido e acessível que é aceito no mundo todo. Com a integração da inteligência artificial aos conhecimentos de ponta sobre avaliação, oferecemos autonomia para que as pessoas façam o teste no melhor local e momento para elas.</p>
            <a href="#">CERTIFIQUE O SEU INGLÊS</a>
        </div>
    </section>
}