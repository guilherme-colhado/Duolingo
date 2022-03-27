/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.css'
import grafico from '../../img/grafico.png'

export default function Grafico(){
    return <section className='grafico'>
        <figure>
            <img src={grafico} alt="Grafico"/>
            <figcaption>Grafico</figcaption>
        </figure>
        <div>
            <h2>Cursos eficazes e eficientes</h2>
            <p>Os nossos cursos ensinam habilidades de leitura, escuta e fala de forma eficaz e eficiente. Confira as últimas pesquisas sobre o assunto!</p>
            <a href="#">Saiba mais sobre as nossas pesquisas</a>
        </div>
    </section>
}