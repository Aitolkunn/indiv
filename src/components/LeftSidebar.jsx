// import React from 'react';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
// import { useHistory } from "react-router-dom"
// import { clientContext } from '../contexts/ClientContext'
// import { Button } from '@material-ui/core';
// const LeftSidebar = () => {
//     const [price, setPrice] = React.useState('');
//     const [brand, setBrand] = React.useState('')
//     const history = useHistory()
//     const { getProducts, brands, getBrands } = React.useContext(clientContext)

//     const filterProducts = (key, value) => {
//         let search = new URLSearchParams(history.location.search)
//         search.set(key, value)
//         let url = `${history.location.pathname}?${search.toString()}`
//         history.push(url)
//         setPrice(search.get("price_lte"))
//         setBrand(search.get("brand"))
//         getProducts()
//     }

//     let search = new URLSearchParams(history.location.search)
//     React.useEffect(() => {
//         setPrice(search.get("price_lte"))
//         setBrand(search.get("brand"))
//         getBrands()
//     }, [])

//     const resetFilter = () => {
//         setPrice('')
//         setBrand('')
//         history.push('/main')
//         getProducts()
//     }

//     return (
//         <div className='left-sidebar'>
//             <FormControl component="fieldset">
//                 <FormLabel component="legend">Категория</FormLabel>
//                 <RadioGroup aria-label="gender" name="gender1" value={price} onChange={(e) => filterProducts('price_lte', e.target.value)}>
//                     <FormControlLabel value="Скрипичные" control={<Radio />} label="Скрипичные" />
//                     <FormControlLabel value="10000" control={<Radio />} label="Клавишные" />
//                     <FormControlLabel value="15000" control={<Radio />} label="Духовые" />
//                     <FormControlLabel value="20000" control={<Radio />} label="Ударные" />
//                 </RadioGroup>
//             </FormControl>
//             {/* <div>
//                 <FormControl component="fieldset">
//                     <FormLabel component="legend">Категория</FormLabel>
//                     <RadioGroup aria-label="gender" name="gender1" value={brand} onChange={(e) => filterProducts('brand', e.target.value)}>
//                         {
//                             brands.map(item => (
//                                 <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
//                             ))
//                         }
//                     </RadioGroup>
//                 </FormControl>
//             </div> */}
//             <Button onClick={resetFilter}>Reset</Button>
//         </div>
//     );
// };

// export default LeftSidebar;
import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useHistory } from "react-router-dom"
import { clientContext } from '../contexts/ClientContext'
import { Button } from '@material-ui/core';
const LeftSidebar = () => {
    const [price, setPrice] = React.useState('');
    const [genre, setGenre] = React.useState('')
    const history = useHistory()
    const { getProducts, genres, getGenre } = React.useContext(clientContext)

    const filterProducts = (key, value) => {
        let search = new URLSearchParams(history.location.search)
        search.set(key, value)
        let url = `${history.location.pathname}?${search.toString()}`
        history.push(url)
        setPrice(search.get("price_lte"))
        setGenre(search.get("genre"))
        getProducts()
    }

    let search = new URLSearchParams(history.location.search)
    React.useEffect(() => {
        setPrice(search.get("price_lte"))
        setGenre(search.get("genre"))
        getGenre()
    }, [])

    const resetFilter = () => {
        setPrice('')
        setGenre('')
        history.push('/main')
        getProducts()
    }

    return (
        <div className='left-sidebar'>
            <FormControl component="fieldset" bgColor="white">
                <FormLabel component="legend">Цена</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={price} onChange={(e) => filterProducts('price_lte', e.target.value)}>
                    <FormControlLabel value="10000" control={<Radio />} label="10000" />
                    <FormControlLabel value="50000" control={<Radio />} label="50000" />
                    <FormControlLabel value="70000" control={<Radio />} label="70000" />
                    <FormControlLabel value="150000" control={<Radio />} label="150000" />
                </RadioGroup>
            </FormControl>
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Категория</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={genre} onChange={(e) => filterProducts('genre', e.target.value)}>
                        {
                            genres.map(item => (
                                <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
                            ))
                        }
                    </RadioGroup>
                </FormControl>
            </div>
            <Button className="resetBtn" onClick={resetFilter}>Очистить</Button>
        </div>
    );
};

export default LeftSidebar;