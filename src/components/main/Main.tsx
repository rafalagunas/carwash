import React from 'react'
import Layout from './Layout'
import CardCarousel from './CardCarousel'
import Form from './Form'
import './Main.css'


const Main: React.FC = () => {
  return (
    <div className='main'>
      <Layout />
      <div className='row__two'>
        <div className='our__title_container'>
            <p>
                <span className='our__title'>Somos un autolavado</span> que nos caracterizamos por nuestros servicios a domicilio, ofreciendo calidad y puntualidad a nuestros clientes para optimizar su tiempo.
            </p>
        </div>
        
      </div>
      <div className='row__four'>
            <div>
                <div className='title__container_our_services'>
                    <p className='title'>Nustrso servicios</p>
                </div>
                <div className='item__service_container'>
                    <div className='item__service'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width='25' viewBox="0 0 512 512"><path fill="#63E6BE" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                        </div>
                        Calidad
                    </div>
                    <div className='item__service'>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg"width='25' viewBox="0 0 512 512"><path fill="#74C0FC" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                        </div>
                        Tiempo
                    </div>
                    <div className='item__service'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
                        </div>
                        Limpieza
                    </div>
                    <div className='item__service'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
                        </div>
                        Precio
                    </div>
                </div>
            </div>
    </div>
    <div className='row__three'>
        <CardCarousel />
        {/* <div className='title__container_services__carwash'>
            <p className='title'>Nustrso servicios</p>
        </div> */}
        <div className='services__carwash'>
            
            
        </div>
    </div>
    <div className='row__five'>
        <Form />
    </div>
    </div>
  )
}

export default Main
