import * as React from "react"

import Sidebar from "./sidebar"

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="sm:table sm:h-screen sm:w-full">
        <div className="sm:table-row">
          <Sidebar />

          <div className="sm:table-cell bg-gray-900 text-gray-200 pt-20 p-6 sm:pt-6">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
