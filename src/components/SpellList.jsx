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
    <>
    <List title="Spells">
      <div className="grid sm:grid-cols-2  grid-cols-1 gap-2 h-auto">
      {data && data.map((spell, index) => (
          <div key={index} className="bg-warning-content p-1 w-2/2">
          <li className="list-row h-2/2 bg-base-300">
            <div>
              <div className="text-secondary text-lg">{spell.spell}</div>
            </div>
            <p className="list-col-wrap text-xs">{spell.use}</p>
          </li>
          </div>
        
        
      ))}      
      </div>
    </List>
    </>
  )   
}

//funcs
const getSpells = async () => {
  const response = await fetch('https://potterapi-fedeperin.vercel.app/en/spells');
  const data = await response.json();
  return data;
}
