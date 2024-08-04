
import React from 'react'
import './Layout.css'

const Layout: React.FC = () => {
  return (
    <div className='layout'>
        <div className='layout__container'>
            <div className='left'>
                <div>
                    <div className='title'>
                        <h1>Servicios de autolavado a domicilio</h1>
                    </div>
                    <p className='text'>Somos uno de los mejores autolavados de la ciudad, siempre ofreciendo nuestros servicios con la más alta calidad.</p>
                    <div className='btn__main'>
                        <button className='btn__general-primary'>Contratar</button>
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='backgorund__right'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Layout
