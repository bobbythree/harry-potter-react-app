export default function List({children, title}) {
  return (
    <div className="grid place-items-center">
      <ul className="list rounded-sm shadow-md m-1">  
        <div className="flex flex-col items-center content-center font-primary">
          <div className="collapse collapse-arrow bg-base-100 md:w-1/2 w-7/8 text-center grid place-items-center">
            <input type="checkbox" />
            <div className="collapse-title font-semibold">{title}</div>
            <div className="collapse-content text-sm flex flex-col items-center text-start w-7/8 p-1 gap-2">
              {children}
            </div>
          </div>
        </div>
      </ul>
    </div>
  )
}