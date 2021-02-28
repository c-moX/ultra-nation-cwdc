import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error));
  }, [])

  const handleAddCountry = (country) => {
    // console.log('Added', country);
    const newCart = [...cart, country];
    setCart(newCart);
  }

  return (
    <div className="App">
      <h2>Countries loaded: {countries.length}</h2>
      <Cart cart={cart}></Cart>

      <div>
        {
          countries.map(cntry => <Country country={cntry} addBtnHandle={handleAddCountry} key={cntry.alpha3Code}></Country>)
        }
      </div>

    </div> // App div end
  );
}

export default App;
