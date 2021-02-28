import React from 'react';
import './Country.css';

const Country = (props) => {
    const { flag, name, capital, area, callingCodes, population, region } = props.country;
    const BtnHandle = props.addBtnHandle;

    return (
        <div className="country-main">
            {/* <h1>All world countries list</h1> */}
            <div className="countries-container">
                <div className="country-flag">
                    <img src={flag} alt="Country-flag" />
                </div>
                <div className="country-fixed">
                    <h3>Country: {name}</h3>
                    <h5>Capital: {capital}</h5>
                </div>
                <div className="country-detail">
                    <p>Area: {area}</p>
                    <p>Population: {population}</p>
                    <p>Calling-codes: {callingCodes}</p>
                    <p>Region: {region}</p>
                    <button onClick={ () => BtnHandle(props.country) }>add to list</button> {/* Arrow func for the passing parameter in function */}
                </div>
            </div>
        </div>
    );
};

export default Country;