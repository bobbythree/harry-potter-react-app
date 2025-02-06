export default function List({children}) {
  return (
    <ul className="list bg-base-200 rounded-box shadow-md w-1/2 m-2">  
      {children}
    </ul>
  )
}