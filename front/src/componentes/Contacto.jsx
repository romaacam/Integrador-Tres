
import '../css/App.css';


import React, { useState } from 'react';

const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        comentarios: '',
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validate = () => {
        const newErrors = {};
        if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio.';
        if (!formData.email.trim() || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
            newErrors.email = 'El email es obligatorio y debe tener un formato válido.';
        if (!formData.comentarios.trim()) newErrors.comentarios = 'Los comentarios son obligatorios.';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSuccessMessage('');
        } else {
            // Aquí puedes enviar la información, por ejemplo, a un backend o API
            console.log('Datos enviados:', formData);

            // Limpiar el formulario y mostrar mensaje de éxito
            setFormData({
                nombre: '',
                email: '',
                comentarios: '',
            });
            setErrors({});
            setSuccessMessage('Mensaje enviado correctamente.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <form className="contacto-form" onSubmit={handleSubmit}>
            <h1>Contacto</h1>
            {successMessage && <p className="success">{successMessage}</p>}
            <div>
                <label>Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                />
                {errors.nombre && <p className="error">{errors.nombre}</p>}
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
                <label>Comentarios</label>
                <textarea
                    name="comentarios"
                    value={formData.comentarios}
                    onChange={handleChange}
                ></textarea>
                {errors.comentarios && <p className="error">{errors.comentarios}</p>}
            </div>
            <button type="submit" className='botonFormulario'>Enviar</button>
        </form>
    );
};

export default Contacto;
