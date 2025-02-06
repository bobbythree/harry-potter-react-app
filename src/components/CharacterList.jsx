import { useQuery } from "@tanstack/react-query"
import List from "./List";


export default function CharacterList() {
  const { data, isPending, refetch, error } = useQuery({
    queryKey: ["Characters"],
    queryFn: getCharacters
  });

  if (error) {
    return <p>Error: {error.message}</p>; // Display error message
  }

  return (
    <div className="flex flex-col items-center content-center">
      <div class="collapse collapse-arrow bg-base-200 border border-base-300 w-1/2 text-center">
        <input type="checkbox" />
        <div class="collapse-title font-semibold">Characters</div>
        <div class="collapse-content text-sm flex flex-col items-center text-start">
          {data && data.map((character, index) => (
            <List key={index}>
              <li className="list-row">
                <div><img className="size-12 rounded-sm" src={character.image}/></div>
                <div>
                  <div className="text-secondary text-lg">{character.fullName}</div>
                  <div className="text-primary-content">{`House: ${character.hogwartsHouse}`}</div>
                </div>
                <p className="list-col-wrap text-xs">{`Played by: ${character.interpretedBy}`}</p>
                </li>
            </List>
          ))}      
        </div>
      </div>
    
    </div>
  );
}

//funcs
const getCharacters = async () => {
  const response = await fetch('https://potterapi-fedeperin.vercel.app/en/characters')
  const data = await response.json();
  return data
}
