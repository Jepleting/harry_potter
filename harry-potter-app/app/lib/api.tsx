import { useQuery } from 'react-query'
import axios from 'axios'

export interface Character {
  id: string;
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: {
    wood: string;
    core: string;
    length: number;
  };
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
  // ... add other properties as needed
}


const getCharacters = async () => {
  const { data } = await axios.get('https://hp-api.onrender.com/')
  return data
}

export const useCharacters = () => {
  return useQuery('characters', getCharacters)
}
