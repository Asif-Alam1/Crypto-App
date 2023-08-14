import PropTypes from "prop-types";

const Coin = ({
	image,
	name,
	symbol,
	price,
	volume,
	priceChange,
	marketCap,
}) => {
	return (
		<div className="row">
			<div className="coin">
				<img src={image} alt="crypto" />
				<h1>{name}</h1>
				<p className="symbol">{symbol}</p>
				<p className="price">${price}</p>
				<p className="volume">${volume.toLocaleString()}</p>
				{priceChange < 0 ? (
					<p className="red">{priceChange}%</p>
				) : (
					<p className="green">{priceChange}%</p>
				)}
				<p className="marketcap">Mkt Cap: ${marketCap.toLocaleString()}</p>
			</div>
		</div>
	);
};

Coin.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	symbol: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	volume: PropTypes.number.isRequired,
	priceChange: PropTypes.number.isRequired,
	marketCap: PropTypes.number.isRequired,
};

export default Coin;
