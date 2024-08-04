import React, { useEffect, useRef, useState } from 'react'
import './Form.css'
import typesServices from '../../utils/form/typeServices.json'
import typeCar from '../../utils/form/TypeOfCar.json'
import { Toaster, toast } from 'sonner'
import { storeMian } from '../../zustand/store';
import { useStore } from 'zustand';

import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";

const Form: React.FC = () => {

    const { variationMain }: any = useStore(storeMian);
    const carouselRef = useRef<HTMLDivElement>(null);
  
    const setVariationMain = storeMian(state => state.setVariationMain)
  
    const smoothScrollTo = (element: HTMLElement, duration: number) => {
        const start = window.scrollY;
        const end = element.getBoundingClientRect().top + window.scrollY;
        const distance = end - start;
        let startTime: number | null = null;
      
        const animation = (currentTime: number) => {
          if (startTime === null) startTime = currentTime;
          const progress = currentTime - startTime;
          const percentage = Math.min(progress / duration, 1);
          window.scrollTo(0, start + distance * percentage);
          if (progress < duration) {
            requestAnimationFrame(animation);
          }
        };
      
        requestAnimationFrame(animation);
      };
      
      // En tu useEffect
      useEffect(() => {
        if (variationMain === 'form' && carouselRef.current) {
          smoothScrollTo(carouselRef.current, 1000); // 1000 ms = 1 segundo
        }
        setVariationMain('');
      }, [variationMain]);

    const [date, setDate] = useState<Date | null>(null);
    const [selectTypeServices, setSelectTypeServices] = useState<boolean>(false)
    const [selectedTypeService, setSelectedTypeService] = useState<number | null>(null)
    const [selectTypeCar, setSelectTypeCar] = useState<boolean>(false)
    const [selectedTypeCar, setSelectedTypeCar] = useState<number | null>(null)

    const openSelectTypeServices = () => {
        setSelectTypeServices(!selectTypeServices)
    }
    
    const handleTypeServicesChange = (item: any) => {
        setSelectedTypeService(item.id)
        setSelectTypeServices(false)
    }

    const openSelectTypeCar = () => {
        setSelectTypeCar(!selectTypeCar)
    }
    
    const handleTypeCarChange = (item: any) => {
        setSelectedTypeCar(item.id)
        setSelectTypeCar(false)
    }

    const onFinish = (values: any) => {
        // Construir el mensaje para WhatsApp
        const message = `
          Nuevo pedido de servicio de lavado de autos:
    
          Nombre: ${values.name}
          Teléfono: ${values.phone}
          Dirección: ${values.address}
          Tipo de Auto: ${values.carType}
          Tipo de Servicio: ${values.serviceType}
          Fecha y Hora: ${values.date ? values.date.toLocaleString() : ''}
        `;
    
        // URL codificada para WhatsApp API
        const encodedMessage = encodeURIComponent(message);
        const phoneNumber = "+529997398698"; // Reemplaza con tu número de WhatsApp
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    
        // Abrir enlace en una nueva pestaña
        window.open(url, "_blank");
    
        // Limpiar el formulario y mostrar una notificación
        toast.success('Formulario enviado correctamente')
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Evita el comportamiento predeterminado del formulario
        
        // Recolectar datos del formulario usando FormData
        const formData = new FormData(e.currentTarget);
        const values = {
            name: formData.get('name') as string,
            phone: formData.get('phone') as string,
            address: formData.get('address') as string,
            carType: selectedTypeCar,
            serviceType: selectedTypeService,
            date: date
        };
        onFinish(values);
    };
    
    return (
        <form className='form__carwash' onSubmit={handleSubmit}>
            <Toaster position="top-right" richColors />
            <div className='form__carwash_container'  ref={carouselRef}>
                <div>
                    <label className='label__general'>Nombre Completo</label>
                    <input className='inputs__general' type="text" name="name" placeholder='Ingresa tu nombre completo' />
                </div>
                <div>
                    <label className='label__general'>Teléfono</label>
                    <input className='inputs__general' type="text" name="phone" placeholder='Ingresa tu numero telefonico' />
                </div>
                <div>
                    <label className='label__general'>Fraccionamiento, Calle y Casa</label>
                    <input className='inputs__general' type="text" name="address" placeholder='Ingresa la dirección' />
                </div>
                <div>
                    <div className='select__container'>
                        <label className='label__general'>Tipo de servicio</label>
                        <div className={`select-btn__general`}>
                            <div className={`select-btn ${selectTypeServices ? 'active' : ''}`} onClick={openSelectTypeServices}>
                                <div className='select__container_title'>
                                    <p>{selectedTypeService ? typesServices.find((s: { id: number }) => s.id === selectedTypeService)?.name : 'Selecciona'}</p>
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
                                    <p>{selectedTypeCar ? typeCar.find((s: { id: number }) => s.id === selectedTypeCar)?.name : 'Selecciona'}</p>
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
                        placeholder='Selecciona tu fecha'
                        data-enable-time
                        value={date ? [date] : []}
                        onChange={([date]) => setDate(date)}
                    />
                </div>
            </div>
            <div className='btn__from_container'>
                <button type='submit' className='btn__general-primary'>Enviar</button>
            </div>
        </form>
    )
}

export default Form
