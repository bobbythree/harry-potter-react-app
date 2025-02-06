export default function List({children}) {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md w-7/8 m-1 p-2">  
      {children}
    </ul>
  )
}