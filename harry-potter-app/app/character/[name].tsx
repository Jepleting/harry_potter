import React from 'react'
import { useRouter } from 'next/router'
import { useCharacters , Character } from '../lib/api'

function CharacterPage() {
  const router = useRouter()
  const { name } = router.query
  const { data, isError, isLoading } = useCharacters()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Oops, there was an error</div>
  }

  const character = data?.find((c: Character) => c.name === name)
  
  if (!character) {
    return <div>No character found</div>
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <p>Role: {character.role}</p>
      <p>House: {character.house}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Date of Birth: {character.dateOfBirth}</p>
      <p>Year of Birth: {character.yearOfBirth}</p>
      <p>Wizard: {character.wizard ? 'Yes' : 'No'}</p>
      <p>Ancestry: {character.ancestry}</p>
      <p>Eye Colour: {character.eyeColour}</p>
      <p>Hair Colour: {character.hairColour}</p>
      <p>Wand: {character.wand.wood} wood, {character.wand.core} core, {character.wand.length}"</p>
      <p>Patronus: {character.patronus}</p>
      <p>Hogwarts Student: {character.hogwartsStudent ? 'Yes' : 'No'}</p>
      <p>Hogwarts Staff: {character.hogwartsStaff ? 'Yes' : 'No'}</p>
      <p>Actor: {character.actor}</p>
      {/* Display more properties as needed */}
    </div>
  )
}

export default CharacterPage
