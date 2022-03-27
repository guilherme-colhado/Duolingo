/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.css'
import laptop from '../../img/laptop.png'
import fogo from '../../img/fogo.svg'
import check from '../../img/check.svg'
import coroa from '../../img/coroa.svg'
import divertido from '../../img/divertido.svg'

export default function Lista(){
    return <section className='lista'>
        <div className='celular'>
            <figure>
                <img src={laptop} alt="Laptop"/>
                <figcaption>Laptop</figcaption>
            </figure>
            <h2>Coisas que vão fazer você amar o Duolingo</h2>
            <ul>
                <li>
                    <img src={fogo} alt="Fogo"/>
                    <div className='info'>
                        <h3>Eficaz e eficiente</h3>
                        <p>Os nossos cursos ensinam habilidades de leitura, escuta e fala de forma eficaz e eficiente. Confira as <a href="#">últimas pesquisas</a> sobre o assunto</p>
                    </div>
                </li>
                <li>
                    <img src={check} alt="Check"/>
                    <div className='info'>
                        <h3>Conteúdo personalizado</h3>
                        <p>Com a combinação do melhor da inteligência artificial e da ciência da linguagem, as lições são feitas sob medida para ajudar você a aprender no nível e ritmo certos.</p>
                    </div>
                </li>
                <li>
                    <img src={coroa} alt="Coroa"/>
                    <div className='info'>
                        <h3>Motivação constante</h3>
                        <p>Fica fácil criar o hábito de aprender idiomas com recursos que parecem um jogo! Pra ajudar ainda mais, temos desafios divertidos e lembretes do nosso mascote simpático, a coruja Duo.</p>
                    </div>
                </li>
                <li>
                    <img src={divertido} alt="Divertido"/>
                    <div className='info'>
                        <h3>Muita diversão!</h3>
                        <p>Aprender de verdade não precisa ser chato! Melhore as suas habilidades todos os dias com exercícios envolventes e personagens interessantes.</p>
                    </div>
                </li>
            </ul>
        </div>
        <div className='desktop'>
            <h2>Coisas que vão fazer você amar o Duolingo</h2>
            <div>
                <ul>
                    <li>
                        <img src={fogo} alt="Fogo"/>
                        <div className='info'>
                            <h3>Eficaz e eficiente</h3>
                            <p>Os nossos cursos ensinam habilidades de leitura, escuta e fala de forma eficaz e eficiente. Confira as <a href="#">últimas pesquisas</a> sobre o assunto</p>
                        </div>
                    </li>
                    <li>
                        <img src={check} alt="Check"/>
                        <div className='info'>
                            <h3>Conteúdo personalizado</h3>
                            <p>Com a combinação do melhor da inteligência artificial e da ciência da linguagem, as lições são feitas sob medida para ajudar você a aprender no nível e ritmo certos.</p>
                        </div>
                    </li>
                </ul>
                <figure>
                    <img src={laptop} alt="Laptop"/>
                    <figcaption>Laptop</figcaption>
                </figure>
                <ul>
                    <li>
                        <img src={coroa} alt="Coroa"/>
                        <div className='info'>
                            <h3>Motivação constante</h3>
                            <p>Fica fácil criar o hábito de aprender idiomas com recursos que parecem um jogo! Pra ajudar ainda mais, temos desafios divertidos e lembretes do nosso mascote simpático, a coruja Duo.</p>
                        </div>
                    </li>
                    <li>
                        <img src={divertido} alt="Divertido"/>
                        <div className='info'>
                            <h3>Muita diversão!</h3>
                            <p>Aprender de verdade não precisa ser chato! Melhore as suas habilidades todos os dias com exercícios envolventes e personagens interessantes.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>    
    </section>
}