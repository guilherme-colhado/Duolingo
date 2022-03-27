/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.css'
import seta from './img/seta.png'
import estadosUnidos from './img/estados-unidos.png'
import espanha from './img/espanha.png'
import franca from './img/franca.png'
import alemanha from './img/alemanha.png'
import italia from './img/italia.png'

export default function Linguagem(){
    const paises = [{nome: 'INGLÊS', imagem: estadosUnidos},{nome: 'ESPANHOL', imagem: espanha},{nome: 'FRANCÊS', imagem: franca},{nome: 'ALEMÃO', imagem: alemanha},{nome: 'ITALIANO', imagem: italia}]
    return <section className='linguagens'>
        <div>
            <a href="#"><img src={seta} alt="Seta"className='esquerda'/></a>
            <ul>
                {paises.map((pais, index)=><li key={index}><a href="#"><img src={pais.imagem} alt={pais.nome}/>{pais.nome}</a></li>)}
            </ul>
            <a href="#"><img src={seta} alt="Seta" className='direita'/></a>
        </div>
    </section>
} 