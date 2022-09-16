import "./styles.css";

export default function App() {
  
  const 
  
  async function checkBtcPrice() {
    
    const response = await fetch(
      `  https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false
`
    );
    setJsonData(await response.json());
    console.log(jsonData);
  }
  const checkBtcPrice()=>{
    
  }
  let price=20000
  
  return (
    <div className="App">
      <h1>Bitcoins Price</h1>
      <button onClick={()=>{checkBtcPrice}}>Check BTC's Price</button>
      <h2>The price of BTC is {price}</h2>
    </div>
  );
}
