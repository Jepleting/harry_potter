export const fetchCharacters = async () => {
  const res = await fetch('https://hp-api.onrender.com/api/characters')
  const data = await res.json()
  return data
  }

  
  export const getCharacter = async (id: string) => {
    const res = await fetch(`https://hp-api.onrender.com/api/character/:id`)
    const data = await res.json()
    return data
  }
  