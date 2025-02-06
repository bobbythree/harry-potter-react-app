export default function List({children}) {
  return (
    <ul className="list bg-base-200 rounded-box shadow-md p-5">  
      {children}
    </ul>
  )
}