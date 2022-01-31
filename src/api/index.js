const API = {
  rovers: 'https://61e276de3050a1001768219f.mockapi.io/api/v1/rovers'
}

// Retrieve data function
const retrieveData = (url) => {
  const data = fetch(url)
  .then(response => response.json())
  .then(data => data)

  return data;
}

// Get rovers data from company database
const getRovers = () => {
  return retrieveData(API.rovers)
}

//retrieve a user from NRS using their NIN
const getRover = (id) => {
  return retrieveData(`${API.rovers}?id=${id}`)
}

// encapsulated methods
const ROVERS = {
  getRovers: getRovers,
  getRover: (id) => getRover(id)
}

export default ROVERS;
