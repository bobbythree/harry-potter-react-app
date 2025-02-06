import { useQuery } from "@tanstack/react-query"
import List from "./List";


export default function ListItems() {
  const { data, isPending, refetch, error } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks
  });

  if (error) {
    return <p>Error: {error.message}</p>; // Display error message
  }

  return (
    <>    
      {data && data.map((book, index) => (
        <List key={index}>
          <li className="list-row">
            <div><img className="size-12 rounded-box" src={book.cover}/></div>
            <div>
              <div className="text-primary-content">{`Book ${book.number}`}</div>
              <div className="text-secondary">{book.title}</div>
            </div>
            <p className="list-col-wrap text-xs">{book.description}</p>
            </li>
        </List>
      ))}      
    </>
  );
}

//funcs
const getBooks = async () => {
  const response = await fetch('https://potterapi-fedeperin.vercel.app/en/books')
  const data = await response.json();
  return data
}
