import React from 'react';

const Cart = (props) => {
    console.log(props);
    const cart = props.cart;
    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation = totalPopulation + country.population;
    // }
    let totalPopulation = cart.reduce( (sum, country) => sum + country.population, 0)

    return (
        <div>
            <h3>This is Cart: {cart.length}</h3>
            <p>Total Population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;