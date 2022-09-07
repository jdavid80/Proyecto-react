import React, { Component } from 'react';
import './Productos.css';

const list = [
    {
        id: 1,
        descripcion: 'PC Samsung',
        precio: 2800000,
    },
    {
        id: 2,
        descripcion: 'PC Asus',
        precio: 2300000,
    }
];

class Productos extends Component {
    render() {
        return(
            <div>
                <h2 className="title-style">Lista de Productos</h2>
                <div className='table-style'>
                    <table>
                        <tr>
                            <th>Descripción</th>
                            <th>Precio</th>
                        </tr>
                            {
                                list.map(function(item) {
                                    return(
                                        <tr>
                                            <td>
                                                {item.descripcion}
                                            </td>
                                            <td>
                                                {item.precio}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                    </table>
                </div>
            </div>
        ); 
    }
}

export default Productos;