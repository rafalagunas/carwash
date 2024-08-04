import React, { useState } from 'react'
import './Form.css'
import typesServices from '../../utils/form/typeServices.json'
import typeCar from '../../utils/form/TypeOfCar.json'

import "flatpickr/dist/themes/material_green.css";

import Flatpickr from "react-flatpickr";

const Form: React.FC = () => {

    const [date, setDate] = useState<Date | null>(null);

    const [selectTypeServices, setSelectTypeServices] = useState<boolean>(false)
    const [selectedTypeService, setSelectedTypeService] = useState<number | null>(null)

    const openSelectTypeServices = () => {
        setSelectTypeServices(!selectTypeServices)
    }
    
    const handleTypeServicesChange = (item: any) => {
        setSelectedTypeService(item.id)
        setSelectTypeServices(false)
    }

    const [selectTypeCar, setSelectTypeCar] = useState<boolean>(false)
    const [selectedTypeCar, setSelectedTypeCar] = useState<number | null>(null)

    const openSelectTypeCar = () => {
        setSelectTypeCar(!selectTypeCar)
    }
    
    const handleTypeCarChange = (item: any) => {
        setSelectedTypeCar(item.id)
        setSelectTypeCar(false)
    }


  return (
    <form className='form__carwash'>
        <div className='form__carwash_container'>
            <div>
                <label className='label__general'>Nombre Completo</label>
                <input className='inputs__general' type="text" placeholder='Ingresa tu nombre completo' />
            </div>
            <div>
                <label className='label__general'>Teléfono</label>
                <input className='inputs__general' type="text" placeholder='Ingresa tu numero telefonico' />
            </div>
            <div>
                <label className='label__general'>Fraccionamiento, Calle y Casa</label>
                <input className='inputs__general' type="text" placeholder='Ingresa la dirección' />
            </div>
            <div>
                <div className='select__container'>
                  <label className='label__general'>Tipo de servicio</label>
                  <div className={`select-btn__general`}>
                    <div className={`select-btn ${selectTypeServices ? 'active' : ''}`} onClick={openSelectTypeServices}>
                      <div className='select__container_title'>
                        <p>{selectedTypeService ? typesServices.find((s: { id: number }) => s.id == selectedTypeService)?.name : 'Selecciona'}</p>
                      </div>
                      <svg className='chevron__down' xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                      </svg>
                    </div>
                    <div className={`content ${selectTypeServices ? 'active' : ''}`}>
                      <ul className={`options ${selectTypeServices ? 'active' : ''}`} style={{ opacity: selectTypeServices ? '1' : '0' }}>
                        {typesServices.map((type: any) => (
                          <li key={type.id} onClick={() => handleTypeServicesChange(type)}>
                            {type.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
            <div>
            <div className='select__container'>
                  <label className='label__general'>Tipo de auto</label>
                  <div className={`select-btn__general`}>
                    <div className={`select-btn ${selectTypeCar ? 'active' : ''}`} onClick={openSelectTypeCar}>
                      <div className='select__container_title'>
                        <p>{selectedTypeCar ? typeCar.find((s: { id: number }) => s.id == selectedTypeCar)?.name : 'Selecciona'}</p>
                      </div>
                      <svg className='chevron__down' xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                      </svg>
                    </div>
                    <div className={`content ${selectTypeCar ? 'active' : ''}`}>
                      <ul className={`options ${selectTypeCar ? 'active' : ''}`} style={{ opacity: selectTypeCar ? '1' : '0' }}>
                        {typeCar.map((type: any) => (
                          <li key={type.id} onClick={() => handleTypeCarChange(type)}>
                            {type.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
            <div>
                <label className='label__general'>Fecha y Hora</label>
                <Flatpickr className='inputs__general'
                    placeholder='Seleciona tu fecha'
                    data-enable-time
                    value={date ? [date] : []}
                    onChange={([date]) => setDate(date)}
                />
            </div>
        </div>
        <div className='btn__from_container'>
            <button type='button' className='btn__general-primary'>Enviar</button>
        </div>
    </form>
  )
}

export default Form
