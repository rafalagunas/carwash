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
                    <p className='title'>Nustros servicios</p>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width='25' viewBox="0 0 512 512"><path fill="#74C0FC" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                        </div>
                        Tiempo
                    </div>
                    <div className='item__service'>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width='28' fill='1d3557' viewBox="0 0 576 512"><path d="M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z"/></svg>
                        </div>
                        Limpieza
                    </div>
                    <div className='item__service'>
                        <div>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-premium-rights"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M13.867 9.75c-.246 -.48 -.708 -.769 -1.2 -.75h-1.334c-.736 0 -1.333 .67 -1.333 1.5c0 .827 .597 1.499 1.333 1.499h1.334c.736 0 1.333 .671 1.333 1.5c0 .828 -.597 1.499 -1.333 1.499h-1.334c-.492 .019 -.954 -.27 -1.2 -.75" /><path d="M12 7v2" /><path d="M12 15v2" /></svg>
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
