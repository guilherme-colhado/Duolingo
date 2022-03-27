/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.css'
import viajante from '../../img/viajante.png'
import google from '../../img/google.png'
import ios from '../../img/ios.png'

export default function OndeQuando() {
    return <section className='ondeQuando'>        
        <figure>
            <img src={viajante} alt="Viajante"/>
            <figcaption>Viajante</figcaption>
        </figure>
        <div>
            <h2>Aprenda onde e quando quiser</h2>
            <p>Use o seu tempo livre de forma mais produtiva com os aplicativos para iPhone e Android. Faça o download e entenda por que conquistamos os maiores prêmios da Apple e do Google.</p>
            <div>
                <a href="#" className='first'>
                    <div>
                        <figure>
                            <img src={ios} alt="Apple Store"/>
                            <figcaption>Apple Store</figcaption>
                        </figure>
                        <div>Baixe na <br/><span>Apple Store</span></div>
                    </div>
                </a>
                <a href="#">
                    <div>
                        <figure>
                            <img src={google} alt="Google Play"/>
                            <figcaption>Google Play</figcaption>
                        </figure>
                        <div>Baixe na <br/><span>Google Play</span></div>           
                    </div>
                </a>
            </div>
        </div>
    </section>
}