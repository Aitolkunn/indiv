import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { adminContext } from '../contexts/AdminContext'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { clientContext } from '../contexts/ClientContext';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function CartTable() {
    const classes = useStyles();
    const { favorite, getFavorite, changeCountProducts} = useContext(clientContext)
    useEffect(() => {
        getFavorite()
    }, [])
    console.log(favorite)
    function handleChange(id, count) {
        if (count < 1) {
            return
        }
        changeCountProducts(count, id)
    }
    return (

        favorite ? (
            <>
                <TableContainer component={Paper} >
                    <Table className={classes.table} aria-label="caption table">
                        <caption>Ваша сумма: {favorite.totalPrice}</caption>
                        <TableHead>
                            <TableRow>
                                <TableCell>№</TableCell>
                                <TableCell align="left">Название</TableCell>
                                <TableCell align="left">Цена</TableCell>
                                <TableCell align="left">Фото</TableCell>
                                {/* <TableCell align="left">Цвета</TableCell> */}
                                <TableCell align="left">Кол-во</TableCell>
                                <TableCell align="left">Общая сумма</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {favorite.products.map((row, index) => (
                                <TableRow key={row.product.name}>
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell align="left">{row.product.title}</TableCell>
                                    <TableCell align="left">{row.product.price}</TableCell>
                                    <TableCell align="left">
                                        <img width="100" src={row.product.photo} alt="" />
                                    </TableCell>
                                    {/* <TableCell align="left">{row.product.color}</TableCell> */}
                                    <TableCell align="left">
                                        <input
                                            type="number"
                                            value={row.count}
                                            onChange={(e) => handleChange(row.product.id, e.target.value)}
                                        />
                                    </TableCell>
                                    <TableCell align="left">{row.subPrice}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className="btnPayment">
                    <Link to="/payment"><Button variant="outlined" color="secondary">Оплатить</Button></Link>
                </div>

            </>
        ) : (

            <h2>Loading...</h2>

        )


    );
}
