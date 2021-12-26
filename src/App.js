import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { url } from './config';
function App() {
  const [pet, setPet] = useState(null)

  useEffect(() => {
    const getPets = async () => {
      const pets = await axios.get(`${url}/getpets`);
      setPet(pets.data)
      console.log(pets)
    }
    getPets()
  }, [])

  if (!pet) return <div>Loading...</div>

  return (
    <div>{pet.name}</div>
  );
}

export default App;
