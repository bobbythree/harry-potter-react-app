import { useQuery } from "@tanstack/react-query"
import List from "./List"
import Spinner from "./Spinner"


export default function SpellList() {
  const { data, isPending, refetch, error } = useQuery({
    queryKey: ["spells"],
    queryFn: getSpells
  });

  if (error) {
    return <p>Error: {error.message}</p>; // Display error message
  }

  if (isPending) {
      return <Spinner />
    }

  return (
    <div className="flex flex-col items-center content-center text-center font-primary">
      <div className="collapse collapse-arrow bg-base-100 border border-base-300 w-1/2">
        <input type="checkbox" />
        <div className="collapse-title font-semibold">Spells</div>
        <div className="collapse-content text-sm grid grid-cols-2 text-start place-items-center">
          {data && data.map((spell, index) => (
            <List key={index}>
              <li className="list-row h-30 bg-base-300">
                <div>
                  <div className="text-secondary text-lg">{spell.spell}</div>
                </div>
                <p className="list-col-wrap text-xs">{spell.use}</p>
                </li>
            </List>
          ))}      
        </div>
      </div>
    
    </div>
  );
}

//funcs
const getSpells = async () => {
  const response = await fetch('https://potterapi-fedeperin.vercel.app/en/spells');
  const data = await response.json();
  return data;
}
