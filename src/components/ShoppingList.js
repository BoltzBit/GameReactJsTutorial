import React from 'react';

//este codigo é apenas um teste;
class ShoppingList extends React.Component{
    render(){
        return (
            <div className="shopping-list">
                <h1>Lista de Compras para {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Twiter</li>
                </ul>
            </div>
        );
    }
}

//para conseguir exportar uma classe em react é necessário colocar o metodo render e o retorno dele
export default ShoppingList;
