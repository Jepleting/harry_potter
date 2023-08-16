import React from 'react'
import { useRouter } from 'next/router'
import { useCharacters , Character } from './lib/api'


function HomePage() {
  const router = useRouter()
  const { data, isError, isLoading } = useCharacters()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Oops, there was an error</div>
  }

  return (
    <div>
      {data?.map((character: Character) => (
  <div 
    key={character.id}
    onClick={() => router.push(`/character/${character.name}`)}
  >
    <p>Name: {character.name}</p>
    <p>Date of Birth: {character.dateOfBirth}</p>
  </div>
))}
    </div>
  )
}

export default HomePage
