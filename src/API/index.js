const cohortCode = "2401-FTB-MT-WEB-PT";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortCode}`;

// const fetchAllPlayers = async () => {
//   try {
//     const response = await fetch(`${APIURL}/players`);
//     const result = await response.json();
//     if (result.error) throw result.error;
//     return result.data.players;
//   } catch (err) {
//     console.error("Uh oh, trouble fetching players!", err);
//   }
// };

// const fetchSinglePlayer = async (playerId) => {
//   try {
//     const response = await fetch(`${APIURL}/players/${playerId}`);
//     const result = await response.json();
//     if (result.error) throw result.error;
//     return result.data.player;
//   } catch (err) {
//     console.error("Uh oh, trouble fetching player!", err);
//   }
// };

// export { fetchAllPlayers, fetchSinglePlayer };

export async function fetchAllPlayers() {
  try {
    const response = await fetch(`${APIURL}/players`);
    const result = await response.json();
    return result.data.players;
  } catch (err) {
    console.error(err);
  }
}

// Function to fetch data for a single player by ID
export async function fetchSinglePlayer(playerId) {
  try {
    const response = await fetch(`${APIURL}/players/${playerId}`);
    const result = await response.json();
    return result.data.player;
  } catch (err) {
    console.error(err);
  }
}

// Function to create a new player by sending a POST request to the API
export async function createPlayer(playerObj) {
  try {
    const response = await fetch(`${APIURL}/players`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(playerObj),
    });
    const result = await response.json();
    return result.data.newPlayer;
  } catch (err) {
    console.error(err);
  }
}

// Function to delete a player by sending a DELETE request to the API
export async function delPlayer(playerId) {
  try {
    const response = await fetch(`${APIURL}/players/${playerId}`, {
      method: "DELETE",
    });
    const result = await response.json();
    console.log(result.data);
    return result.data;
  } catch (err) {
    console.error(err);
  }
}
