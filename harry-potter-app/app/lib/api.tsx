import { useQuery } from 'react-query'
import axios from 'axios'

const getCharacters = async () => {
  try {
    const response = await axios.get('https://hp-api.onrender.com/')
    if (response.status !== 200) {
      throw new Error('Server Error')
    }
    return response.data

  } catch (error) {
  
    // This error will be passed to the 'error' field in the 'status' object returned by `useQuery`
    throw new Error('Error fetching characters: ' + (error as Error).message);
  }
}

// The query function uses the error message returned by getCharacters()
export const useCharacters = () => {
  return useQuery('characters', getCharacters)
}