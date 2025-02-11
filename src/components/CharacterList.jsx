import { useQuery } from "@tanstack/react-query"
import List from "./List"
import Spinner from "./Spinner"


export default function CharacterList() {
  const { data, isPending, refetch, error } = useQuery({
    queryKey: ["Characters"],
    queryFn: getCharacters
  });

  if (error) {
    return <p>Error: {error.message}</p>; // Display error message
  }

  if (isPending) {
      return <Spinner />
    }

  return (
    <>
    <List title="Characters">
      {data && data.map((character, index) => (
        <div key={index} className="bg-warning-content p-1 w-2/2">
          <li className="list-row bg-base-300">
            <div>
              <img className="size-12 rounded-sm mb-2" src={character.image}/>
              <div className="text-secondary text-lg">{character.fullName}</div>
              <div className="text-primary-content">{`House: ${character.hogwartsHouse}`}</div>
            </div>
            <p className="list-col-wrap text-xs">
              {character.interpretedBy ? `Played by: ${character.interpretedBy}` : 'Played by: Not Available'}
            </p>
          </li>
        </div>
        
    ))}      
    </List>
    </>    
  );
}

//funcs
const getCharacters = async () => {
  const response = await fetch('https://potterapi-fedeperin.vercel.app/en/characters');
  const data = await response.json();
  return data;
}
