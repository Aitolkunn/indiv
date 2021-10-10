// // import { TextField, Button } from '@material-ui/core';
// // import React, { useContext, useState } from 'react';
// // import { adminContext } from '../contexts/AdminContext';
// // import 'date-fns'


// // const AddProduct = () => {
// //     const [instrument, setInstrument] = useState({
// //         title: "",
// //         description: "",
// //         price: "",
// //         photo: "",
// //         model: "",
// //         brand: ""
// //     // })
// //     const { createProduct } = useContext(adminContext)
// //     function handleInputs(e) {
// //         let newProduct = {
// //             ...instrument,
// //             [e.target.name]: e.target.value
// //         }
// //         setInstrument(newProduct)
// //     }
// //     return (
// //         <div>
// //             <div className="add-inputs">
// //                 <form>
// //                     <TextField value={instrument.title} id="standard-basic" label="Название" name="title" onChange={handleInputs} />
// //                     <TextField value={instrument.description} id="standard-basic" label="Описание" name="description" onChange={handleInputs} />
// //                     <TextField type="number" value={instrument.price} id="standard-basic" label="Цена книги" name="price" onChange={handleInputs} />
// //                     <TextField value={instrument.photo} id="standard-basic" label="Фото" name="photo" onChange={handleInputs} />
// //                     <TextField value={instrument.model} id="standard-basic" label="Модель" name="model" onChange={handleInputs} />
// //                     <TextField value={instrument.brand} id="standard-basic" label="Модель" name="model" onChange={handleInputs} />
                    
// //                     <Button
// //                         onClick={(e) => {
// //                             e.preventDefault()
// //                             if (
// //                                 !instrument.title.trim() ||
// //                                 !instrument.description.trim() ||
// //                                 !instrument.price.trim() ||
// //                                 !instrument.photo.trim() ||
// //                                 !instrument.model.trim() ||
// //                                 !instrument.brand.trim()
// //                             ) {
// //                                 alert("Заполните все поля")
// //                                 return
// //                             }
// //                             createProduct({
// //                                 title: instrument.title.trim(),
// //                                 description: instrument.description.trim(),
// //                                 price: instrument.price.trim(),
// //                                 photo: instrument.photo.trim(),
// //                                 model: instrument.model.trim(),
// //                                 brand: instrument.brand.trim()


// //                             })
// //                         }}
// //                         variant="outlined"
// //                         color="'transparent'"
// //                     >
// //                         Создать
// //                     </Button>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // export default AddProduct;
// import { TextField, Button } from '@material-ui/core';
// import React, { useContext, useState } from 'react';
// import { adminContext } from '../contexts/AdminContext';
// import 'date-fns'


// const AddProduct = () => {
//     const [book, setBook] = useState({
//         title: "",
//         description: "",
//         price: "",
//         photo: "",
//         author: "",
//         genres: ""
//     })
//     const { createProduct } = useContext(adminContext)
//     function handleInputs(e) {
//         let newProduct = {
//             ...book,
//             [e.target.name]: e.target.value
//         }
//         setBook(newProduct)
//     }
//     return (
//         <div>
//             <div className="add-inputs">
//                 <form>
//                     <TextField value={book.author} id="standard-basic" label="Автор книги" name="author" onChange={handleInputs} />
//                     <TextField value={book.title} id="standard-basic" label="Название книги" name="title" onChange={handleInputs} />
//                     <TextField value={book.description} id="standard-basic" label="Описание книги" name="description" onChange={handleInputs} />
//                     <TextField  value={book.price} id="standard-basic" label="Цена книги" name="price" onChange={handleInputs} />
//                     <TextField value={book.photo} id="standard-basic" label="Фото книги" name="photo" onChange={handleInputs} />
//                     <TextField value={book.genres} id="standard-basic" label="Жанр книги" name="genres" onChange={handleInputs} />
//                     <Button
//                         // onClick={(e) => {
//                             e.preventDefault()
//                             if (
//                                 !book.title.trim() ||
//                                 !book.description.trim() ||
//                                 !book.price.trim() ||
//                                 !book.photo.trim() ||
//                                 !book.author.trim() ||
//                                 !book.genres.trim()
//                             ) {
//                                 alert("Заполните все поля")
//                                 return
//                             }
//                             createProduct({
//                                 title: book.title.trim(),
//                                 description: book.description.trim(),
//                                 price: book.price.trim(),
//                                 photo: book.photo.trim(),
//                                 author: book.author.trim(),
//                                 genre: book.genres.trim()

//                             })
//                         }}
//                         variant="outlined"
//                         color="'transparent'"
//                     >
//                         Создать
//                     </Button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AddProduct;
import { TextField, Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { adminContext } from '../contexts/AdminContext';
import 'date-fns'


const AddProduct = () => {
    const [book, setBook] = useState({
        title: "",
        description: "",
        price: "",
        photo: "",
        author: "",
        genres: ""
    })
    const { createProduct } = useContext(adminContext)
    function handleInputs(e) {
        let newProduct = {
            ...book,
            [e.target.name]: e.target.value
        }
        setBook(newProduct)
    }
    return (
        <div>
            <div className="add-inputs">
                <form>
                   
                    <TextField value={book.title} id="standard-basic" label="Название" name="title" onChange={handleInputs} />
                    <TextField value={book.description} id="standard-basic" label="Описание " name="description" onChange={handleInputs} />
                    <TextField type="number" value={book.price} id="standard-basic" label="Цена " name="price" onChange={handleInputs} />
                    <TextField value={book.photo} id="standard-basic" label="Фото " name="photo" onChange={handleInputs} />
                    <TextField value={book.genres} id="standard-basic" label="Категория" name="genres" onChange={handleInputs} />
                    <Button
                        onClick={(e) => {
                            e.preventDefault()
                            if (
                                !book.title.trim() ||
                                !book.description.trim() ||
                                !book.price.trim() ||
                                !book.photo.trim() ||
                      
                                !book.genres.trim()
                            ) {
                                alert("Заполните все поля")
                                return
                            }
                            createProduct({
                                title: book.title.trim(),
                                description: book.description.trim(),
                                price: book.price.trim(),
                                photo: book.photo.trim(),
                        
                                genre: book.genres.trim()

                            })
                        }}
                        variant="outlined"
                        color="'transparent'"
                    >
                        Создать
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;