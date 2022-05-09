async function fetchDog() {
  const url = "https://dog.ceo/api/breeds/image/random";
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

module.exports = { fetchDog };
