import './App.css';
import Logo from './components/logo';
import Principal from './components/principal';
import Linguagem from './components/linguagens';
import Main from './components/main';
import LinguagensFooter from './components/linguagensFooter';
import ListaFooter from './components/listaFooter';
import AprendaConosco from './components/aprendaConosco';

function App() {
  return (
    <div className="App">
      <Logo/>
      <header className="App-header">
        <Principal/>
        <Linguagem/>
      </header>
      <Main/>
      <footer className='App-Footer'>
        <AprendaConosco/>
        <section className='listas'>
          <ListaFooter props={[{titulo:'Quem somos', lista:['Cursos','Missão','Método','Eficácia','Equipe','Pesquisa','Incubadora','Carreiras','Guia da marca','Imprensa','Investidores','Entre em contato']}]} />
          <ListaFooter props={[{titulo:'Produtos', lista:['Duolingo','Duolingo for Schools','Duolingo English Test','Podcast','Histórias','Dicionário']}]} />
          <ListaFooter props={[{titulo:'Aplicativos', lista:['Duolingo para Android','Duolingo para iOS']}]} />
          <ListaFooter props={[{titulo:'Ajuda e suporte', lista:['Dúvidas: Duolingo','Dúvidas: Escolas','Dúvidas: Duolingo English Test','Status']}]} />
          <ListaFooter props={[{titulo:'Termos e privacidade', lista:['Normas da comunidade','Termos de uso','Privacidade']},{titulo:'Social', lista:['Blog','Instagram','Facebook','Twitter','YouTube']}]} />
        </section>
        <LinguagensFooter/>
      </footer>
    </div>
  );
}

export default App;
