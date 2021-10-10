import { Button, TextField } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { adminContext } from '../contexts/AdminContext';


const EditProduct = () => {
    const { getProductToEdit, productToEdit, saveEditedProduct } = useContext(adminContext)
    const [editBook, setEditBook] = useState(productToEdit)
    const { id } = useParams()
    const history = useHistory()
    useEffect(() => {
        setEditBook(productToEdit)
    }, [productToEdit])
    useEffect(() => {
        getProductToEdit(id)
    }, [])
    const handleInputs = (e) => {
        let obj = {
            ...editBook,
            [e.target.name]: e.target.value
        }
        setEditBook(obj)
    }
    return (
        <div>
            {
                editBook ? (
                    <div className="add-inputs">
                        <form>
                            <TextField value={editBook.title} id="standard-basic" label="Название " name="title" onChange={handleInputs} />
                            <TextField value={editBook.description} id="standard-basic" label="Описание " name="description" onChange={handleInputs} />
                            <TextField value={editBook.genre} id="standard-basic" label="Категория" name="genre" onChange={handleInputs} />
                            <TextField value={editBook.price} id="standard-basic" label="Цена" name="price" onChange={handleInputs} />
                            <TextField value={editBook.photo} id="standard-basic" label="Фото " name="photo" onChange={handleInputs} />
                            
                            <Button
                                onClick={(e) => {
                                    e.preventDefault()
                                    if (
                                        !editBook.title ||
                                        !editBook.description ||
                                        !editBook.photo ||
                                        !editBook.genre ||
                                        !editBook.price ) {
                                        alert("Заполните все поля")
                                        return
                                    }
                                    saveEditedProduct(editBook)
                                    history.push('/admin')
                                }}
                                variant="outlined"
                                color="primary"
                            >
                                Сохранить изменения
                            </Button>
                        </form>
                    </div>
                ) : (
                    <h2>Loading...</h2>
                    // <Forward5Icon />
                )
            }
        </div>
    );
};

export default EditProduct;