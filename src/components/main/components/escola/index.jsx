/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.css'
import laptopSchools from '../../img/laptop-schools.png'

export default function Escola(){
    return <section className='escola'>
        <figure>
            <img src={laptopSchools} alt="Laptop Schools"/>
            <figcaption>Laptop Schools</figcaption>
        </figure>
        <div>
            <h2>Duolingo for Schools</h2>
            <p>Ferramentas grátis para professores que desejam ajudar os alunos a aprender idiomas no Duolingo, dentro e fora da sala de aula.</p>
            <a href="#">Leve o Duolingo para a sua sala de aula</a>
        </div>
    </section>
}