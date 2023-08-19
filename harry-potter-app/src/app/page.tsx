"use client"
import  CharacterCard from '@/components/CharacterCard';
import { useState, useEffect } from 'react'
import { fetchCharacters } from '@/utils/api';


export default function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters()
      setCharacters(data)
    }

    getCharacters();
  }, []);

  
  
  return (
    <main>
      <div className='container text-center mt-10'>
        <h1 className='text-3xl font-bold underline'>
         Characters
        </h1>
        <div className="grid gap-4">
        <CharacterCard />
        </div>
      </div>
    </main>
  );
}
