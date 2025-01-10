import React, { useState, useContext } from 'react';

const Alta = () => {
    //const { addProduct } = useContext(ProductContext);
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        stock: '',
        brand: '',
        category: '',
        descriptionShort: '',
        descriptionLong: '',
        freeShipping: false,
        ageFrom: '',
        ageTo: '',
        image: '',
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio.';
        if (!formData.price || isNaN(formData.price)) newErrors.price = 'El precio debe ser un número.';
        if (!formData.stock || isNaN(formData.stock)) newErrors.stock = 'El stock debe ser un número.';
        if (!formData.brand.trim()) newErrors.brand = 'La marca es obligatoria.';
        if (!formData.category.trim()) newErrors.category = 'La categoría es obligatoria.';
        if (!formData.descriptionShort.trim()) newErrors.descriptionShort = 'La descripción corta es obligatoria.';
        if (!formData.descriptionLong.trim()) newErrors.descriptionLong = 'La descripción larga es obligatoria.';
        if (!formData.ageFrom || isNaN(formData.ageFrom)) newErrors.ageFrom = 'La edad mínima debe ser un número.';
        if (!formData.ageTo || isNaN(formData.ageTo)) newErrors.ageTo = 'La edad máxima debe ser un número.';
        if (!formData.image.trim()) newErrors.image = 'La URL de la imagen es obligatoria.';
        return newErrors;
    };


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    return (
        <form className="alta-form" >
            <h1>Alta de Producto</h1>
            {successMessage && <p className="success">{successMessage}</p>}
            <div>
                <label>Nombre</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div>
                <label>Precio</label>
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                />
                {errors.price && <p className="error">{errors.price}</p>}
            </div>
            <div>
                <label>Stock</label>
                <input
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                />
                {errors.stock && <p className="error">{errors.stock}</p>}
            </div>
            <div>
                <label>Marca</label>
                <input
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                />
                {errors.brand && <p className="error">{errors.brand}</p>}
            </div>
            <div>
                <label>Categoría</label>
                <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                />
                {errors.category && <p className="error">{errors.category}</p>}
            </div>
            <div>
                <label>Descripción Corta</label>
                <textarea
                    name="descriptionShort"
                    value={formData.descriptionShort}
                    onChange={handleChange}
                ></textarea>
                {errors.descriptionShort && <p className="error">{errors.descriptionShort}</p>}
            </div>
            <div>
                <label>Descripción Larga</label>
                <textarea
                    name="descriptionLong"
                    value={formData.descriptionLong}
                    onChange={handleChange}
                ></textarea>
                {errors.descriptionLong && <p className="error">{errors.descriptionLong}</p>}
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="freeShipping"
                        checked={formData.freeShipping}
                        onChange={handleChange}
                    />
                    Envío sin cargo
                </label>
            </div>
            <div>
                <label>Edad Desde</label>
                <input
                    type="number"
                    name="ageFrom"
                    value={formData.ageFrom}
                    onChange={handleChange}
                />
                {errors.ageFrom && <p className="error">{errors.ageFrom}</p>}
            </div>
            <div>
                <label>Edad Hasta</label>
                <input
                    type="number"
                    name="ageTo"
                    value={formData.ageTo}
                    onChange={handleChange}
                />
                {errors.ageTo && <p className="error">{errors.ageTo}</p>}
            </div>
            <div>
                <label>Imagen (URL)</label>
                <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                />
                {errors.image && <p className="error">{errors.image}</p>}
            </div>
            <button type="submit" className='botonFormulario'>Agregar Producto</button>
        </form>
    );
};

export default Alta;