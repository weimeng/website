import React, { useState } from "react"
import navData from "../data/navigation.yaml"

import NavigationList from "./navigation"

const Sidebar = () => {
  const [smMenuExpanded, toggleSmMenu] = useState(false);

  return (
    <aside className="fixed w-full sm:static sm:table-cell sm:w-72 bg-black text-gray-500 p-3 sm:p-">
      <div className="flex">
        <h2 className="text-xl uppercase font-bold sm:mb-2 flex-auto">
          Wei Meng's Website
        </h2>

        <button
          className="flex-shrink uppercase sm:hidden btn p-0 px-1 js__namespace-menu-btn"
          onClick={ () => toggleSmMenu(!smMenuExpanded) }
        >
          Menu
        </button>
      </div>

      <div className={`${ smMenuExpanded ? "" : "hidden" } sm:block js__namespace-menu`}>
        <NavigationList navItems={navData.navigation} />
      </div>
    </aside>
  )
}

export default Sidebar
