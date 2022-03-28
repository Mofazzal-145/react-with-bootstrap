import React from 'react';
import Card from '../Card/Card';

const CartGroup = () => {
    const products = [
        {id:1, name:'Laptop', price:50000},
        {id:2, name:'Mobile', price:25000},
        {id:3, name:'HandSet', price: 15000}
        
    ]
    return (
        <div>
            <h2>This is card</h2>
            <div className="card-group">
                {
                    products.map(product=> <Card
                    key={product.id}
                    product={product}
                    ></Card>)
                }
 
            </div>
         </div>

       
    );
};

export default CartGroup;