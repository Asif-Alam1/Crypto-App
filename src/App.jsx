import axios from "axios";
import Coin from "./Coin";
import { useEffect, useState } from "react";
function App() {
	const URL =
		"https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false";
	const [coins, setCoins] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		fetchCoins();
	}, []);

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const filteredCoins = coins.filter((coin) =>
		coin.name.toLowerCase().includes(search.toLowerCase())
	);

	const fetchCoins = async () => {
		const response = await axios.get(URL);
		const data = response.data;
		setCoins(data);
		console.log(data);
	};

	return (
		<>
			<h1 className="Title">Crypto Prices</h1>
			<form action="">
				<input
					type="text"
					className="coin-input"
					placeholder="Provide the coin name"
					onChange={handleChange}
				/>
			</form>
			<div className="coin-list">
				{filteredCoins.map((coin) => {
					return (
						<Coin
							key={coin.id}
							name={coin.name}
							image={coin.image}
							symbol={coin.symbol}
							price={coin.current_price}
							volume={coin.total_volume}
							priceChange={coin.price_change_percentage_24h}
							marketCap={coin.market_cap}
						/>
					);
				})}
			</div>
		</>
	);
}

export default App;
