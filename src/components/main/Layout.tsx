
import './Layout.css'
import React from 'react';
import { storeMian } from '../../zustand/store';

const Layout: React.FC = () => {

    const setVariationMain = storeMian(state => state.setVariationMain)

    const handleScrollToCard = () => {
        setVariationMain('card')
     
    };
  

  return (
    <div className='layout'>
        <div className='layout__container'>
            <div className='left'>
                <div>
                    <div className='title'>
                        <h1>Lavamos tu coche en la puerta de tu casa</h1>
                    </div>
                    <p className='text'>Porque sabemos que estás harto de que te dejen plantado o no te contesten, llegamos para darte el servicio más puntual y con la mejor calidad.</p>
                    <div className='btn__main'>
                        <button className='btn__general-primary' onClick={handleScrollToCard}>Ya no quiero que me rayen el auto, agendar</button>
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
