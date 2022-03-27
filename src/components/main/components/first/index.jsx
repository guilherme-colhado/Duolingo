import './style.css'
import coruja from '../../img/coruja.png'

export default function First(){
    return <section className='first'>
        <figure>
            <img src={coruja} alt="Coruja do Duolingo"/>
            <figcaption>Coruja do Duolingo</figcaption>
        </figure>
        <div>
            <h2>A melhor maneira do mundo de aprender idiomas</h2>
            <p>Aprender com o Duolingo é divertido, e <a href="#">pesquisas comprovam que funciona mesmo!</a> Com lições rápidas e curtinhas, você ganha pontos e desbloqueia novos níveis enquanto aprende a se comunicar na vida real.</p>
        </div>
    </section>
}