import { useQuery } from "@tanstack/react-query"
import List from "./List";


export default function BookList() {
  const { data, isPending, refetch, error } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks
  });

  if (error) {
    return <p>Error: {error.message}</p>; // Display error message
  }

  return (
    <div className="flex flex-col items-center content-center text-center">
      <div class="collapse collapse-arrow bg-base-200 border border-base-300 w-1/2">
        <input type="checkbox" />
        <div class="collapse-title font-semibold">Book Titles</div>
        <div class="collapse-content text-sm flex flex-col items-center">
          {data && data.map((book, index) => (
            <List key={index}>
              <li className="list-row">
                <div><img className="size-12 rounded-sm" src={book.cover}/></div>
                <div>
                  <div className="text-primary-content">{`Book ${book.number}`}</div>
                  <div className="text-secondary text-lg">{book.title}</div>
                </div>
                <p className="list-col-wrap text-xs">{book.description}</p>
                </li>
            </List>
          ))}      
        </div>
      </div>
    
    </div>
  );
}

//funcs
const getBooks = async () => {
  const response = await fetch('https://potterapi-fedeperin.vercel.app/en/books')
  const data = await response.json();
  return data
}
