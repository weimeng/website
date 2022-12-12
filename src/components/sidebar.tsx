import * as React from "react"

const Sidebar = () => {
  return (
    <aside className="fixed w-full sm:static sm:table-cell sm:w-72 bg-black text-gray-500 p-3 sm:p-">
      <div className="flex">
        <h2 className="text-xl uppercase font-bold sm:mb-2 flex-auto">
          My Site
        </h2>
      </div>
    </aside>
  )
}

export default Sidebar
