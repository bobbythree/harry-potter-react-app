import { useQuery } from "@tanstack/react-query"
import List from "./List"
import Spinner from "./Spinner"

export default function BookList() {
  const { data, isPending, error } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks
  });

  if (error) {
    return <p>Error: {error.message}</p>; // Display error message
  }

  if (isPending) {
    return <Spinner />
  }

  return (    
    <List title="Book Titles">
      {data && data.map((book, index) => (
        <div key={index} className="bg-warning-content p-1">
          <li className="list-row bg-base-300">
            <div>
              <img className="h-18 w-14 rounded-sm mb-2" src={book.cover}/>
              <div className="text-primary-content">{`Book ${book.number}`}</div>
              <div className="text-secondary text-lg">{book.title}</div>
            </div>
            <p className="list-col-wrap text-xs">{book.description}</p>
          </li>
        </div>        
      ))}      
    </List>
     
  );
}

//funcs
const getBooks = async () => {
  const response = await fetch('https://potterapi-fedeperin.vercel.app/en/books');
  const data = await response.json();
  return data;
}
