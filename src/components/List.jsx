export default function List({children}) {
  return (
    <ul className="list bg-warning-content rounded-sm shadow-md w-7/8 m-1 p-1">  
      {children}
    </ul>
  )
}