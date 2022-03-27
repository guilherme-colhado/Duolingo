import './style.css'
import First from './components/first'
import Separador from './components/separador'
import Lista from './components/lista-de-coisas'
import Plus from './components/plus'
import OndeQuando from './components/onde-quando'
import Escola from './components/escola'
import Teste from './components/teste/indes'
import Grafico from './components/eficaz'

export default function Main(){
    return <main className='Main-app'>
        <First/>
        <Separador/>
        <Lista/>
        <Separador/>
        <Plus/>
        <Separador/>
        <OndeQuando/>
        <Separador/>
        <Escola/>
        <Separador/>
        <Teste/>
        <Separador/>
        <Grafico/>
    </main>
}