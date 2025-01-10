
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Imagen from './Imagen';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function FormEditar () {

    const { id } = useParams(); // Obtener el ID desde la URL
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');

    // Cargar los datos del usuario al montar el componente
    useEffect(() => {
        // Obtener los datos del usuario desde la API
        axios.get(`http://localhost:9000/user/${id}` )
            .then((response) => {
                const usuario = response.data;
                setNombre(usuario.nombre);
                setEmail(usuario.email);
            })
            .catch((error) => {
                console.log('Error al cargar los datos del usuario:', error);
            });
    }, [id]);

    // Manejo del envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedUser = {
            nombre,
            email,
            //password,
        };

        // Enviar los datos modificados a la API

        axios.put(`http://localhost:9000/user/editar/${id}`, updatedUser)
            .then((response) => {
                console.log('Usuario actualizado correctamente');
                // Vaciar los campos después de guardar
            setNombre('');
            setEmail('');
            //setPassword('');
            })
            .catch((error) => {
                console.log('Error al actualizar el usuario GG:', error);
            });
    };

    const handleReset = () => {
        setNombre('');
        setEmail('');
    }


    return (
        <>
        <h1 className='container mt-5 text-center'>
            Formulario de Registro
        </h1>
        <div className='d-flex container mt-5 text-center'>
            <Form className='w-75' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} 
                        placeholder="Tu nombre" 
                        required
                        />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com" 
                        required
                        />
                </Form.Group>
                <div className='d-flex justify-content-between'>
                    <Button variant="success" type="submit">Guardar Cambios+</Button>
                    <Button variant="warning" onClick={handleReset}>Limpiar Campos</Button>
                </div>
            </Form>

            <Imagen />
        </div>
        </>
    );
}

export default FormEditar;
