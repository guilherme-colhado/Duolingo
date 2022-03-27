/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.css'
import plus from '../../img/plus.png'

export default function Plus(){
    return <section className='plus'>
        <figure>
            <img src={plus} alt="Plus" />
            <figcaption>Plus</figcaption>
        </figure>
        <div>
            <h2>Melhore o seu aprendizado com o Duolingo Plus</h2>
            <p>Aprender um idioma no Duolingo é totalmente grátis, mas com o Plus você pode remover os anúncios e avançar mais rápido. Experimente 14 dias de graça!</p>
            <a href="#">Saiba mais sobre o Duolingo Plus</a>
        </div>
    </section>
}