import "./styles.css";
import {useState} from "react"

export default function App() {
  
  const [price,setPrice]=useState([])
  const [pressed,setPressed]=useState(false)
  
  async function checkBtcPrice() {
    const response = await fetch(
`https://api.coingecko.com/api/v3/simple/price/?&no-cors&ids=bitcoin&vs_currencies=usd&no-cors&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false
`);
    setPrice(await response.json());
    console.log(price);
  }
    

  
  return (
    <div className="App">
      <h1>Bitcoins Price</h1>
      <button onClick={checkBtcPrice}>Check BTC's Price</button>
      <h2>The price of BTC is {price}</h2>
    </div>
  );
}
