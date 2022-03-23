
const fetchCryto = async () => {
  const urlCryto = "https://api.coincap.io/v2/assets";

  const coins = await fetch(urlCryto)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  return coins;
};

const setCoins = async () => {
  const coins = await fetchCryto();

    const coinsList = document.getElementById("coin-list");

  coins
    .filter((coin) => Number(coin.rank) <= 10)
    .forEach((coin) => {
      const newLi = document.createElement('li');
      const usdPrice = Number(coin.priceUsd);

      newLi.innerHTML = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`

      coinsList.appendChild(newLi);
    });

};

window.onload => () = setCoins();

/* window.onload = () => setCoins(); */

/* document.getElementById('jokeContainer').innerHTML = data.joke; */
