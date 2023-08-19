import React, {FC} from 'react';
import Link from 'next/link';

interface CharacterCardProps {
  character: {
    name: string;
    dateOfBirth: string;
    
  };
 
}

const CharacterCard : FC <CharacterCardProps> = ({ character }) => {
  return (
    <Link href={`/character/${index}`} key={index} >
      <a>
        <div>{character.name}</div>
        <div>{character.dateOfBirth}</div>
      </a>
    </Link>
  );
}




  
  
    
 


//   return (
//     <div className="card w-96 bg-base-100 shadow-xl">
//     {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
//     <div className="card-body">
//       <h2 className="card-title">Shoes!</h2>
//       <p>If a dog chews shoes whose shoes does he choose?</p>
//       <div className="card-actions justify-end">
//         <button className="btn btn-primary">Buy Now</button>
//       </div>
//     </div>
//     </div>
//   )
// }

export default CharacterCard