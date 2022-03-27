import './style.css'

export default function ListaFooter({props}){
    return <section className='ListaFooter'>
        {
            props.map((prop,index)=> {
                return <div key={index}>
                    <h3>{prop.titulo}</h3>
                    <ul>
                        {prop.lista.map((li, index)=> <li key={index}>{li}</li>)}
                    </ul>
                </div>
            })
        }
    </section>
}