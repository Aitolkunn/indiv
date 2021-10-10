import 'react-credit-cards/es/styles-compiled.css';
import { Container } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import Cards from 'react-credit-cards';
import { Button } from "@material-ui/core"
import { Link } from 'react-router-dom';
import { clientContext } from '../contexts/ClientContext';
const OnlinePaymentPage = () => {
    const { firstPage } = useContext(clientContext)
    const [inputs, setInputs] = useState({
        number: '',
        name: '',
        expiry: '',
        cvc: ''

    })
    // const history = useHistory()
    const handleChange = (e) => {
        let newInputs = {
            ...inputs,
            [e.target.name]: e.target.value
        }
        setInputs(newInputs)
    }
    const [focus, setFocus] = useState('')
    const handleClick = (e) => {
        e.preventDefault()
        if (
            !inputs.number.trim() ||
            !inputs.name.trim() ||
            !inputs.expiry.trim() ||
            !inputs.cvc.trim()

        ) {
            alert("Заполните все поля")
            return
        }
        alert("Ваш заказ оформлен и оплачен")
        setTimeout(() => {
            window.close('/')
        }, 2000);

    }
    return (
        <div className='cardPage'>
            <Container>
                <div className='card'>
                    <Cards
                        number={inputs.number}
                        name={inputs.name}
                        expiry={inputs.expiry}
                        cvc={inputs.cvc}
                        focused={focus}
                    />
                    <form className='card-inputs'>
                        <input

                            type="tel"
                            name='number'
                            placeholder='Card Number'
                            value={inputs.number}
                            onChange={handleChange}
                            onFocus={e => setFocus(e.target.name)} />
                        <input
                            type="text"
                            name='name'
                            placeholder='Name'
                            value={inputs.name}
                            onChange={handleChange}
                            onFocus={e => setFocus(e.target.name)} />
                        <input
                            type="text"
                            name='expiry'
                            placeholder='MM/YY Expiry'
                            value={inputs.expiry}
                            onChange={handleChange}
                            onFocus={e => setFocus(e.target.name)} />
                        <input
                            type="tel"
                            name='cvc'
                            placeholder='CVC'
                            value={inputs.cvc}
                            onChange={handleChange}
                            onFocus={e => setFocus(e.target.name)} />
                        <Button onClick={handleClick}>Оплатить</Button>
                        <Link to="/main">
                            <Button color="primary">Вернуться назад</Button>
                        </Link>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default OnlinePaymentPage;